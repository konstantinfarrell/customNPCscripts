// From Konstantin With Love
//
//      Custom NPCs: Automated Miner - Update
//
//
//  This is where the magic happens. This is how a Miner determines
//  what they are doing at any given time.
//
//  A Miner can be in 1 of 3 states.
//
//      - Thinking
//      - Moving
//      - Mining
//
//  When in the Thinking state, a Miner has just completed
//  a task, and is ready to start a new one. The Miner should
//  examine their surroundings, and determine their next task
//  accordingly.
//
//  The moving state is for moving towards a target block, or
//  positioning the npc for a new task, goal, search, or
//  mine-start sequence.
//
//  In the mining state, the npc will be focused on a single target
//  block, with the objective of breaking it and collecting any
//  ore/experiece that comes out of it.

// Get current npc coords
var x = Math.floor(npc.getBlockX());
var y = Math.floor(npc.getBlockY());
var z = Math.floor(npc.getBlockZ());

var state = npc.getTempData("state");
var target = null;

if(state=="thinking"){
    if(npc.hasTempData("target") & npc.getTempData("target") != null){
        target = npc.getTempData("target");
    } else {
        function getTarget(distance, preferredType){
            /*
             *  Get the stupid target block.
             *  make sure its the right type ya dunce.
             *
             */

            target = null; // story of my life
            var h = npc.getBlockY();
            var currentDistance = 9999999;

            // Loop in a big square around the npc
            // looking for the closest stone
            for(i=0; i<distance; i++){

                var block_x = Math.floor(npc.getBlockX()-(distance/2) + i);
                for(j=0; j<distance; j++){

                    var block_z = Math.floor(npc.getBlockZ()-(distance/2) + j);

                    // Grab the block we're checking
                    var checkblock = world.getBlock(block_x,h,block_z);

                    if(checkblock != null){

                        // Compare its distance to the previous closest
                        // block and keep the closer of the two.

                        var closestDistance = Math.sqrt(Math.pow(Math.abs(block_z-z), 2)+Math.pow(Math.abs(block_x-x), 2));
                        if(closestDistance < currentDistance){
                            if(checkblock.getName() == preferredType){
                                closestDistance = currentDistance;
                                coordinates = [block_x,h,block_z];
                                target = coordinates;
                            }
                        }
                    }
                }
            }
            return target;
        }
        target = getTarget(20, "minecraft:coal_ore");
        npc.setTempData("target", target);
    }

} else if(state=="moving"){

} else if(state=="mining"){

}
