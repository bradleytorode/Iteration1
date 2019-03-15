//Phaser Config file
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [LoadGame, CorsairBattleScene, CorsairUIScene]
};

var game = new Phaser.Game(config);

