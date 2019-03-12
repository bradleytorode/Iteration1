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


        //condenses ability rows, showing variables. Showing the each column that I would like to use. This being the left side of buttons.
        var topLeftButton = new Button(25, 400, skillList[0],  this)
        var bottomLeftButton = new Button(25, 500, skillList[1], this)
        topLeftButton.hitZone.on('pointerdown', this.damage, this)

        //middle column of abilities also planned as attacks
        var topMiddleButton = new Button(275, 400, skillList[2], this)
        var bottomMiddleButton = new Button(275, 500, skillList[3], this)
        topMiddleButton.hitZone.on('pointerdown', this.damage, this)

        //right hand column of abilities which will be planned for support skills such as bolster/repair and flee.
        var topMiddleButton = new Button(525, 400, skillList[4], this)
        var bottomMiddleButton = new Button(525, 500, skillList[5], this)

        this.sidebars()

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

