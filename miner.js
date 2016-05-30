var x = Math.floor(npc.getBlockX());
var y = Math.floor(npc.getBlockY());
var z = Math.floor(npc.getBlockZ());

var distance = 30;
var height = y+1;
var closestDistance = 99999999;

for(i =0; i<distance; i++){
    x = Math.floor(npc.getBlockX()) - (distance/2) + i;
    for(j=0; j<distance; j++){
        z = Math.floor(npc.getBlockZ()) - (distance/2) + j;
        var blockToCheck = world.getBlock(x,height,z);
        npc.say(blockToCheck);
    }
}
event.setCancelled(true);
npc.navigateTo(x+5, y, z, 1);
