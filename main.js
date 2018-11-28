alert("You're born with a weird birthmark on your face. You never knew what the birth mark meant.Today is the day you find that out!");
let playerName = prompt(" A stranger approaches you. \n  Stranger: Child. What is your name?");
// const playerItems = [sword, shield, apple, bread, water]
// playerItems 
let choice1 = prompt(playerName + " Why are you out here alone? \n 1. Ignore him \n 2. Tell him you're looking for food \n 3. Tell him he should mind his own business. \n 4. Tell him you don't talk to strangers. \n Please choose 1-4");

//                                                                                               Lore
//ignore him
if (choice1 === "1") {
    let choice11 = prompt("Stranger: *Why are you out here alone? \n 1. Ignore him \n 2. Tell him you're looking for food \n 3. Tell him he should mind his own business \n Please choose 1-4");

    //Ignore him
    if (choice11 === "1") {
        alert("The Stranger has deleted you. Goodbye " + playerName + "." + " \n Better luck next time!");
    }
    //Tell him you're looking for food
    else if (choice11 === "2") {
        let choice112 = prompt("Stranger: *Laughs* \n I can teach you would you like to learn? \n 1. Why should I turst you?\n 2. I don't trust strangers!");
        //Why should I trust you?
        if (choice112 === "1") {
            let choice1121 = prompt("*Removes hood* \n Don't you recognise this? \n *Points to a mark on his forehead* \n 1. I do.");
            pathJoin1121Pathjoin1122(1121);
        }
        //I don't trust strangers
        else if (choice112 === "2") {
            let choice1122 = prompt("*Removes hood* \n Stranger: I'm not a stranger \n 1. I recognise that mark! ");
            pathJoin1121Pathjoin1122(1121);
        }

    }
    //Tell him he should mind his own business
    else if (choice11 === "3") {
        alert("Ninja's in pajamas fly kicks you in your face and you die.");
    }

}


//tell him you're looking for food
else if (choice1 === "2") {
    let choice21 = prompt("*Laugh* \n I can teach you to find food. Would you like to learn? \n ");
    if (choice21) { }

}
//tell him he should mind his own business
else if (choice1 === "3") {
    alert("Stranger: *Walks away and the truth leaves with him*");
    alert("'Stranger Danger!' Doesn't exist in games nerd!");
}
//tell him you don't talk to strangers
else if (choice1 === "4") {

} else {
    alert("Stranger: *Walks away and the truth leaves with him*");
    alert("'Stranger Danger!' Doesn't exist in games nerd!");
}

// New Path from 1121/1122
// let  pathJoin1121Pathjoin1122 = String =>   { let choice1 = prompt("Shall we go then? \n 1. Okay! \n 2. No");}
function pathJoin1121Pathjoin1122(String) {
    let choice1 = prompt("Shall we go then? \n 1. Okay! \n 2. No");
    //                                                                                               Lore
    //                                                                                          Mountain Mama    
    //Story
    alert("The monk gesters to his right, a portal appears. \n Stranger:'After you.' \n You enter the portal wondering what awaits you on the other side. \n You emerge from the portal and arrive in a lustrious green forest and view your surroundings.");

    //Starting point
    let choice2 = prompt("Stranger: What's that over there? \n *Stranger points* \n *You notice a mountain ahead of you* \n Stranger: Do you remember the way? \n *You nod your head* \n Stranger: You lead, I'll follow. \n Where do you want to move to? \n 1. Forward \n 2. Left \n 3. Right");

    //forward
    if (choice2 == "1") {
        let choice21 = prompt("*You hop over a fallen log* \n You make your way forward deeper into the forest \n You arrive at a fork in the path \n Stranger:Which way? \n 1. Left - Towards the glistening in the distance \n 2. Right - Deeper into the forest ");
        //Towards Glistening (Left path)
        if (choice21 == "1") {
            //Confirmation
            let choice211 = prompt("*You scurry towards the glistening* \n Stranger: I feel like we've been here before \n Are you sure? \n 1. Yes \n 2. No");

            if (choice211 === "1") {
                alert("Barreling down the path ahead of you desperate to reach the treasure you believe is ahead of you. You fail to notice the dragon flying above. Almost there, the treasure within reach a large black shadow engulfs you. The dragon is here.");
                alert("*Screeeeeeeeeeeeeeeeeech!* \n Shyvana: Feel my talons!");
                alert("You died.");

            }
            //Turn back
            else if (choice211 === "2") {

                pathJoin1121RightPath(String);
            }

        }
        //Deeper into the forest (Right path)
        else if (choice21 == "2") {
            pathJoin1121RightPath(String);

        }
    }
    //left
    else if (choice2 == "2") {
        let choice21 = prompt("*You hop over a fallen log* \n You make your way forward deeper into the forest \n ");
    }
    //right
    else if (choice2 == "3") {
        let choice21 = prompt("*You hop over a fallen log* \n You make your way forward deeper into the forest \n ");
    }
}

