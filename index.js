// Detect button click

for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makesound(buttonInnerHTML);
    });
}


// Detecting KeyPress

document.addEventListener("keypress", function(event)
{
    makesound(event.key);
});


function makesound(key)
{
 
    switch(key)
    {
        case "Q":
            var snare1 = new Audio('./sounds/tom-1.mp3');
            snare1.play();
            break;

        case "W":
            var snare2 = new Audio('./sounds/snarew.mp3');
            snare2.play();
            break;
        case "E":
            var bass = new Audio('./sounds/basse.mp3');
            bass.play();
            break;
        case "A":
            var floor = new Audio('./sounds/floora.mp3');
            floor.play();
            break;
        case "S":
            var small = new Audio('./sounds/smalls.mp3');
            small.play();
            break;
        case "D":
            var ride = new Audio('./sounds/rided.mp3');
            ride.play();
            break;
        case "Z":
            var hat = new Audio('./sounds/hatz.mp3');
            hat.play();
            break;
        case "X":
            var hat2 = new Audio('./sounds/hatx.mp3');
            hat2.play();
            break;
        case "C":
            var tom = new Audio('./sounds/tom-4.mp3');
            tom.play();
            break;
        default:
            alert("Enable Capslock    /    hold  (Shift + q w e a s d z x c) ");
    }
}

