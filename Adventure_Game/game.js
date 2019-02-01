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

Game();

function Game(){
    
    alert("Welcome to the most exciting adventure game of your life!");
    
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
    
    function City(){
        var city = prompt("Well " + jeffName + " you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Filled with huge shops and villages and a strong millitary that houses inside the castle. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Cloud Mountains to the left. Or you can travel to the ground. \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n -Travel to the ground");
        
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
            alert("I don't understand doctor " + city);
            City();
        }
                
        function Inn(){
            var inn = prompt("Well " + jeffName + " this is the place of heart and soul, the place every adventurer dreams of. Here folks of all types stay. It is a clean and huge Inn, made up of wood it almost looks like a huge cabin. In the corner you see a banner and members from the Adventurer Guild saying they're hiring. At the bar are you see the barkeeper and some guests are talking about politics. And Upstairs there is a bed you can sleep on \n -Talk to Guild \n -Chat with Barkeeper \n -Sleep");
        }
        
        function Castle(){
            var castleEntrance = prompt("Impressive isn't " + jeffName + " you stand at a huge gate you can see 20 or so towers. Here you see this massive fortress made out of red and black brick. You approach the gate two guards are there holding spears looking at you menacingly. One of the guards yell at you to state your business. \n -Run Away \n -None of your business \n -Here to Loot \n -I Need to See the King \n -Here to train");
            
            if(castleEntrance == "run away" || castleEntrance == "run"){
                City();
            }
            
            if(castleEntrance == "none of your business" || castleEntrance == "business"){
                alert("The guard yells at you telling you that scumbags like you have no business here")
                Castle();
            }
            
            if(castleEntrance == "here to loot" || castleEntrance == "loot"){
                alert("The guards thank you for admitting you're a theif and take you to the dungeon")
                Dungeon();
            }
            
            if(castleEntrance == "i need to see the king" || castleEntrance == "see the king" || castleEntrance == "king"){
                alert("The guards call you stupid as there is no king")
                Castle();
            }
        }
    }
}
    