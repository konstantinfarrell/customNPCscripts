// Get current npc coords
var x = Math.floor(npc.getBlockX());
var y = Math.floor(npc.getBlockY());
var z = Math.floor(npc.getBlockZ());

// Define some helpful variables
var sight = 150;
var closestDistance = 99999999;
var h = Number(y);
var coordinates = [];
var block=null;

function canSeeBlock(x0, z0, xf, zf, h){
    // 0 - npc, f - block
    // Assumes player and block are on
    // the same level so y check is not
    // necessary.
    if(z0<zf){
        if(x0<xf){
            // npc coords are less
            var block1 = world.getBlock((xf-1),h,zf);
            var block2 = world.getBlock((xf-1),h,(zf-1));
            var block3 = world.getBlock(xf,h,(zf-1));
            if(block2 & block1 & block3){
                return false;
            }
        } else {
            // npc x is greater
            var block1 = world.getBlock((xf+1),h,zf);
            var block2 = world.getBlock((xf+1),h,(zf+1));
            var block3 = world.getBlock((xf+1),h,(zf-1));
            if(block2 & block1 & block3){
                return false;
            }
        }
    } else {
        if(x0<xf){
            // npc z is less
            var block1 = world.getBlock((xf+1),h,(zf-1));
            var block2 = world.getBlock(xf,h,(zf-1));
            var block3 = world.getBlock((xf-1),h,(zf-1));
            if(block2 & block1 & block3){
                return false;
            }
        } else {
            // npc coords are greater
            var block1 = world.getBlock((xf+1),h,zf);
            var block2 = world.getBlock((xf+1),h,(zf+1));
            var block3 = world.getBlock(xf,h,(zf+1));
            if(block2 & block1 & block3){
                return false;
            }
        }
    }
    return true;
}

// Loop in a big square around the npc
// looking for the closest stone
for(i=0; i<sight; i++){
    var block_x = Math.floor(npc.getBlockX()-(sight/2) + i);
    for(j=0; j<sight; j++){
        var block_z = Math.floor(npc.getBlockZ()-(sight/2) + j);
        // Grab the block we're checking
        var checkblock = world.getBlock(block_x,h,block_z);
        if(checkblock != null){
            // Compare its distance to the previous closest
            // block and keep the closer of the two.
            var distance = Math.sqrt(Math.pow(Math.abs(block_z-z), 2)+Math.pow(Math.abs(block_x-x), 2));
            if(distance < closestDistance){
                if(checkblock.getName() == "minecraft:stone"){
                    var can_see = canSeeBlock(x,z,block_x,block_z,h);
                    if(can_see){
                        //npc.say(checkblock.getVisibleType());
                        closestDistance = distance;
                        coordinates = [block_x,h,block_z];
                        block = checkblock;
                    }
                }
            }
        }
    }
}

npc.setTempData("dest_x", coordinates[0]);
npc.setTempData("dest_y", coordinates[1]);
npc.setTempData("dest_z", coordinates[2]);
npc.setTempData("navigating", true);


// Prevent the default action from occurring.
event.setCancelled(true);

// Walk over to the block.
npc.navigateTo(coordinates[0], coordinates[1], coordinates[2], 1);
