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
        jeffName = "Carl"
    }
    
    else{
        jeffName = "Jeff"
    }
    
    alert("Hmm I don't think I like your name very much " + playerName + ", How about I call you " + jeffName + " instead, I think that sounds cooler.");
    
    alert("Well " + jeffName + " your adventure is about to begin in the wonderful land of Cloudborg, I hope you're ready for the most exciting adventure yet!");
    
    CityOfTaliman();
    
    function CityOfTaliman(){
        var city = prompt("Well " + jeffName + " you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Filled with huge shops and villages and a strong millitary that houses inside the castle. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Cloud Mountains to the left. Or you can travel to the ground. \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n -Travel to the ground").toLowerCase;
        
        if(city == "go to inn" || city == "inn"){
            
            Inn();
        }
        
        else if(city == "go to castle" || city == "castle"){
            
            Castle();
        }
        
        else if(city == "go to the Mountains" || city == "mountains"){
            
            Mountain();
        }
        
        else if(city == "travel to ground" || "ground"){
            
            var ground = confirm("You Jumped off the Cloud you were on and died on impact, Silly " + jeffName + " what did you think was gonna happen, I can revive you if you would like")
            
            city();
        }
                
        function Inn(){
            var inn = prompt("Well " + jeffName + " this is the place of heart and soul, the place every adventurer dreams of. Here folks of all types stay. It is a clean and huge Inn, made up of wood it almost looks like a huge cabin. In the corner you see a banner and members from the Adventurer Guild saying they're hiring. The barkeeper and some guests are talking about politics. And Upstairs there is a bed you can sleep on \n -")
        }
    }
}
    