//This will be loaded with the CorsairBattleScene
class CorsairUIScene extends Phaser.Scene {
    constructor() {
        super({ key: "CorsairUIScene" });
    }


    create() {

        /*
        //Top Row of Abilities
        this.graphics.strokeRect(25, 400, 250, 100);
        this.graphics.fillRect(25, 400, 250, 100);
        this.graphics.strokeRect(275, 400,250, 100);
        this.graphics.fillRect(275, 400, 250, 100);
        this.graphics.strokeRect(525, 400, 250, 100);
        this.graphics.fillRect(525, 400, 250, 100);
        //Bottom Row of Abilities 
        this.graphics.strokeRect(25, 500, 250, 100);
        this.graphics.fillRect(25, 500, 250, 100);
        this.graphics.strokeRect(275, 500, 250, 100);
        this.graphics.fillRect(275, 500, 250, 100);
        this.graphics.strokeRect(525, 500, 250, 100);
        this.graphics.fillRect(525, 500, 250, 100);
        */
        //Side Bars of abilities


        //condenses ability rows, showing variables.
        var topLeftButton = new AbilityMaster(25, 400, this)
        var bottomLeftButton = new AbilityMaster(25, 500, this)
        topLeftButton.hitZone.on('pointerdown', this.damage, this)

        var topMiddleButton = new AbilityMaster(275, 400, this)
        var bottomMiddleButton = new AbilityMaster(275, 500, this)
        topMiddleButton.hitZone.on('pointerdown', this.damage, this)

        var topMiddleButton = new AbilityMaster(525, 400, this)
        var bottomMiddleButton = new AbilityMaster(525, 500, this)

        this.sidebars()


        //this.add.existing(topLeft)

    }

    damage() {
        console.log("enemy hit")

    }

    sidebars() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(3, 0xffffff);
        this.graphics.fillStyle(0xc19a6b, 1);
        this.graphics.strokeRect(0, 390, 25, 210);
        this.graphics.fillRect(0, 390, 25, 210);
        this.graphics.strokeRect(775, 390, 25, 210);
        this.graphics.fillRect(775, 390, 25, 210);

    }
}

