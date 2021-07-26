// Rover

var arguments = process.argv.splice(2)[0];
const prompt = require("prompt");

// generate grid : 

// var grid = [];
// var x = 10;
// let y = 10;

// for (let i = 0; i < y; i++) {
//     grid.push(" ");
// }

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
]

// Rover initial position :
grid[0][0] = "N";

// console.log(grid);

var rover = {
    "direction": "N",
    "x": 0,
    "y": 0,
    "travelLog": [],
};

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
    console.log("Turning right");
    console.log("New orientation : " + rover.direction);
}

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "N";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "W":
            rover.direction = "S";
            break;
    }
    console.log("Turning left");
    console.log("New orientation : " + rover.direction);
}

function moveForward(rover) {

    // console.log(`x = ${rover.x}, y = ${rover.y}`)
    switch (rover.direction) {
        case "N":
            if (rover.y == 0) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            } else {
                rover.y += 1;
                break;
            }
            case "E":
                if (rover.x == 9) {
                    console.log("Emergency stop !!! We're about to leave the grid !");
                    return
                } else {
                    rover.x += 1;
                    break;
                }
                case "S":
                    if (rover.y == -9) {
                        console.log("Emergency stop !!! We're about to leave the grid !");
                        return
                    } else {
                        rover.y -= 1
                        break;
                    }
                    case "W":
                        if (rover.x == 0) {
                            console.log("Emergency stop !!! We're about to leave the grid !");
                            return
                        } else {
                            rover.x -= 1
                            break;
                        }
    }
    console.log("Moving forward");
}

function moveBackward(rover) {
    console.log(`x = ${rover.x}, y = ${rover.y}`);
    switch (rover.direction) {
        case "N":
            if (rover.y == -9) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            } else {
                rover.y -= 1;
                break;
            }
            case "E":
                if (rover.x == 0) {
                    console.log("Emergency stop !!! We're about to leave the grid !");
                    return
                } else {
                    x -= 1;
                    break;
                }
                case "S":
                    if (rover.y == 0) {
                        console.log("Emergency stop !!! We're about to leave the grid !");
                        return
                    } else {
                        y += 1;
                        break;
                    }
                    case "W":
                        if (rover.x == 9) {
                            console.log("Emergency stop !!! We're about to leave the grid !");
                            return
                        } else {
                            x += 1;
                            break;
                        }
    }
    console.log("Moving backward");
}


function pilotRover(commands) {
    console.log("Initiating movement...");
    let roverPosition = {
        "x": rover.x,
        "y": rover.y
    }
    for (i = 0; i < commands.length; i++) {
        let actualCoordinates = {
            "x": rover.x,
            "y": rover.y
        };
        rover.travelLog.push(actualCoordinates);
        switch (commands[i]) {
            case "f":
                moveForward(rover);
                break;
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "b":
                moveBackward(rover);
                break;
            default:
                console.log("Error\nCommand must be f (forward), l (left), r (right), or b (backward)\nExiting...")
                console.log(`New Position --> x = ${rover.x}, y = ${rover.y}`)
                return -1;
        }
    }
    console.log(`New Position --> x = ${rover.x}, y = ${rover.y}`)
    console.log("Direction : " + rover.direction)

    // Erase previous position :
    grid[roverPosition.x][Math.abs(roverPosition.y)] = " ";

    // Place rover on the grid :
    grid[rover.x][Math.abs(rover.y)] = rover.direction;
    console.log(grid)
}

// Pilot rover with arguments :

function pilotRoverWithArguments() {
    if (!arguments) {
        console.log("You need to use commands, like f (forward), l (left), r (right), or b (backward) as arguments")
        console.log("EXAMPLE : node projects.js ffrlb");
    } else {
        pilotRover(arguments);
        console.log(rover.travelLog);
    }
}
// pilotRoverWithArguments();


// Pilot rover with prompt :
var schema = {
    properties: {
        commandes: {
            description: "Enter commands, as f (forward), l (left), r (right), or b (backward), or stop if you wanna exit"
        }
    }
}

prompt.start();

function pilotWithPrompt() {
    prompt.get(schema, function(err, res) {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(res.commandes);
        if (res.commandes == "stop") {
            console.log("Exiting program...")
            return 0;
        }
        pilotRover(res.commandes);
        console.log("Travel log : ")
        console.log(rover.travelLog);
        pilotWithPrompt();
    })
}
pilotWithPrompt();