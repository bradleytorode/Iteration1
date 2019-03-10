//ability classes will be used to place the classes into the UI and allow the player to press on them to get abilites. Along with this it is used to manage enemies damage abilities.
class AbilityMaster {
    constructor(x, y, text, scene) {
        this.graphics = scene.add.graphics();
        this.graphics.lineStyle(3, 0xffffff);
        this.graphics.fillStyle(0xc19a6b, 1);
        this.graphics.strokeRect(x, y, 250, 100);
        this.graphics.fillRect(x, y, 250, 100);
        //text must be added in order to allow me to show the different skills that I have created.

        //hitZone, allows the graphics to be clicked on with the pointer. The origin is set as zero as this is the origin of the box graphic allowing it all to be clicked.
        this.hitZone = scene.add.zone(x, y, 250, 100)
        this.hitZone.setOrigin(0);
        this.hitZone.setInteractive();
        this.text = "attack" 
    }
}


