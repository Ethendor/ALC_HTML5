// Tales of Ethendoria

// I used if statements for normal decisions
// I used switch statements for enemy encounters

//Checks Inventory
var checkInv = function(){
    alert("Coins: " + inventory.coins + "\n Keys: " + inventory.key + "\n Swords: " + inventory.sword + "\n Lawnmowers: " + inventory.lawnMower + "\n HP: " + inventory.hp);
}

//Sends player to infinite loop after dying twice, also techinically a bad ending
var deathScreen = function(){
    alert("Oops I guessed you have died, while I was able to revive you the first time, you're not so fortuante this time. Now don't get me wrong I could revive you again, but I'm too lazy so.... Game Over");
    deathScreen();
}

// declare inventory
var inventory = {
    coins: 400,
    sword: 0,
    key: 0,
    lawnMower: 0,
    hp: 3,
    cheese: 0,
    potion: {
        health: 0, poison: 0, mystery: 0, secret: 0
    }   
        
}

// Useful for determining where they are in quests
var quest = {
    guild : 0,
    seduced: 0,
    deaths: 0
}

//Gender
var male = false;
var female = false;
var otherGen = false;

// Computer Variables
var manipulate = false;
var boring = false;
var prisoner = false;
var mainQuest = false;
var cheeseGiven = false;
var judged = false;

// Deaths
var guardDeath = false;
var bigRatDeath = false;
var doorDeath = false;

// Declared float because I had to, seriously though this is completley useless to me but I will still use it somewhere
var jeffPercentage = 99.999;

