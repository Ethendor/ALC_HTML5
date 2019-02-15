// Commenting, Yay!
/*
Commenting
On
Multiple
Lines,
Yay!
*/

// alert("Warning will self destruct!")

// confirm("Do you want to die?")

// prompt("What type of death would you prefer")

// var playerName = prompt("What is your name!")

// document.write(playerName)


var checkInv = function(){
    alert("Coins: " + inventory.coins + "\n Keys: " + inventory.key + "\n Swords: " + inventory.sword + "\n Lawnmowers: " + inventory.lawnMower + "\n HP: " + inventory.hp);
}

// declare inventory
var inventory = {
    coins: 400,
    sword: 0,
    key: 0,
    lawnMower: 0,
    hp: 3,
    cheese: 0
}

var quest = {
    seduce: 0
}

// Computer Variables
var manipulate = false
var boring = false


// declare array
var npcNames = ["Jeffory", "Steven", "Bob", "Darius", "Courtney"];

// Guild Quest Varible
var guildQuest1 = false;


Game();
//Opening function
function Game(){
    
    alert("Welcome to the most exciting adventure of your life!");
    
    // Funny change name to Jeff or Stanley
    var playerName = prompt("But before the fun can begin what is your Name?");
    
        var jeffName = "Jeff"
    
    if (playerName == jeffName){
        jeffName = "Stanley"
    }
    
    else{
        jeffName = "Jeff"
    }
    
    alert("Hmm I don't think I like your name very much " + playerName + ", How about I call you " + jeffName + " instead, I think that sounds cooler.");
    
    // Check Gender for Seduce Guard
    var gender = prompt("What gender do you indentify as \n -Male \n -Female \n -Other").toLowerCase();
    
    if(gender == "male"){
        var male = true;
    }
    else if(gender == "female"){
        var female = true;
    }
    else{
        var otherGen = true;
    }
    

    
    alert("Well " + jeffName + " your adventure is about to begin in the wonderful land of Cloudborg, I hope you're ready for the most exciting adventure yet!");
    
    City();
    
    // Game Begins
    function City(){
        var city = prompt("Well " + jeffName + " you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Filled with huge shops and villages and a strong millitary that houses inside the castle. The ground is made of white fluffy cloud and the feel is very heavenly. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Mountains to the left with tons of monsters. Or you can travel to the ground. You also see a shop with lots of equipment \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n -Travel to the ground \n -Go to Shop").toLowerCase();
        
        if(city == "go to inn" || city == "inn"){
            Inn();
        }
        
        else if(city == "go to castle" || city == "castle"){
            CastleGate();
        }
        
        else if(city == "go to the Mountains" || city == "mountains"){
            Mountain();
        }
        
        else if(city == "travel to ground" || city == "ground"){
            alert("You Jumped off the Cloud you were on and died on impact, Silly " + jeffName + " what did you think was gonna happen, I can revive you if you would like");
            City();
        }
        
        else if(city == "check inventory" || city == "inventory"){
            checkInv();
            City();
        }
        
        else if(city == "go to shop" || city == "shop"){
            alert("You enter the shop you see a lot of items for sale, There's a big sign showing how the radical lawnmower is on sale for only 100 gold coins");
            alert("Tom: *southern accent* Howdy pardner, I got some great goods here for you to do some buying. Please check out our lawnmowers they're amazing and definetly not on sale because they're aren't selling too good.");
            Shop();
            
            function Shop(){
            var shop = prompt("What would you like to buy \n -Ordinary Sword, 200 coins \n -Radical Lawnmower, 100 coins \n -Magic but rusted Key, 50 coins \n -Back to City").toLowerCase();
            if(shop == "ordinary sword" || shop == "sword"){
                var buySword = confirm("Tom: A completley ordinary sword, it's good at killing enemies though, would you like to buy it only 200 coins!");
                if(buySword ==  true){
                    if(inventory.coins >= 200){
                        (inventory.coins -= 200);
                        (inventory.sword += 1);
                        alert("Ba dum da da! You got the completley ordinary sword!");
                        Shop();
                    }
                    else{
                        alert("Tom: You don't have enough money, what are you trying to do, ROB ME!");
                        Shop();
                    }
                }
                else{
                    Shop();
                }
            }
            else if(shop == "radical lawnmower" || shop == "lawnmower"){
                var buyLawnmower = confirm("Tom: The absolutely radical 2 of a kind lawnmower, great for when you need to mow some lawns, BIG DEAL ONLY 100 COINS! Please buy it, I'm begging ya!");
                if(buyLawnmower ==  true){
                    if(inventory.coins >= 100){
                        (inventory.coins -= 100);
                        (inventory.lawnMower += 1);
                        alert("Ba dum da da! You got the radical lawnmower!")
                        Shop();
                    }
                    else{
                        alert("Tom: You don't have enough money, what are you trying to do, ROB ME!");
                        Shop();
                    }
                }
                else{
                    Shop();
                }
            }
            else if(shop == "magic but rusted key" || shop == "magic key" || shop == "rusted key" || shop == "key"){
                var buyKey = confirm("Tom: This key can unlock any door but it's very rusted so it will disinigrate after one use, only 50 coins!");
                if(buyKey ==  true){
                    if(inventory.coins >= 50){
                        (inventory.coins -= 50);
                        (inventory.key += 1);
                        alert("Ba dum da da! You got the magic but rusted key!")
                        Shop();
                    }
                    else{
                        alert("Tom: You don't have enough money, what are you trying to do, ROB ME!");
                        Shop();
                    }
                }
                else{
                    Shop();
                }
            }
            else if(shop == "back to city" || shop == "back" || shop == "city"){
                alert("Tom: Alright come back soon, ya hear!")
                City();
            }
                
            else if(shop == "check inventory" || shop == "inventory"){
            checkInv();
            Shop();
        }
            else{
                alert("Tom: I don't understand " + shop + ", you foreigner!");
                Shop();
            }        
            }    
        }
        
        else{
            alert("I don't understand " + city + ", you dummy!");
            City();
        }
                
        function Inn(){
            var inn = prompt("Well " + jeffName + " this is the place of heart and soul, the place every adventurer dreams of. Here folks of all types stay. It is a clean and huge Inn, made up of wood it almost looks like a huge cabin. In the corner you see a banner and members from the Adventurer Guild saying they're hiring. At the bar are you see the barkeeper and some guests are talking about politics. And Upstairs there is a bed you can sleep on and restore hp \n -Talk to Guild \n -Chat with Barkeeper \n -Sleep \n -Back to City").toLowerCase();
            
            // Start Guild Quest Line
            if(inn == "talk to guild" || inn == "guild"){
                if (guildQuest1 == false){
                    var guild1 = confirm("You express your interest in joining the guild, the recruiter there, Dalamas, tells you that when you join your first task will be to cut his grass! You'll get 200 gold coins for finsihing this task \n Do you accept");
                
                    if(guild1 == true){
                        alert("Ba dum da dum! You got your first quest, now go cut some grass!");
                        alert("Oh before you go let me give you our most prized possesion.");
                        (inventory.lawnMower ++);
                        alert("Ba dum da dum! You got the radical Lawn Mower");
                    
                        Grass();
                    
                    function Grass(){
                        alert("You started cutting the grass in the Dalamas's backyard, it's a really hot and sunny day here in Taliman. You went down the rows of grass cutting them all but then you found a grass that was mightier than the rest.");
                        
                        var mightyGrass = prompt("The Mighty Grass stands in your way.\n -Bargain with it \n -Mow it down \n -Attack with Sword \n -Run Away").toLowerCase();
                        
                        switch(mightyGrass){
                                
                            case "bargain": case "bargain with it":
                                alert("It seems that no matter how mighty the grass might be, it still doesn't understand the english language");
                                Grass();
                                break;
                                
                            case "mow": case "mow it down":
                                alert("You try to mow it down but because it is very mighty, so both your radical lawnmower and the mighty grass died");
                                (inventory.lawnMower --);
                                // Save that you finished the quest
                                guildQuest1 = true;
                                
                                alert("You cut all the Grass!");
                                alert("You returned to the Inn where the guild gave you 200 gold coins, they hope to see you return soon");
                                (inventory.coins += 200);
                                Inn();
                                
                                break;
                                
                            case "sword": case "attack with sword": 
                                if (inventory.sword > 0){
                                    alert("You defeated the mighty grass");
                                    // Save that you finished the quest
                                    guildQuest1 = true;
                                    
                                    alert("You cut all the Grass!");
                                    alert("You returned to the Inn where the guild gave you 200 gold coins, they hope to see you return soon");
                                    (inventory.coins += 200);
                                    Inn();
                        
                                }
                                else{
                                    alert("You don't have a sword, idiot!");
                                    Grass();
                                }
                                break;
                                
                            case "run": case "run away":
                                // Set cowards to true, similar to boring
                                var coward = true;
                                alert("You ran back to the inn apologizing to the guild they tell you it's alright because grass can be pretty scary, but you were denied your pay from the guild");
                                Inn();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                Grass();
                                
                            default:
                                alert("I don't understand " + mightyGrass + ".");
                                Grass();
                        }
                    }
                    
                }
                
                    else{
                        alert("Wow, aren't you boring " + jeffName + ".");
                        // Set boring to true, important later on
                        var boring = true;
                        Inn();
                }
                    
                }
                else if (guildQuest1 == true){
                    var guild2 = confirm("Dalamas: " + jeffName + " back for another quest are ya, well you came just in time, we have another situation, some more folks needs some cutting are ya in.");
                }
            
            }
            
            // Boring Lore Politics
            else if(inn == "chat with barkeeper" || inn == "barkeeper" || inn == "chat"){
                alert("Courtney: Hi I'm " + npcNames[4] + "! I'm the master of this joint right here, now you just sit down you must have tons of adventures to tell me about!");
                
                if(guildQuest1 == true){
                    alert("You tell her about the mighty grass");
                    alert("Courtney: Oh that sounds so scary, well you're safe now. I have heard adventures of dragons and wizards but this story interests me so much how did such a mighty grass come into existance?");
                }
                else{
                    var Barkeep1 = prompt(" -Lie \n -Tell Truth").toLowerCase();
                    if (Barkeep1 == "lie"){
                        alert("You tell her about a journey in the mountains where you defeated the evil Wizard Dragon, Drizard");
                        alert("Courtney: Oh that's neat I guess. \n She can tell your lying.");
                    }
                    else if (Barkeep1 == "tell truth" || Barkeep1 == "truth"){
                        alert("You tell her that you haven't been on any adventures yet");
                        alert("Courtney: That's alright sweetie, I'll just tell you some stuff of my own. So I heard that the Castle Guard just gave up on looking for a king for Talisman. It's been almost three years since his death and they have not been able to find a worthy predecessor. I've heard we'll just vote on everything when we have to make a decision, that sounds so scary what if other people have wrong opinions. She rambled on more and more until you fell asleep on the counter. When you wake up you apologize to the Barkeeper and leave.");
                        City();
                    }
                    else{
                        alert("I don't understand " + Barkeep1 + ", you dummy!");
                        Inn();
                    }
                }
            }
            
            // Funny thief
            else if(inn == "sleep"){
                (inventory.hp = 3)
                if (inventory.coins > 0){
                    inventory.coins = 0;
                    alert("While you were sleeping last night a thief came and stole all your money, but on the bright side your hp was restored");
                    Inn();
                }
                else{
                    alert("While you were sleeping last night a thief came and attempted to steal your money, but because you suck you had no money to steal, so you just had a nice restful sleep and your hp was restored");
                    Inn();
                }
            }
            else if(inn == "back to city"|| inn == "city"){
                City();
            }
            
            else if(inn == "check inventory" || inn == "inventory"){
                checkInv();
                Inn();
            }
            
            else{
                alert("I don't understand " + inn + ", you dummy!");
                Inn();
            }
        }
        
        function CastleGate(){
            var castleEntrance = prompt("Impressive isn't " + jeffName + " you stand at a huge gate you can see 20 or so towers in the distance. Here you see this massive fortress made out of red and black brick. You approach the gate two guards are there holding spears looking at you menacingly. One of the guards yell at you to state your business. \n -Run Away \n -None of your business \n -Here to Loot \n -I Need to See the King \n -Here to Train").toLowerCase();
            
            if(castleEntrance == "run away" || castleEntrance == "run"){
                City();
            }
            
            else if(castleEntrance == "none of your business" || castleEntrance == "business"){
                alert("The guard yells at you telling you that scumbags like you have no business here");
                CastleGate();
            }
            
            // Dungeon Quest Line
            else if(castleEntrance == "here to loot" || castleEntrance == "loot"){
                alert("The guards thank you for admitting you're a theif and take you to the dungeon");
                Dungeon();
            }
            
            else if(castleEntrance == "i need to see the king" || castleEntrance == "see the king" || castleEntrance == "king"){
                alert("The guards call you stupid as there is no king");
                CastleGate();
            }
            
            // Training Quest Line
            else if(castleEntrance == "here to train" || castleEntrance == "train"){
                alert("The guards open the gate and one of the guards escort you to the barracks");
                Barracks();
            }
            
            else if(castleEntrance == "check inventory" || castleEntrance == "inventory"){
            checkInv();
            CastleGate();
            }
            
            else{
                alert("I don't understand " + castleEntrance + ", you dummy!");
                CastleGate();
            }
        }
        
        function Dungeon(){
            var cell = prompt("You wake up in a dark cell the only light coming from a guard a few feet away with a lantern by his waist you hear his keys everytime he moves. \n -Investigate \n -Seduce Guard \n -Try Lock").toLowerCase();
            
            if(cell == "investigate"){
                var trapDoor = confirm("You look around your cell, you see many skeletons and chains accross the floor but you are the only one in here, the door is made out out of solid steel bars, there's no way you'll be able to break them. You see a odd panel with a skeleton on top of it, moving him reveals that there is a trapdoor, will you go inside?");
                if(trapdoor == true){
                    TrapDoor();
                    
                    function TrapDoor(){
                        alert("You entered the trapdoor leading you to a cellar. The cellar is very dark and you can see water running through it, while traveling across you encounter a normally sized rat.");
                        var rat = prompt("The normally sized rat looks ready to attack at any time! \n -Attack with Sword \n -Mow it Down \n -Step on it \n -Run Away").toLowerCase();
                        
                        switch(rat){
                            case "attack with sword": case "sword":
                                if(inventory.sword > 0){
                                    alert("You swing your completely ordinary sword and defeat the rat in one hit");
                                    BigRat();
                                }
                                else{
                                    alert("I don't remember you getting a sword");
                                    TrapDoor();
                                }
                                break;
                                
                            case "mow it down": case "mow":
                                if(inventory.lawnMower > 0){
                                    alert("You run over the rat and gets killed immediately");
                                    BigRat();
                                }
                                else{
                                    alert("I'm sorry to say but you do not have a lawnmower");
                                    TrapDoor();
                                }
                                break;
                                
                            case "step on": case "step": case "step on it":
                                alert("You stepped on the poor defenseless rat and killed him in one hit");
                                BigRat();
                                break;
                                
                            case "run away": case "run":
                                alert("You run away from the definetly scary and horrifying rat");
                                Dungeon();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                TrapDoor();
                                
                            default:
                                alert("I don't understand " + rat + ", sorry I'm not as intelligent as you might think")
                                TrapDoor();
                        }
                    }
                    
                    function BigRat(){
                        alert("Right after you defeated the rat, his big brother showed up and went to take his revenge on you");
                        var bigRat = prompt("The big and much scarier rat is preparing to attack, it has 3hp \n -Attack with Sword \n -Mow it Down \n -Step on it \n -Run Away");
                        
                        switch(bigRat){
                            case "attack with sword": case "sword":
                                if(inventory.sword > 0){
                                    alert("You swing your completely ordinary sword across his head and chop it off dealing two damage");
                                    alert("The rat still is alive though and rams it's body into you, you take one damage");
                                    alert("You then stab the rat in the heart and it dies");
                                    
                                    alert("The rat left behind some radioactive cheese");
                                    (inventory.cheese ++);
                                    alert("Ba dum da da! You got the radioactive cheese");
                                    
                                    alert("You climb out of the sewers into a well that leads to the city");
                                    City();
                                }
                                else{
                                    alert("I don't remember you getting a sword");
                                    TrapDoor();
                                }
                                break;
                                
                            case "mow it down": case "mow":
                                if(inventory.lawnMower > 0){
                                    alert("You turn on the lawnmower and the rat is terrified of the noise and runs away, leaving behind some radioactive cheese");
                                    (inventory.cheese ++);
                                    alert("Ba dum da da! You got the radioactive cheese!")
                                    
                                    alert("You climb out of the sewers into a well that leads to the city");
                                    City();
                                }
                                else{
                                    alert("I'm sorry to say but you do not have a lawnmower");
                                    TrapDoor();
                                }
                                break;
                                
                            case "step on": case "step": case "step on it":
                                alert("What do you think you can step on it, let me rephrase myself it is the giant horrifying rat that's way bigger than you.");
                               // alert("    _..----.._                                                                                            '  .--.    "'-.(0)_          0                                                                    '"''=:|   ,  _)_ \__ . c\'''-..'    /|\                                                                           '''------''---''---'"       "/ \"");
                                var stepOn = confirm("Now contemplate your actions do you actually want to attempt to step on him");
                                if(stepOn == true){
                                    alert("you attempted to step on him, the idiot you are, and your feet get stuck in his teeth which are as big as your legs oops, and you take 1 damage");
                                    (inventory.hp --);
                                    if(inventory.hp > 0){
                                        BigRat();
                                    }
                                    else{
                                       alert("The rat chomped down and ate you, you then were slowly digested until your eventual death, but since I'm nice I revived you")
                                       (inventory.hp = 3);
                                       City(); 
                                    }
                                }
                                
                                BigRat();
                                break;
                                
                            case "run away": case "run":
                                alert("You ran away from the very big and horrifying rat");
                                Dungeon();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                BigRat();
                                
                            default:
                                alert("I don't understand " + bigRat + ", sorry I'm not as intelligent as you might think");
                                TrapDoor();
                    }
                    }
                    
                    
                }
                else{
                    Dungeon();
                }
            }
            else if(cell == "seduce guard" || cell == "seduce" || cell == "guard"){
                // Add quest.seduce to make fun of people maniplulating game
                if(male == true){
                    alert("The guard is unfortuantley not gay and you were unable to seduce him");
                    Dungeon();
                }
                else if(female == true){
                    if(quest.seduced <= 0){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key ++);
                        alert("Ba dum da da! You got the guard's key")
                        (quest.seduce ++);
                        Dungeon();
                    }
                    else if(quest.seduce == 1){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key ++);
                        alert("Ba dum da da! You got the guard's key")
                        (quest.seduce ++);
                        alert("I see what you are doing, I ask you to stop immediatley");
                        Dungeon();
                    }
                    else if(quest.seduce == 2){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key ++);
                        alert("Ba dum da da! You got the guard's key")
                        (quest.seduce ++);
                        alert("Stop it! This is my game not yours, now stop manipulating it.");
                        Dungeon();
                }
                   else if(quest.seduce == 3){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key ++);
                        alert("Ba dum da da! You got the guard's key")
                        (quest.seduce ++);
                        alert("I've had enough stop it or face the consequences.");
                        Dungeon(); 
                   }
                    else if(quest.seduce == 4){
                        alert("Hah I have stopped you, no more will can you manipulate the system for keys, and I will remember this wrongdoing that you have done")
                        (quest.seduce ++);
                        manipulate = true
                        Dungeon();
                    }
                    else if(quest.seduce == 5){
                        alert("What did you not believe me, well believe I just went through and fixed the bug in my program so no more keys from the guard, scurry along now")
                        (quest.seduce ++);
                    }
                    else{
                        alert("I MEAN IT! Go away please, just progress with the game already")
                    }
                     
                }
                else{
                    alert("The guard had no idea whether or not to be attracted to you, and in his confusion he did not come closer");
                    Dungeon();
                }
            }
            else if(cell == "lock" || cell == "try lock"){
                if(inventory.key > 0){
                    (inventory.key --);
                    alert("The key was so rusted that it broke while you opened the door, but the cell is open now but the guard sees you and tries to stop you");
                    
                    Guard();
                    // Guard Encounter
                    function Guard(){
                        var guard = prompt("An ordinary prison guard appeared. He stares at you menacingly as you see him reach for his sword. He has 2hp \n -Mow him Down. \n -Attack with Sword. \n -Shout \n -Drop Kick \n -Run Away").toLowerCase();
                        
                        switch(guard){
                            case "mow him down": case "mow":
                                if(inventory.lawnMower > 0){
                                    alert("You grab your radical lawnmower and attempt to run him over, he loses his legs in the process, but he still is able to fight, he attacks you with his sword for 1hp");   
                                    (inventory.hp -= 1);
                                    if(inventory.hp <= 0){
                                        alert("You died and your skeleton rotted in the dungeons forever, but since I'm nice I revived you")
                                        (inventory.hp = 3);
                                        City();
                                    }
                                    else{
                                        alert("You ran over him again with your radical lawnmower and he died, he dropped his sword in the process");
                                        (inventory.sword += 1);
                                        alert("Ba dum da da! You got the totally normal guard issued sword.");
                                        Castle();
                                    }
                                }
                                else{
                                    alert("You don't have a lawnmower silly billy");
                                    Guard();
                                }
                                break;
                                
                            case "attack with sword": case "sword": 
                                if(inventory.sword > 0){
                                    alert("You attack the guard right before he can pick up his sword, and since you caught him by surprise, he dies in one hit. You would think they would've thought to take away your weapons.")
                                    alert("You go up the stairs which bring you into the dungeon");
                                    Castle();
                                }
                                else{
                                    alert("What? Did you suddenly think you had a sword");
                                    Guard();
                                }
                                break;
                                
                            case "shout":
                                alert("YOU SHOUTED AT THE GUARD! He was intimidated but he noticed you were a weakling and still attacked you");
                                (inventory.hp -= 1);
                                if(inventory.hp <= 0){
                                    alert("You died and your skeleton rotted in the dungeons forever, but since I'm nice I revived you");
                                    (inventory.hp = 3)
                                    City();
                                }
                                else{
                                    Guard();
                                }
                                break;
                                
                            case "drop kick": case "kick":
                                alert("You caught him by surprise and knocked him down to the ground. He landed in a bed of spikes and died immediately, but in his fall he swinged his sword and attacked you for 1hp");
                                (inventory.hp -= 1);
                                if(inventory.hp <= 0){
                                    alert("You died and your skeleton rotted in the dungeons forever, but since I'm nice I revived you");
                                    (inventory.hp = 3);
                                    City();
                                }
                                else{
                                    alert("His sword is still suck in your body, you pull it out");
                                    (inventory.sword += 1);
                                    alert("Ba dum da da! You got the completley ordinary bloody guard issued sword");
                                    alert("You go up the stairs which bring you into the dungeon");
                                    Castle();
                                }
                                break;
                                
                            case "run away": case "run":
                                alert("You attempt to run away but because the guard is blocking the exit you run back into the cell where the guard locks the door");
                                Dungeon();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                Guard();
                                
                            default:
                                alert("I don't understand " + guard + ".")
                                Guard();
                        }
                        
                    }
                }
                else{
                    alert("The Cell was firmly locked, if only you had a key");
                    Dungeon();
                }
            }
            
            else if(cell == "check inventory" || cell == "inventory"){
                checkInv();
                Dungeon();
            }
            
            else{
                alert("I don't understand " + cell + ", you dummy");
                Dungeon();
            }
        }
        function Castle(){
            
        }
    }
}