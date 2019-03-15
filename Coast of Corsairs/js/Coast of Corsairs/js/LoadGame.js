//scene used to load the game. This is going to be made as a class and be referred to within the corsairGame.js to be loaded in the config file. This will be done with a key
class LoadGame extends Phaser.Scene {
    constructor() {
        super({ key: "LoadGame" });
    }

    preload() {
        //load game assets, TODO - Load placeholder sprites, for the player character and enemy character(s).
        this.load.image("player", "assets/shipPlaceholder.png");
        this.load.image("enemy", "assets/shipPlaceholder.png");

    }

    create() {
        //this refers to the corsairBattleScene which will be set as a key in the corsairBattleScene to load it up.
        this.scene.start("CorsairBattleScene");
    }

}