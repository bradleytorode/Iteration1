//ability classes will be used to place the classes into the UI and allow the player to press on them to get abilites. Along with this it is used to manage enemies damage abilities.
class AbilityMaster {
    constructor(x, y, scene) {
        this.graphics = scene.add.graphics();
        this.graphics.lineStyle(3, 0xffffff);
        this.graphics.fillStyle(0xc19a6b, 1);
        this.graphics.strokeRect(x, y, 250, 100);
        this.graphics.fillRect(x, y, 250, 100);
        this.hitZone = scene.add.zone(x, y, 250, 100)
        this.hitZone.setInteractive();
    }


}

