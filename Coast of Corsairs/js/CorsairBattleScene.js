//this is for the creation of the ships of both the player and the enemy. This will tie into LoadScene to load up the battle scene.
class CorsairBattleScene extends Phaser.Scene {
    constructor() {
        super({ key: "CorsairBattleScene" });
    }


    create() {
        this.cameras.main.setBackgroundColor('rgba(0,0,255, 0.5)');

        //variable for the players ship and showing it being implemented into the game via the battle scene.
        var player = new PlayerShip(this, 150, 300, "player", 50, 50, "Pirate", 25)
        this.add.existing(player);

        //variable for the enemy ship and showing it being implemented into the game via the battle scene.
        var enemy = new EnemyShip(this, 600, 200, "enemy", 50, 50, "british", 10)
        this.add.existing(enemy);


        this.scene.launch("CorsairUIScene")
    }


}
