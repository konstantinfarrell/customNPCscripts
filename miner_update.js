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


var state = npc.getTempData("state");
if(state=="thinking"){

} else if(state=="moving"){

} else if(state=="mining"){

}

