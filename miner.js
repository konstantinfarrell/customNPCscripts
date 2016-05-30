// Get current npc coords
var x = Math.floor(npc.getBlockX());
var y = Math.floor(npc.getBlockY());
var z = Math.floor(npc.getBlockZ());

// Define some helpful variables
var sight = 50;
var closestDistance = 99999999;
var h = Number(y)+1;
var coordinates = [];
var block=null;

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
                    closestDistance = distance;
                    coordinates = [block_x,h,block_z];
                    block = checkblock;
                }
            }
        }
    }
}

// Prevent the default action from occurring.
event.setCancelled(true);

// Walk over to the block.
npc.navigateTo(coordinates[0], coordinates[1], coordinates[2], 1);
