var target = npc.getTempData("target");
var state = npc.getTempData("state");


npc.say(target);
npc.say("state: "+ state);
var block = world.getBlock(target[0], target[1], target[2])
if(block != null){
    block.setBlock("minecraft:air");
}
if(npc.hasTempData("target")){
    npc.setTempData("target", null);
}
event.setCancelled(true);