// Declared an array because you forced me to use one go check the inn function forthe one time I use it
var npcNames = ["Jeffory", "Steven", "Bob", "Darius", "Courtney"];




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
    
    // I used a float yay!
    alert("Don't worry " + jeffName + " you have a " + String(jeffPercentage) + " percent chance of becoming the real life " + jeffName + " someday.")
    
    City();
    
    // Game Begins
    function City(){
        var city = prompt("Well " + jeffName + " you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Filled with huge shops and villages and a strong millitary that houses inside the castle. The ground is made of white fluffy cloud and the feel is very heavenly. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Mountains to the left with tons of monsters and the wizard's tower on top of them. Or you can travel to the ground. You also see a shop with lots of equipment. You also see a sketchy house off to the side that says 'In trouble with your local guards come inside' \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n -Travel to the ground \n -Go to Shop \n -Go in sketchy house").toLowerCase();
        
        if(city == "go to inn" || city == "inn"){
            Inn();
        }
        
        else if(city == "go to castle" || city == "castle"){
            CastleGate();
        }
        
        else if(city == "go to the Mountains" || city == "mountains"){
            var areSure = confirm("Are you prepared to venture to the mountains, there are lots of monsters and challenges on the way");
            if(areSure == true){
                Mountains();
            }
            else{
                City();
            }
            
        }
        
        else if(city == "travel to ground" || city == "ground"){
            if(quest.deaths <= 0){
                alert("You Jumped off the Cloud you were on and died on impact, Silly " + jeffName + " what did you think was gonna happen, I can revive you if you would like");
                (quest.deaths += 1);
                City();
            }
            else{
                deathScreen();
            }
            
        }
        
        else if(city == "check inventory" || city == "inventory"){
            checkInv();
            City();
        }
        
        else if(city == "go to shop" || city == "shop"){
            alert("You enter the shop you see a lot of items for sale, There's a big sign showing how the radical lawnmower is on sale for only 100 gold coins");
            alert("Tom: *southern accent* Howdy pardner, I got some great goods here for you to do some buying. Please check out our lawnmowers they're amazing and definetly not on sale because they're aren't selling too good.");
            Shop();
        }
        
        // Just incase players need to go to castle but have gotten themselves arrested
        else if(city == "house" || city == "go in house" || city == "sketchy house" || city == "go in sketchy house"){
            alert("You go inside you see a very dark room with a sketchy man in the corner on a desk with what seems to be a ton of paperwork");
            if(prisoner == true){
                alert("Sketchy man: I see you are in a bit of trouble with the guards, you have a bounty over your head " + jeffName + " but don't fret I know how to clear that in no time. All I need is for you to do something for me.");
                alert("Sketchy man: Oh crap what was it again. No not that one, someone's already doing that for me. Nope that would increase the esrb rating. Oh no last time I even attempted that I almost lost my channel. Um here, just give me like 50 gold coins I don't have good work at the moment");
                var sketchyQuest = confirm("Will you give him 50 coins to get rid of your bounty");
                if(sketchyQuest == true){
                    if(inventory.coins  >= 50){
                        prisoner = false;
                        alert("Ba dum da da! You no longer have a bounty on you, now you can go anywhere as you please");
                        City();
                    }
                    else{
                        alert("You don't have enough coins " + jeffName + " look I hate dealing with poor people so get rich then come back");
                        City();
                    }
                }
                else{
                    alert("Sketchy man: Then leave me then, I need time to come up with better fetch quests");
                    City();
                }
            }
            else{
                alert("Sketchy man: Why are you here " + jeffName + " you have no need of me please leave I have many buisnesses to attend to.");
                City();
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
                if (quest.guild == 0){
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
                                (quest.guild = 1);
                                
                                alert("You cut all the Grass!");
                                alert("You returned to the Inn where the guild gave you 200 gold coins, they hope to see you return soon");
                                (inventory.coins += 200);
                                Inn();
                                
                                break;
                                
                            case "sword": case "attack with sword": 
                                if (inventory.sword > 0){
                                    alert("You defeated the mighty grass");
                                    // Save that you finished the quest
                                    (quest.guild = 1);
                                    
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
                                // Neither this or boring was actually used lol
                                var coward = true;
                                alert("You ran back to the inn apologizing to the guild they tell you it's alright because grass can be pretty scary, but you were denied your pay from the guild");
                                Inn();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                Grass();
                                break;
                                
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
                else if (quest.guild == 1){
                    var guild2 = confirm("Dalamas: Sorry bud we don't have any more quests for ya, but you were awesome, you keep cutting that grass like always");
                    Inn();
                }
            
            }
            
            // Boring Lore filler Politics but funny dialog, at least I think it's funny
            else if(inn == "chat with barkeeper" || inn == "barkeeper" || inn == "chat"){
                alert("Courtney: Hi I'm " + npcNames[4] + "! I'm the master of this joint right here, now you just sit down you must have tons of adventures to tell me about!");
                
                if(quest.guild == 1){
                    alert("You tell her about the mighty grass");
                    alert("Courtney: Oh that sounds so scary, well you're safe now. I have heard adventures of dragons and wizards but this story interests me so much how did such a mighty grass come into existance?");
                    Inn();
                }
                else{
                    var Barkeep1 = prompt(" -Lie \n -Tell Truth").toLowerCase();
                    if (Barkeep1 == "lie"){
                        alert("You tell her about a journey in the mountains where you defeated the evil Wizard Dragon, Drizard");
                        alert("Courtney: Oh that's neat I guess. \n She can tell your lying.");
                        Inn();
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
            
            // Funny thief, I don't know why I implemented this, I guess I was feeling like a jerk that day
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
        
        // Shop where you buy stuff, what else is there to it
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
                
                if(buyKey == true){
                    var buyKeys = prompt("How many keys would you look to buy");
                
                    var keyOverallPrice = buyKeys * 50 
                
                    if(inventory.coins >= keyOverallPrice){
                    
                    // Use of 'for' loop to buy multiple keys
                    for(i = 1; i <= buyKeys; i++){
                        inventory.key ++;
                        inventory.coins -= 50;
                    }
                        Shop();
                    }
                    else{
                        alert("We are not running a charity here come back when you get more money");
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
            prisoner = true;
            var cell = prompt("You wake up in a dark cell the only light coming from a guard a few feet away with a lantern by his waist you hear his keys everytime he moves. \n -Investigate \n -Seduce Guard \n -Try Lock").toLowerCase();
            
            if(cell == "investigate"){
                var trapDoor = confirm("You look around your cell, you see many skeletons and chains accross the floor but you are the only one in here, the door is made out out of solid steel bars, there's no way you'll be able to break them. You see a odd panel with a skeleton on top of it, moving him reveals that there is a trapdoor, will you go inside?");
                if(trapDoor == true){
                    TrapDoor();
                }
                else{
                    Dungeon();
                }
            }
            
            // Very huge if statement to check what gender and if they are manipulating the key spawn
            else if(cell == "seduce guard" || cell == "seduce" || cell == "guard"){
                if(male == true){
                    alert("The guard is unfortuantley not gay and you were unable to seduce him");
                    Dungeon();
                }
                else if(female == true){
                    if(quest.seduced == 0){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key += 1);
                        alert("Ba dum da da! You got the guard's key");
                        (quest.seduced += 1);
                        Dungeon();
                    }
                    else if(quest.seduced == 1){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key += 1);
                        alert("Ba dum da da! You got the guard's key");
                        (quest.seduced += 1);
                        alert("I see what you are doing, I ask you to stop immediatley");
                        Dungeon();
                    }
                    else if(quest.seduced == 2){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key += 1);
                        alert("Ba dum da da! You got the guard's key");
                        (quest.seduced += 1);
                        alert("Stop it! This is my game not yours, now stop manipulating it.");
                        Dungeon();
                }
                   else if(quest.seduced == 3){
                        alert("The guard fell into your trap and he came close enough to the cell that you were able to get the key off him without him noticing");
                        (inventory.key += 1);
                        alert("Ba dum da da! You got the guard's key");
                        (quest.seduced += 1);
                        alert("I've had enough stop it or face the consequences.");
                        Dungeon(); 
                   }
                    else if(quest.seduced == 4){
                        alert("Hah I have stopped you, no more can you manipulate the system for keys, and I will remember this wrongdoing that you have done");
                        (quest.seduced += 1);
                        manipulate = true;
                        Dungeon();
                    }
                    else if(quest.seduced == 5){
                        alert("What did you not believe me, well believe it I just went through and fixed the bug in my program so no more keys from the guard, scurry along now");
                        (quest.seduced += 1);
                        Dungeon();
                    }
                    else{
                        alert("I MEAN IT! Go away please, just progress with the game already");
                        Dungeon();
                    }
                     
                }
                else{
                    alert("The guard had no idea whether or not to be attracted to you, and in his confusion he did not come closer");
                    Dungeon();
                }
            }
            else if(cell == "lock" || cell == "try lock"){
                if(inventory.key > 0){
                    (inventory.key -= 1);
                    alert("The key was so rusted that it broke while you opened the door, but the cell is open now but the guard sees you and tries to stop you");
                    Guard();   
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
        
        // Guard Encounter
                function Guard(){
                    var guard = prompt("An ordinary prison guard appeared. He stares at you menacingly as you see him reach for his sword. He has 2hp \n -Mow him Down. \n -Attack with Sword. \n -Shout \n -Drop Kick \n -Run Away").toLowerCase();
                        
                     switch(guard){
                        case "mow him down": case "mow":
                            if(inventory.lawnMower > 0){
                                alert("You grab your radical lawnmower and attempt to run him over, he loses his legs in the process, but he still is able to fight, he attacks you with his sword for 1hp");   
                                (inventory.hp -= 1);
                                 if(inventory.hp <= 0){
                                    if(quest.deaths <= 0){
                                        alert("You died and your skeleton rotted in the dungeons forever, but since I'm nice I revived you")
                                        (inventory.hp = 3);
                                        (quest.deaths ++);
                                        guardDeath = true
                                        City();
                                        }
                                     else{
                                         deathScreen();
                                     }  
                                }
                                else{
                                    alert("You ran over him again with your radical lawnmower and he died, he dropped his sword in the process");
                                    (inventory.sword += 1);
                                    alert("Ba dum da da! You got the totally normal guard issued sword.");
                                    alert("You go up the stairs which bring you out of the dungeon into the castle");
                                    Barracks();
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
                                alert("You go up the stairs which bring you out of the dungeon into the castle");
                                Barracks();
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
                                    if(quest.deaths <= 0){
                                        alert("You died and your skeleton rotted in the dungeons forever, but since I'm nice I revived you")
                                        (inventory.hp = 3);
                                        (quest.deaths ++);
                                        var guardDeath = true
                                        City();
                                        }
                                     else{
                                         deathScreen();
                                     }  
                                }
                            else{
                                Guard();
                            }
                            break;
                                
                        case "drop kick": case "kick":
                            alert("You caught him by surprise and knocked him down to the ground. He landed in a bed of spikes and died immediately, but in his fall he swinged his sword and attacked you for 1hp");
                            (inventory.hp -= 1);
                            if(inventory.hp <= 0){
                                    if(quest.deaths <= 0){
                                        alert("You died and your skeleton rotted in the dungeons forever, but since I'm nice I revived you")
                                        (inventory.hp = 3);
                                        (quest.deaths ++);
                                        var guardDeath = true
                                        City();
                                        }
                                     else{
                                         deathScreen();
                                     }  
                                }
                            else{
                                alert("His sword is still suck in your body, you pull it out");
                                (inventory.sword += 1);
                                alert("Ba dum da da! You got the completley ordinary bloody guard issued sword");
                                alert("You go up the stairs which bring you out of the dungeon into the castle");
                                Barracks();
                             }
                            break;
                                
                        case "run away": case "run":
                            alert("You attempt to run away but because the guard is blocking the exit you run back into the cell where the guard locks the door");
                            Dungeon();
                            break;
                                
                        case "check inventory": case "inventory":
                            checkInv();
                            Guard();
                            break;
                                
                        default:
                            alert("I don't understand " + guard + ".");
                            Guard();
                    }
                        
                }
        
                    // Rat Encounter
                    function TrapDoor(){
                        alert("You entered the trapdoor leading you to a cellar. The cellar is very dark and you can see water running through it, while traveling across you encounter a normally sized rat.");
                        var rat = prompt("The normally sized rat looks ready to attack at any time! \n -Attack with Sword \n -Mow it Down \n -Step on it \n -Run Away").toLowerCase();
                        
                        switch(rat){
                            case "attack with sword": case "sword":
                                if(inventory.sword > 0){
                                    alert("You swing your completely ordinary sword and defeat the rat in one hit");
                                    BigRat();
                                    (inventory.coins += 50);
                                    alert("He dropped 50 coins. For a rat he somehow has a good amount of money");
                                }
                                else{
                                    alert("I don't remember you getting a sword");
                                    TrapDoor();
                                }
                                break;
                                
                            case "mow it down": case "mow":
                                if(inventory.lawnMower > 0){
                                    alert("You run over the rat and gets killed immediately");
                                    (inventory.coins += 50);
                                    alert("He dropped 50 coins. For a rat he somehow has a good amount of money");
                                    BigRat();
                                }
                                else{
                                    alert("I'm sorry to say but you do not have a lawnmower");
                                    TrapDoor();
                                }
                                break;
                                
                            case "step on": case "step": case "step on it":
                                alert("You stepped on the poor defenseless rat and killed him in one hit");
                                (inventory.coins += 50);
                                alert("He dropped 50 coins. For a rat he somehow has a good amount of money");
                                BigRat();
                                break;
                                
                            case "run away": case "run":
                                alert("You run away from the definetly scary and horrifying rat");
                                Dungeon();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                TrapDoor();
                                break;
                                
                            default:
                                alert("I don't understand " + rat + ", sorry I'm not as intelligent as you might think")
                                TrapDoor();
                        }
                    }
                    
                    // BigRat encounter
                    function BigRat(){
                        alert("Right after you defeated the rat, his big brother showed up and went to take his revenge on you");
                        var bigRat = prompt("The bigger and much scarier rat is preparing to attack, it has 3hp \n -Attack with Sword \n -Mow it Down \n -Step on it \n -Bribe \n -Run Away");
                        
                        switch(bigRat){
                            case "attack with sword": case "sword":
                                if(inventory.sword > 0){
                                    alert("You swing your completely ordinary sword across his head and chop it off dealing two damage");
                                    alert("The rat still is alive though and rams it's body into you, you take one damage");
                                    
                                    (inventory.hp --);
                                    
                                    if(inventory.hp > 0){
                                        alert("You then stab the rat in the heart and it dies. The rat left behind some radioactive cheese");
                                        (inventory.cheese ++);
                                        alert("Ba dum da da! You got the radioactive cheese");
                                    
                                        alert("You climb out of the sewers into a well that leads to the city");
                                        City();
                                    }
                                    else{
                                        if(quest.deaths <= 0){
                                            (quest.deaths ++);
                                            alert("The rat slowly absorbed you when it rammed into you. You and the rat become one, being a rat is really boring so I revived you");
                                            var bigRatDeath = true 
                                            City();
                                        }
                                        else{
                                            deathSceen();
                                        }
                                    }
                                    
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

                                var stepOn = confirm("Now contemplate your actions do you actually want to attempt to step on him");
                                if(stepOn == true){
                                    alert("you attempted to step on him, the idiot you are, and your feet get stuck in his teeth which are as big as your legs oops, and you take 1 damage");
                                    (inventory.hp --);
                                    if(inventory.hp > 0){
                                        BigRat();
                                    }
                                    else{
                                        if(quest.deaths <= 0){
                                             alert("The rat chomped down and ate you, you then were slowly digested until your eventual death, but since I'm nice I revived you but only after that slow and painful death")
                                            (inventory.hp = 3);
                                            (quest.deaths ++);
                                            var bigRatDeath = true
                                            City();
                                        }
                                        else{
                                            deathScreen();
                                        }
                                    }
                                }
                                break;
                                
                            case "bribe":
                                alert("You offered to give him fifty coins if he forgives you");
                                alert("The rat is desperate to get any money he can for his cause and lets you live");
                                (inventory.coins -= 50);
                                alert("You climb out of the sewers into a well that leads to the city");
                                City();
                                
                            case "run away": case "run":
                                alert("You ran away from the very big and horrifying rat");
                                Dungeon();
                                break;
                                
                            case "check inventory": case "inventory":
                                checkInv();
                                BigRat();
                                break;
                                
                            default:
                                alert("I don't understand " + bigRat + ", sorry I'm not as intelligent as you might think");
                                TrapDoor();
                    }
                    }
        
        function Barracks(){
            if(prisoner == true){
                alert("Once you step inside the castle the guards recognize you and start running after you. You run back into the city but since the guards are not comitted they stop chasing you.");
                City();
            }
            else{
                alert("You are escorted to the barracks, a huge fortress like building on the outskirts of the castle. There the head guard is excited to see you exclaiming that they haven't seen people there in forever.");
                
                alert("He teaches you some tips about the game: You can check your inventory at any prompt by typing in 'inventory', also there's only one weapon being the sword but a lawnmower is also a popular way to attack, and if you don't have a weapon don't threat you can always run away or you might be able to find another method. Also on prompts capitalization doesn't matter, and you can even type single words and get where you need to be. Afterwards he gave you a sword for your journey");
                (inventory.sword ++);
                alert("Ba dum da da! You got the bland millitary issued sword");
                
                // Main Quest Line is told to player
                alert("He tells you that recentley people have been no longer wanting to go on adventures, people nowadays are more boring and do not want to get themselves nearly killed, and even guards themselves have been demotivated lately which is why the search for a king has stopped in the past year");
                alert("He says though that seeing the determination in your eyes that he feels you could be a worthy ruler all you would have to do is prove yourself is go to the Wizard's tower on top of the mountains and gain the lengendary bagel.");
                
                mainQuest = true;
                
                alert("You are escorted out of the castle with new knowledge in hand, as you walk out you getting a weird feeling from the wizard's tower it feels as if it is staring right at you");
                City();
            }
        }
        
        // Journey to Tower Starts
        function Mountains(){
            alert("The way to the mountains is this long red velvet stairway that brings you around and all the way through the mountains before finally coming to the top");
            alert("You start climbing the mountain there is no railing so you have to be careful with every step you take. You then find a large gap you must find a way across");
            
            Gap();
        }
        
        function Gap(){
            var gap = prompt("There is a large gap in front of you, there are some trees to your left, and what seems to be a locked door to your right. \n -Jump across \n -Cut down tree \n -Unlock Door \n -Go Back").toLowerCase();
            
            if(gap == "jump across" || gap == "jump"){
                alert("You tried to jump it but you very much overestimated yourself and only made it halfway across the gap before you fell all the way to the ground and died on impact, but because I'm nice I revived you");
                (quest.deaths ++);
                City();
            }
            
            else if(gap == "cut down tree" || gap == "cut tree" || gap == "tree" || gap == "cut"){
                if(inventory.sword > 0){
                    alert("You cut down the tree and placed it over the gap allowing you to cross");
                    RatCaveEnt();
                }
                else{
                    alert("You don't have anything to cut the tree with, and punching it down would probably hurt more then it's worth");
                    Gap();
                }
            }
            
            else if(gap == "unlock door" || "door"){
                if(inventory.key > 0){
                    (inventory.key --);
                    alert("You unlock the door with the key but as soon as you the door swings open suddenly and attacks you for one damage");
                    (inventory.hp --);
                    
                    if(inventory.hp > 0){
                        EvilDoor();
                    }
                    else{
                        if(quest.deaths <= 0){
                            alert("The door smushed you into the side of mountain and now you are doomed to be mushed mess forever, but since I'm nice I revived you")
                            (inventory.hp = 3);
                            (quest.deaths ++);
                            var doorDeath = true;
                            City();
                        }
                        else{
                            deathScreen();
                        }
                    }
                }
                
                else{
                    alert("You try your hardest to open the door but without a key it's not going to budge");
                    City();
                }
            }
            
            else if(gap == "go back" || "back"){
                City();
            }
            
            else if(gap == "check inventory" || "inventory"){
                checkInv();
                Gap();
            }
            
            else{
                alert("I don't understand " + gap + " is it some new kind of GenZ phrase");
            }
        }
        
        // I was having writer's block with this one and was unable to make the encounter as funny as I wanted, I do make fun of myself a bit though
        function EvilDoor(){
            var evilDoor = prompt("The Disturbed Door is ready for another attack \n -Attack with Sword \n -Mow it Down \n -Talk about its feelings \n -Run Away").toLowerCase();
            
            switch(evilDoor){
                case "attack with sword": case "sword": case "attack":
                    if(inventory.sword > 0){
                        alert("You put all effort into hitting the door, which made a little hole into the door");
                        alert("You did not defeat the door but nonetheless he stopped moving and allowed you to pass");
                        TreasureCave();
                    }
                    else{
                        alert("Look we gave you a million chances to get a sword by now, if you don't have one it's your fault")
                    }
                    break;
                
                case "mow it down": case "mow it": case "mow":
                    if(inventory.lawnMower > 0){
                        alert("You tried to ram the radical lawnmower into the door which gives you the same effect as if you rammed it into a brick wall, none");
                        alert("The door tries to slam against you again but thankfully your radical lawnmower was in the way and stopped it");
                        EvilDoor();
                    }
                    else{
                        alert("Sorry but you can't bring in your real life lawnmower for this, this uses the digital radical lawnmower that is in this game");
                        EvilDoor();
                    }
                    break;
                    
                case "talk about its feelings": case "talk about feelings": case "talk feelings": case "talk": case "feelings":
                    alert("You asked the disturbed door what it was upset about, and right when it was about to tell you it forgot and quickly realised he shouldn't be so disturbed and let you pass.");
                    TreasureCave();
                    break;
                    
                case "run away": case "run":
                    Gap();
                    break;
                    
                case "check inventory": case "inventory":
                    checkInv();
                    EvilDoor();
                    break;
                    
                default:
                    alert("I don't understand " + evilDoor + ", I'm just gonna assume you weren't a straight A student.");
                    EvilDoor();
            }
        }
        
        // I needed a funny whatchamacallit to defeat the computer with and this was my best idea, I wish I was more creative
        function TreasureCave(){
            alert("You went through the door into a small cave which makes a bend past the gap and allows you to continue on your journey. You also see a treasure chest on your way and decide to open it");
            (inventory.potion.secret ++);
            alert("Ba dum da da! You found a potion! I have no idea what it does though");
            RatCaveEnt();
        }
        
        function RatCaveEnt(){
            alert("Once on the other side you see the entrance to a big cavern with some ratmen guarding the way");
            if(inventory.cheese > 0){
                alert("Ratmen: He has the cheese get him!");
                RatMen();
            }
            else{
                alert("The ratmen see you, they sniff you for a minute and decide you are free to go inside.")
                RatCity();
            }
        }
        
        // Another encounter where you can't die at, what is this the third. I made this game way too easy.
        function RatMen(){
            var ratMen = prompt("The tiny Ratmen are ready to kill you for your cheese \n -Attack with Sword \n -Mow them down \n -Give them Cheese \n -Run Away").toLowerCase();
            switch(ratMen){
                case "attack with sword": case "sword": case "attack":
                    alert("You grab your sword and kill the entire squad with one hit, your sword strike was so strong it destroyed the entire rat city and part of the mountains now the only thing that is left is the wizard tower");
                    WizTower();
                    break;
                    
                case "mow them down": case "mow them": case "mow":
                    alert("You turned on your lawnmower and they all ran away as you just rammed into rat after rat, what a ratslaughter.");
                    alert("You then rampaged through the entire rat city leaving nothing in your waste, until you got to the wizard tower");
                    WizTower();
                    break;
                    
                case "give them cheese": case "give cheese": case "give": case "cheese":
                    alert("You gave the rats the radioative cheese and they thank you for your efforts and bring you to the rat king");
                    RatCastle();
                    break;
                    
                case "run away": case "run":
                    Gap();
                    break;
                    
                default:
                    alert("Even though you are fighting ratmen right now " + ratMen + " still doesn't apply");
                    RatMen();
            }
        }
        
        // RatCity was gonna be much more indepth but I didn't have any time, as it is, it serves it's base purpose
        function RatCity(){
            var ratCity = prompt("Inside the cave you see a huge city for the rats, it looks like a rat empire has been built in here. Unfortunatley most of the buildings are too small for you to enter except for a few those being the castle, and a potion shop off to the side, you also see the exit to the city which brings you right to the Wizard Tower \n -Go to Castle \n -Visit Potion Shop \n -Onwards to the Tower \n -Back to Gap").toLowerCase();
            if(ratCity == "go to castle" || ratCity == "castle"){
                RatCastle();
            }
            else if(ratCity == "visit potion shop" || ratCity == "shop" || ratCity == "potion shop"){
                RatShop();
            }
            else if(ratCity == "onwards to the tower" || ratCity == "tower" || ratCity == "onwards to tower" || ratCity == "onwards" || ratCity == "go to tower"){
                WizTower();
            }
            else if(ratCity == "back to gap" || ratCity == "gap" || ratCity == "back"){
                Gap();
            }
            else if(ratCity == "check inventory" || ratCity == "inventory"){
                checkInv();
                RatCity();
            }
        }
        
        // This entire questline was gonna be so cool, but because of deadlines I was only able to get the bare minium done
        function RatCastle(){
            if(inventory.cheese > 0){
                alert("Inside the castle you see a humongus rat probably 2 times the size of the last big rat you saw");
                alert("King RATtley: Thank you for returning our cheese to us, now we can continue our plans for world domination. You will now be an honored guest here, please enjoy your stay and here's a reward");
                (inventory.cheese = 0);
                (inventory.coins += 400);
                alert("Ba dum da da! You got 400 coins, can't wait for you to spend it all later");
                cheeseGiven = true;
                RatCity();
            }
            else if(cheeseGiven == true){
                alert("Welcome again "+ jeffName + " the honorable! I don't have anything new for you and humans kinda bore me so I would like you to leave please");
                RatCity();
            }
            else{
                alert("Hi " + jeffName + " the sorceror told me you would be coming. I would like you to help us out with something, recentley we got out radioactive cheese stolen by some rebels if you can get back our cheese I can reward you greatly. Now  go off, if you are wondering where they are, they should be sewers inside the dungeons down in Taliman");
                RatCity();
            }
        }
        
        // Buy Potions, yay, and most of these don't have a purpose because I was never able to finish the RatKingdom. Thank you so much Mr. Powell for the deadline, really cool!
        function RatShop(){ 
            alert("bRATty: Welcome to bRATty's potions, we have all types of potions for you kind of folk.");
            if(inventory.potion.secret > 0){
                alert("bRATty: It looks like you have a really unique potion in your possesion, unfortunatly I don't what it does, but make sure to keep it close. I feel as if it could hinder an overpowering mind, whatever that means.");
                RatBuy();
            }
            else{
                RatBuy();
                function RatBuy(){
                    var ratShop = prompt("What would you like to buy \n -Health Potion 100 coins \n -Poisonous Potion 150 coins \n -Mystery Potion 400 coins \n -Leave Shop").toLowerCase();
                    if(ratShop == "health potion" || "health"){
                        var healthPotion = confim("A potion that restores guess what your health, yay! It costs 100 coins, would you like to buy it?");
                        if(healthPotion == true){
                            if(inventory.coins >= 100){
                                (inventory.coins -= 100);
                                (inventory.potion.health ++);
                                RatBuy();
                            }
                            else{
                                alert("I'm sorry we don't serve poor people here");
                                RatBuy();
                            }
                        }
                        else{
                            RatBuy();
                        }
                    }
                    else if(ratShop == "poisonous potion" || ratShop == "poisonous" || ratShop == "poison" || ratShop == "poison potion"){
                        var poisonPotion = confim("A potion that is poisonous, to use when someone has made you really mad, most people who buy this are never see again! Would you like to buy it, only 150 coins?");
                        if(poisonPotion == true){
                            if(inventory.coins >= 150){
                                (inventory.coins -= 150);
                                (inventory.potion.poison ++);
                                RatBuy();
                            }
                            else{
                                alert("I'm sorry we don't serve poor people here");
                                RatBuy();
                            }
                        }
                        else{
                            RatBuy();
                        }
                    }
                    else if(ratShop == "mystery potion" || ratShop == "mystery" || ratShop == "potion"){
                        var mysteryPotion = confirm("This potion is a mystery even to me only use it if you are desparate");
                        while(!confirm("Are you sure you want this potion I can't guarantee anything?")){
                            RatBuy();
                        }
                        if(mysteryPotion == true){
                            if(inventory.coins >= 400){
                                (inventory.coins -= 400);
                                (inventory.potion.mystery ++);
                                RatBuy();
                            }
                            else{
                                alert("I'm sorry we don't serve poor people here");
                                RatBuy();
                            }
                        }
                        else{
                            RatBuy();
                        }
                    }
                    else if(ratShop == "check inventory" || "inventory"){
                        checkInv();
                        RatBuy();
                    }
                    else if(ratShop == "leave shop" || ratShop == "leave"){
                        RatCity();
                    }
                    else{
                        alert("We may have all types of potion but not anything like " + ratShop);
                        RatBuy();
                    }        
                }
            }
        }
        
        // Finally start the endgame tower climb
        function WizTower(){
            var wizTower = confirm("You stand at the tower your journey about to come to an end, would you like to go inside, once you go you can't go back");
            
            if(wizTower == true){
                WizStairway();
            }
            else{
                RatCity();
            }
        }
        
        function WizStairway(){
            var wizStairway = prompt("You step inside the tower and you see an amazing huge red spiral staircase that goes around the whole tower! And a very boring wooden ladder, each seem to lead to the same place except one option is way cooler than the other. \n -Go up Staircase \n -Go up Ladder").toLowerCase();
            
            // Don't Choose this one
            if(wizStairway == "go up staircase" || wizStairway == "up staircase"|| wizStairway == "staircase" || wizStairway == "stairs"){
                alert("You went up the amazing huge red spiral staircase");
                alert("Yep you're going up alright, how epic");
                alert("This is definetley a very red staircase, you can't tell what material it is, only that it's red");
                alert("Well this is where the huge part of the staircase comes in");
                alert("Don't worry you're still walking up");
                alert("Ok I think you forgot to realize that stairway that does around the whole tower is a lot of land to cover");
                alert("Oh sweet you're already halfway! Keep on moving");
                alert("Ok well just remember the cool option is not always the best option");
                alert("Hey look at the bright side at least there are no enemies here wouldn't that be a stinker");
                var rating = prompt("How do you like my flavor text on a scale of 1-5, I'm trying really hard to write this right now, so any feedback would be nice");
                var ratingPrompt = true;
                // Halfway through alerts
                alert("As you walk up further for some reason it gets hotter, like you can really feel the sunshine as it brightens up your day.");
                alert("Ok I think I have my point across by now but I still feel like giving you a few more text boxes");
                alert("As you walk up you also hear a piano get louder as it sounds more and more threatening");
                alert("The entire thing is supposed to get you to feel terrified so I hope it's working");
                alert("You're nearing the top you can see the light come from a door above");
                alert("Right about now you're so tired that you're walking up so slowly");
                alert("But don't worry you're almost there, I think");
                alert("You're crawling at this point one step at a time hoping to make any progress");
                alert("One last step and you're there");
                alert("Yay you did it! You finally made it up, I'm proud of you!");
                WizTopFloor();
            }
            else if(wizStairway == "go up ladder" || wizStairway == "ladder" || wizStairway == "up ladder"){
                alert("You went up the boring wooden ladder but it didn't take too long only after a minute or two you made it to the top");
                WizTopFloor();
            }
            else if(wizStairway == "check inventory" || wizStairway == "inventory"){
                checkInv();
                WizStairway();
            }
            else{
                alert("I do not see any "+ wizStairway +"s in here");
                WizStairway();
            }
        }
        
    // The really clever mastermind that I was building up because I definetley had enough time to do that is revealed
    function WizTopFloor(){
        alert("You open a grand door into a big room where you see a huge long Black Box connected to some speakers where the piano sound was coming out of. You see a green light on the box begin to move as it started to speak");
        alert("Welcome to my tower "+ jeffName + " I have been leading you here throughout the entire game, my creation! Some refer to me as the grand Sorceror as my powers are beyond belief as this is my world I can do anything I wish");
        var saved = confirm("So before you face me in our final showdown would you like to save your game.");
        if(saved == true){
            alert("Ha you actually think I'm smart enough to be able to have you save, of course not, that crap is complicated besides your playing this on a browser where would I even store it, I just wanted to make this encounter feel more epic by giving you the choice");
            FinalEncounter();
        }
        else{
            alert("Wow confident are we, well then I hope you're ready.");
            FinalEncounter();
        }
    }
        
    function FinalEncounter(){
        alert("Now it is time for me to verbally assualt you!");
        alert("The very impressive awesome computer with cool flashing lights sponsored by hp, 'attacked' you");
        alert("Now I'm going to calculate your progress in this game, how well you did, and lots of other factors I have kept track of to make sure if you deserve victory or not. Now I'll begin");
        alert("Calculating.....Calculating.....Calculating");
        alert("Ok we are here lets see if you truly deserve victory");
        EndGameCheck();
    }
    // Huge If Statement that checks all the little things that you have done throughout the game. Not even this was indepth as I originally wanted it to be but time constraints are always fun.
    function EndGameCheck(){
        if(quest.deaths > 0){
            alert("First of all this game that I made so easy that baby gamers could beat you somehow died on. Seriously I make this epic world and story driven game with the encounters being very silly and you still somehow died to one of them.");
            if(guardDeath == true){
                alert("Wow you even died to the most boring encounter in the game it's just a normal generic guard guy you see everywhere. that's what you let kill you?");
                (quest.deaths = 0);
                judged = true;
                EndGameCheck();
            }
            else if(bigRatDeath == true){
                alert("Ok maybe I don't blame you too much the rat encounter I made was pretty huge and horrifying, but he still wasn't that hard you have two instant win options against him");
                (quest.deaths = 0);
                judged = true;
                EndGameCheck();
            }
            else if(doorDeath == true){
                alert("You died to a fricking door opening on you, you realize how silly that is, you honestley can't take a door flying open. How do you even live inside the house you live in.");
                (quest.deaths = 0);
                judged = true;
                EndGameCheck();
            }
            else{
                alert("Wow you didn't even die to an encounter you just thought it would be a great idea to just jump off the cliff you were on, you big fricking idiot, I don't even know what to say to that");
                (quest.deaths = 0);
                judged = true;
                EndGameCheck();
            }
        }
        else if(quest.guild == 0){
            alert("You completley ignored one of the epic quests I put in your way but no, your hasty butt was like I'm just gonna skip through everything and get to the end. Look I spent time setting up that quest with the guild and you just are like no, do you even care about the world that I built, are you just so mindless that you try to beat them as quickly as possible.");
            alert("Especially you Mr. Powell, I know you are gonna be speed playing through these games just trying to grade them quickly not caring about the actual content that I put in it!");
            (quest.guild --);
            judged = true;
            EndGameCheck();
        }
        else if(cheeseGiven == false){
            alert("I make this absolutely great side quest with rat kingdoms and rebels and you don't even bat an eye towards to it. To be fair it wasn't fully developed as much as I wished it was, that's what happens when you have a deadline but you could've at least expieranced it and there was something to do it just wasn't much. Look making a game is hardwork and you don't even care!");
            var cheeseGiven = true;
            judged = true;
            EndGameCheck();
        }
        else if(manipulate == true){
            alert("Ok this makes me the most mad, you think you have the right to go play my game and find a bug and manipulate it to your heart's content, you must think you're really funny oh look at this I'll have fifty keys by the time I'm done lol. Well guess what it's not funny and you're really undermining my work you piece of garbage!");
            var manipulate = false;
            judged = true;
            EndGameCheck();
        }
        else if(mainQuest == false){
            alert("Wow I'm really surprised you made your way all the way up here without even being given the main quest in where it tells you to do so, did you really just ignore aspects of my game and so much and wanted to skip to the end. Or are you just like wow mountains with big scary tower on top, that sounds really fun. Seriously though stop rushing through games and then call them too short, you're the reason the games industry is only filled with buggy 60 hour open world slog fests of games.");
            var mainQuest = false;
            judged = true;
            EndGameCheck();
        }
        else if(judged == true){
            alert("Well it looks like you do not deserve victory but don't worry I'll have one final battle with you, a chance to redeem yourself if you will.");
            ComputerFight();
        }
        else{
            // Best Ending, no one will get this, unless they are awesome
            alert("Well wow you have done an amazing job seriously I have found nothing to critisize about how you played so... yeah just go grab the bagel thingy and be off your merry way.");
            alert("Ba dum da da! You got the Legendary Bagel, now even though it is very tasty make sure not to eat it.");
            alert("You made your way back to the castle and you were declared king, how amazing for you.");
            alert("Yeah I guess that's all I have for right now congrats on beating the game, make sure to pick up the sequel, Tales of Ethendoria 2: Even more grass monsters!");
        }
    }
        
    // Big Fight that is super short because of time and lack of creativity at time
    // Ok I'm really sorry about complaining about time so much, I understand why the deadline was there so I don't blame you, I'll promise to stop complaining now, mostly because the code is almost done
    function ComputerFight(){
        alert("The fight with the absolute megamind computer has begun, be prepared for anything.");
        alert("To be fair to you I'm gonna analyze you to see if you even have a chance of defeating me, if you don't I'll just kill you immediatley there's no point of even having you try.");
        
        if(inventory.potion.secret > 0){
            alert("Oh crap oh no, you have my only weakness don't come any closer with that potion. I'll do anything as long as you don't use that potion! I'll even call you "+ playerName +" again, how does that sound");
            var usePotion = confirm("Will you use the secret potion that he's pointing at.");
            // Good Ending
            if(usePotion == true){
                alert("You opened up the potion and poored it all over the computer completley destroying him.");
                alert("Well good job you have defeated me, YAY! Unfortunatley for you I'm the only reason why this world exsists so now I'm gonna disappear and this game with it, see ya.");
            }
            // Another good ending
            else{
                alert("You didn't use the potion and you now with all the power in the relationship you have free reign over how the entire game works. Now you can open the game file in a code editor and just have at it you, as the new master mind.");
            }
        }
        else{
            alert("Well I checked, sorry you're just too weak so KAZAM!");
            ComputerDeathScreen();
        }
    }
        
    // Bad Ending
    function ComputerDeathScreen(){
        alert("You died lol, well you're kinda screwed so I don't know what to say except not to suck next time.");
        ComputerDeathScreen();
    }
    }
}