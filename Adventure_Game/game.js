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
    shield: 0,
    lawnMower: 0
}

// declare array
var npcNames = ["Jeffory, Steven, Bob, Darius, Courtney"]

Game();
//Opening function
function Game(){
    
    alert("Welcome to the most exciting adventure game of your life!");
    
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
    
    alert("Well " + jeffName + " your adventure is about to begin in the wonderful land of Cloudborg, I hope you're ready for the most exciting adventure yet!");
    
    City();
    
    // Game Begins
    function City(){
        var city = prompt("Well " + jeffName + " you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Filled with huge shops and villages and a strong millitary that houses inside the castle. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Cloud Mountains to the left. Or you can travel to the ground. \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n -Travel to the ground").toLowerCase();
        
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
                var guild1 = confirm("You express your interest in joining the guild, the recruiter there tells you that when you join your first task will be to cut his grass! \n Do you accept");
                
                if(guild1 == true){
                    alert("Ba dum da dum! You got your first quest, now go cut some grass!");
                    alert("Oh before you go let me you ou most prized possesion.");
                    (inventory.lawnMower ++);
                    alert("Ba dum da dum! You got the completley normal Lawn Mower");
                    
                    Grass();
                    
                    function Grass(){
                        alert("You started cutting the grass in the guy's backyard, it's a really hot and sunny day here in Taliman. You went down the rows of grass cutting them all but then you found a grass that was mightier than the rest.")
                        
                        var mightyGrass = prompt("The Mighty Grass stands in your way.\n -Bargain \n -Mow \n -Sword \n-run").toLowerCase();
                        
                        switch(mightyGrass){
                                
                            case "bargain":
                                alert("It seems that no matter how mighty the grass might be, it still doesn't understand the english language");
                                Grass();
                                break;
                                
                            case "mow":
                                alert("You try to mow it down but because it is very mighty, so both your completley normal lawnmower and the mighty grass died");
                                (inventory.lawnMower --);
                                break;
                                
                            case "sword":
                                if (inventory.sword > 0){
                                    alert("You defeated the mighty grass");
                                    
                                }
                                else{
                                    alert("You don't have a sword, idiot!");
                                    Grass();
                                }
                                break;
                                
                            case "run":
                                var coward = true
                                alert("You ran back to the inn apologizing to the guild they tell you it's alright because grass can be pretty scary, but you were denied access from joining the guild")
                                Inn();
                                break;
                                
                            default:
                                alert("I don't understand " + mightyGrass + ".");
                                Grass();
                        }
                    }
                    
                }
                // Set boring to true, important later on
                else{
                    alert("Wow aren't you boring " + jeffName + ".")
                    var boring = true
                    Inn();
                }
            }
            
            else if(inn == "chat with barkeeper" || inn == "barkeeper"){
                alert (" Hi I'm " + npcNames[4] + "!");
            }
            
            else if(inn == "sleep"){
                if (inventory.coins > 0){
                    inventory.coins = 0;
                    alert("While you were sleeping last night a thief came and stole all your money");
                    Inn()
                }
                else{
                    alert("While you were sleeping last night a thief came and attempted to steal your money, but because you suck you had no money to steal");
                    Inn()
                }
            }
            else{
                alert("I don't understand " + inn + ", you dummy!");
                Inn();
            }
        }
        
        function Castle(){
            var castleEntrance = prompt("Impressive isn't " + jeffName + " you stand at a huge gate you can see 20 or so towers in the distance. Here you see this massive fortress made out of red and black brick. You approach the gate two guards are there holding spears looking at you menacingly. One of the guards yell at you to state your business. \n -Run Away \n -None of your business \n -Here to Loot \n -I Need to See the King \n -Here to train").toLowerCase();
            
            if(castleEntrance == "run away" || castleEntrance == "run"){
                City();
            }
            
            else if(castleEntrance == "none of your business" || castleEntrance == "business"){
                alert("The guard yells at you telling you that scumbags like you have no business here");
                Castle();
            }
            
            // Brings you to dungeon quest line
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
        }  
    }