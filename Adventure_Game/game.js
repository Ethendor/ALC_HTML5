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
    
    alert("Hmm I don't think I like your name very much "+ playerName + ", How about I call you Jeff instead, I think that sounds cooler.");
    
    alert("Well Jeff your adventure is about to begin in the wonderful land of Cloudborg, I hope you're ready for the most exciting adventure yet!");
    
    CityOfTaliman();
    
    function CityOfTaliman(){
        var city = prompt("Well Jeff you're here in the city of Taliman. One of the richest and most beatiful cities in Cloudborg. Here you see many places that to explore. You can go to the Inn where many adventurers find their purpose and spirit. The Castle also has a great training grounds and equipment for new adventurers. There's also some exciting Cloud Mountains to the left. Or you can travel to the ground. \n -Go to Inn \n -Go to Castle \n -Go to the Mountains \n Travel to the ground")
    }
    
}