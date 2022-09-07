
var warnTheSheep = function (queue){
    var count = 0;
    var result = "";
    for (let index = queue.length-1; index >= 0; index--) {
        if (queue[index] == "wolf") {
            if (index == (queue.length-1)) {
                result = "Pls go away and stop eating my sheep";
                break;
            }
            if (index < queue.length) {
                count = queue.length - (index+1);
                result = "Oi! Sheep number "+count+"! You are about to be eaten by a wolf!";
                break;
            }
        }
        else{
            result = "All clear my command";
        }
    }
    return result;
}

console.log( warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]) );
//"Oi! Sheep number 2! You are about to be eaten by a wolf!"

console.log( warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) );
//"Oi! Sheep number 5! You are about to be eaten by a wolf!"

console.log( warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]) );
//"Oi! Sheep number 6! You are about to be eaten by a wolf!"

console.log( warnTheSheep(["sheep", "wolf", "sheep"]) );
//"Oi! Sheep number 1! You are about to be eaten by a wolf!"

console.log( warnTheSheep(["wolf"]) );
//"Pls go away and stop eating my sheep"

console.log( warnTheSheep(["sheep", "sheep", "wolf"]) );
//"Pls go away and stop eating my sheep"