function pathJoin1121RightPath(String) {
    let choice2112 = prompt("*You head down the right path.* \n *You stumble across a smouldering corpse* \n You notice something shiney on the body \n Do you investigate? \n 1. Yes \n 2. No");
    //yes - Sword Acquired
    if (choice2112 == "1") {
        alert("After investigation, you notice a sword attached to the smouldering corpse. \n *You grasp the sword by its hilt and remove it from its cheath and move on.\n                **-Sword Acquired!-**");
        //const playerItems = [sword]; - This Broke my code?
        carryOnMountainMama(String);
        let choice21121 = prompt("Do you wish to equip your sword? \n 1. Yes \n 2. No");


        //Equip Sword to fight goblins
        if (choice21121 == "1") {
            let opts10 = prompt("You raise your sword striking fear into the hearts of the goblins. \n *The goblins flee the battle* \n This allows you to move forward, arriving at the next crossroad. \n Stranger: Where to captain? \n 1. Did you call me 'captain'? \n 2. Don't call me that! \n 3. I think it's left! \n 4.Let's try going right? \n 5.Straight ahead! \n 6. Attempt to kill Stranger \n 7. Demand portal out of here \n  8. *gasp* \n 9. I'm not sure \n 10. I seem to be lost");
            if (opts10 == 1) {
                portalPath(String);
            }
            else if (opts10 == 2) { portalPath(String); }
            else if (opts10 == 3) { portalPath(String); }
            else if (opts10 == 4) { portalPath(String); }
            else if (opts10 == 5) { portalPath(String); }
            else if (opts10 == 6) { portalPath(String); } // Attempt to Kill Stranger
            else if (opts10 == 7) { portalPath(String); }
            else if (opts10 == 8) { portalPath(String); }
            else if (opts10 == 9) { portalPath(String); }
            else if (opts10 == 10) { portalPath(String); }

        }
        else if (choice21121 == "2") {
            death(String);
        }
    }


    //no
    else if (choice2112 == "2") {
        carryOnMountainMama(String);
        death(String);
    }

}

function carryOnMountainMama(String) {
    string = alert("You carry on moving forward as you venture forth goblins surround you. \n *Your previous path is now blocked!*");
}

function death(String) {
    string = alert("Since you have no way of defending yourself, the goblins have you wear a pretty dress. \n *You notice the Stranger disappear into the mist* \n You die of HUMILIATION in your pretty dress.");
}
//                                                                                          Mountain Mama    
//                                                                                          Mountain Mama    
//                                                                                          Mountain Mama    
//                                                                                          Mountain Mama    
//                                                                                          Mountain Mama    
//                                                                                          Mountain Mama    
//                                                                                          Mountain Mama    

function portalPath(String) {
    alert("The stranger waves his hand and you are consumed by a portal.");
    alert("You realise you're in the centre of a room, with no exit, alone.\n Strange Voice: Here begins your trial, attempt to escape this room. Fail to do so and you will be trapped in this realm");
    let directionOfPlayer = centerRoom(String);

    if (directionOfPlayer == "1") {

    }
    else if (directionOfPlayer == "2") {

    }
    else if (directionOfPlayer == "3") {

    }
    else if (directionOfPlayer == "4") {

    }


}


function centerRoom(String) {
    let String = prompt("Where do you want to go? \n 1.Up \n 2.Right \n 3.Down \n 4. Left");
}

let top = String => {
    let input = prompt("Adjacent to you is a wall! \n Do you want to touch the wall? \n 1. Touch the wall \n 2. Go back \n 3. Go right 4. Go left");
    if (input = 1) {
        touchWallInCorrect();
        let input = prompt("Adjacent to you is a wall! \n Do you want to touch the wall? \n 1. Go back \n 2. Go right 3. Go left");

    }
    else if (input = 2) {
        centerRoom();
    }
    else if (input = 3) {
        corners();

    }
    else if (input = 4) {
        corners();
    }

}
function right() { }



function corners(string) {
    string = alert("You have reached the corner of the room \n where would you like to go? \n 1. Go back. \n 2. Go forward \n 3. Touch the wall");
}

function bottom() { }


function touchWallCorrect(String) {
    alert("You hear a creaking sound!");

}
function touchWallInCorrect() {
    alert("Nothing Happened.");
}


//    - - -
//    - - - - Trap Room
//    - - -
//       -
//   CP- -
// End Condition = User finds 2 items