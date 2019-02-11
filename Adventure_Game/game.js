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



// declare inventory
var inventory = {
    coins: 0,
    sword: 0,
    key: 0,
    lawnMower: 0
}

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
    
    // Check Gender for Later
    var gender = prompt("What gender do you indentify as \n -Male \n -Female \n -Other").lowerCase();
    
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
        var city = prompt("Well " + jeffName + " you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Filled with huge shops and villages and a strong millitary that houses inside the castle. The ground is made of white fluffy cloud and the feel is very heavenly. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Mountains to the left with tons of monsters. Or you can travel to the ground. \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n -Travel to the ground").toLowerCase();
        
        if(city == "go to inn" || city == "inn"){
            Inn();
        }
        
        else if(city == "go to castle" || city == "castle"){
            Castle();
        }
        
        else if(city == "go to the Mountains" || city == "mountains"){
            Mountain();
        }
        
        else if(city == "travel to ground" || city == "ground"){
            
            alert("You Jumped off the Cloud you were on and died on impact, Silly " + jeffName + " what did you think was gonna happen, I can revive you if you would like");
            City();
        }
        
        else{
            alert("I don't understand " + city + ", you dummy!");
            City();
        }
                
        function Inn(){
            var inn = prompt("Well " + jeffName + " this is the place of heart and soul, the place every adventurer dreams of. Here folks of all types stay. It is a clean and huge Inn, made up of wood it almost looks like a huge cabin. In the corner you see a banner and members from the Adventurer Guild saying they're hiring. At the bar are you see the barkeeper and some guests are talking about politics. And Upstairs there is a bed you can sleep on \n -Talk to Guild \n -Chat with Barkeeper \n -Sleep").toLowerCase();
            
            // Start Guild Quest Line
            if(inn == "talk to guild" || inn == "guild"){
                if (guildQuest1 == false){
                    var guild1 = confirm("You express your interest in joining the guild, the recruiter there, Dalamas, tells you that when you join your first task will be to cut his grass! You'll get 200 gold coins for finsihing this task \n Do you accept");
                
                    if(guild1 == true){
                        alert("Ba dum da dum! You got your first quest, now go cut some grass!");
                        alert("Oh before you go let me give you our most prized possesion.");
                        (inventory.lawnMower ++);
                        alert("Ba dum da dum! You got the completley normal Lawn Mower");
                    
                        Grass();
                    
                    function Grass(){
                        alert("You started cutting the grass in the Dalamas's backyard, it's a really hot and sunny day here in Taliman. You went down the rows of grass cutting them all but then you found a grass that was mightier than the rest.");
                        
                        var mightyGrass = prompt("The Mighty Grass stands in your way.\n -Bargain \n -Mow \n -Sword \n -Run").toLowerCase();
                        
                        switch(mightyGrass){
                                
                            case "bargain":
                                alert("It seems that no matter how mighty the grass might be, it still doesn't understand the english language");
                                Grass();
                                break;
                                
                            case "mow":
                                alert("You try to mow it down but because it is very mighty, so both your completley normal lawnmower and the mighty grass died");
                                (inventory.lawnMower --);
                                // Save that you finished the quest
                                guildQuest1 = true;
                                
                                alert("You cut all the Grass!");
                                alert("You returned to the Inn where the guild gave you 200 gold coins, they hope to see you return soon");
                                (inventory.coins += 200);
                                Inn();
                                
                                break;
                                
                            case "sword":
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
                                
                            case "run":
                                // Set cowards to true, similar to boring
                                var coward = true;
                                alert("You ran back to the inn apologizing to the guild they tell you it's alright because grass can be pretty scary, but you were denied your pay from the guild");
                                Inn();
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
                if (inventory.coins > 0){
                    inventory.coins = 0;
                    alert("While you were sleeping last night a thief came and stole all your money");
                    Inn();
                }
                else{
                    alert("While you were sleeping last night a thief came and attempted to steal your money, but because you suck you had no money to steal");
                    Inn();
                }
            }
            else{
                alert("I don't understand " + inn + ", you dummy!");
                Inn();
            }
        }
        
        function Castle(){
            var castleEntrance = prompt("Impressive isn't " + jeffName + " you stand at a huge gate you can see 20 or so towers in the distance. Here you see this massive fortress made out of red and black brick. You approach the gate two guards are there holding spears looking at you menacingly. One of the guards yell at you to state your business. \n -Run Away \n -None of your business \n -Here to Loot \n -I Need to See the King \n -Here to Train").toLowerCase();
            
            if(castleEntrance == "run away" || castleEntrance == "run"){
                City();
            }
            
            else if(castleEntrance == "none of your business" || castleEntrance == "business"){
                alert("The guard yells at you telling you that scumbags like you have no business here");
                Castle();
            }
            
            // Dungeon Quest Line
            else if(castleEntrance == "here to loot" || castleEntrance == "loot"){
                alert("The guards thank you for admitting you're a theif and take you to the dungeon");
                Dungeon();
            }
            
            else if(castleEntrance == "i need to see the king" || castleEntrance == "see the king" || castleEntrance == "king"){
                alert("The guards call you stupid as there is no king");
                Castle();
            }
            
            // Training Quest Line
            else if(castleEntrance == "here to train" || castleEntrance == "train"){
                alert("The guards open the gate and one of the guards escort you to the barracks");
                Barracks();
            }
            
            else{
                alert("I don't understand " + castleEntrance + ", you dummy!");
                Castle();
            }
        }
        
        function Dungeon(){
            var cell = prompt("You wake up in a dark cell the only light coming from a guard a few feet away with a lantern by his waist you hear his keys everytime he moves. \n -Investigate \n Seduce Guard")
            
            if(cell == "investigate"){
                
            }
            else if(cell == "seduce guard" || cell == "seduce" || cell == "guard"){
                if(male == true){
                    alert("The guard is unfortuantley not gay and you were unable to seduce him")
                }
                else if(female == true){
                    alert("The guard fell into your trap and you were able to get")
                }
            }
        }  
    }
}