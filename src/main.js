/*
- Mateen Aminian
- Rocket Patrol Mods assignment
- 6/28/2021
- Time to complete project: ~7-8 hours

*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;
// my own variables
let timeText, music;

// Mod Implemenations and ADD-Ons
/*
- Redesigned the game's artwork, UI, and sound to change its theme (60 points)
    - added new sounds to go along with new artwork
    - theme: duck hunt using arrows to shoot the ducks
    - obtained arrow shot and arrow hit sounds from freesound.org
    - added moving background with blue sky theme to mimic grass plains instead of sci-fi
    
- Display the time remaining (in seconds) on the screen (10)
    - added text showing how many seconds are going by

- Finishing the tutorial: an automatic 20 points...

- Added my own copyright-free background music to Play scene (5)

- total points: 95/100
    - 60 + 10 + 20 + 5 = 95/100


*/