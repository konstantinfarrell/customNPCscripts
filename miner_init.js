// From Konstantin With Love
//
//      Custom NPCs: Automated Miner - Init
//
//
//  All that really happens in here is a bunch of global-level
//  definitions in the case that they haven't already been defined.
//
//  There are also some initializations for npc-level variables, such
//  as the initial state.
//
//
//
// Give that champ a pickaxe.
var name = "minecraft:iron_pickaxe";
npc.setLeftItem(world.createItem(name, 0, 1));

if(!world.hasStoredData("states")){
    // Define the states.
    var states = [
        "thinking",
        "moving",
        "mining",
    ];

    world.setStoredData("states", states);
}

// Initialize NPC's to "thinking"
npc.setTempData("state", states[0]);

// It would REALLY suck to have to type "minecraft:"
// for every item declaration.
if(!world.hasStoredData("prefix")){
    var prefix = "minecraft:";
    world.setStoredData("prefix", prefix);
}


if(!world.hasStoredData("avoid")){
    // Define the stuff to avoid.
    var avoid = [
        "log",
        "leaves",
        "sponge",
        "golden_rail",
        "rail",
        "piston",
        "wool",
        "brick_block",
        "tnt",
        "bookshelf",
        "torch",
        "oak_stairs",
        "ladder",
        "stone_stairs",
        "fence",
        "redstone",
        "minecart",
        "sign",
        "planks"
    ];
    world.setStoredData("avoid", avoid);
}

if(!world.hasStoredData("excavate")){
    // Define the stuff to excavate
    var excavate = [
        "dirt",
        "sand",
        "gravel",
        "stone",
    ];
    world.setStoredData("excavate", excavate);
}

if(!world.hasStoredData("keep")){
    // Define the stuff to keep around
    var keep = [
        "coal_ore",
        "gold_ore",
        "iron_ore",
        "redstone_ore",
        "diamond_ore",
    ];
    world.setStoredData("keep", keep);
}
