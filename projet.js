// Rover

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
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

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
            }
            else {
                rover.y += 1;
                break;
            }
        case "E":
            if (rover.x == 10) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            }
            else {
                rover.x += 1;
                break;
            }
        case "S":
            if (rover.y == -9) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            }
            else {
                rover.y -= 1
                break;
            }
        case "W":
            if (rover.x == 0) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            }
            else {
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
            }
            else {
                rover.y -= 1;
                break;
            }
        case "E":
            if (rover.x == 0) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            }
            else {
                x -= 1;
                break;
            }
        case "S":
            if (rover.y == 0) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            }
            else {
                y += 1;
                break;
            }
        case "W":
            if (rover.x == 10) {
                console.log("Emergency stop !!! We're about to leave the grid !");
                return
            }
            else {
                x += 1;
                break;
            }
    }
    console.log("Moving backward");
}


function pilotRover(commands) {
    console.log("Initiating movement...");
    for (i = 0; i < commands.length; i++) {
        let actualCoordinates = { "x": rover.x, "y": rover.y };
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
}

pilotRover("bbyyfr");

console.log(rover.travelLog);

// TODO

// Afficher la grille (updated) après chaque exécution de pilotRover
// ["N", " ", " ", " "]
// ["", "E", " ", " "]


