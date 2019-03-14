//This will be loaded with the CorsairBattleScene
class CorsairUIScene extends Phaser.Scene {
    constructor() {
        super({ key: "CorsairUIScene" });
    }


    create() {


        //this code is commneted out and shown as what the boxes were originally created as. This was moved into the ButtonClass scene and replicated many times in the code below. Meaning I use less code overall.
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
        var topLeftButton = new ButtonMaster(25, 400, this, cannonball)
        var bottomLeftButton = new ButtonMaster(25, 500, this, explodingShot)
        topLeftButton.hitZone.on('pointerdown', useSkill(enemy), this)

        //middle column of abilities also planned as attacks
        var topMiddleButton = new ButtonMaster(275, 400, this, heavyShot)
        var bottomMiddleButton = new ButtonMaster(275, 500, this, barrage)
        topMiddleButton.hitZone.on('pointerdown', useSkill(enemy), this)

        //right hand column of abilities which will be planned for support skills such as bolster/repair and flee.
        var topMiddleButton = new ButtonMaster(525, 400, this, venomball)
        var bottomMiddleButton = new ButtonMaster(525, 500, this, fireball)

        this.sidebars()


    }

    damage() {
        
    }

    //uses the same method properties as the buttons, but allows sidebars to make the game menu like a table showing attack plans.
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

