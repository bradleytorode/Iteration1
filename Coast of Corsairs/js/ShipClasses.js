class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, hp, attackDamage, name, defence) {
        super(scene, x, y, texture);
        // statlines for each ship which will be used for every player and enemy
        this.maxHP = this.hp = hp;
        this.damage = attackDamage;
        this.name = name;
        this.defence = defence;
    }

    attack(target, skill) {
        target.takeDamage(skill.attackDamage);
        if (skill.effects == "Burn") {
            
        }
        this.changeTurn();
    }

    takeDamage(amountOfDamage) {
        this.hp -= amountOfDamage;
    }

    changeTurn() {
        this.scene.isPlayersTurn = !this.scene.isPlayersTurn;
        if (this.scene.isPlayersTurn) {
            this.scene.manager.getScene('CorsairUIScene').reenableButtons();
        } else {
            this.scene.manager.getScene('CorsairUIScene').disableButtons();
        }
    }
}

class PlayerShip extends Ship {
    constructor(scene, x, y, texture, hp, name, defence) {
        super(scene, x, y, texture, hp, name, defence)

        //the scale is set to 2 to allow the players sprite to be bigger and this shows that it is closer than the enemy ship giving perspective in the game.
        this.setScale(2);
    }
}

class EnemyShip extends Ship {
    constructor(scene, x, y, texture, hp, attackDamage, name, defence) {
        super(scene, x, y, texture, hp, attackDamage, name, defence)

        this.flipX = true;
    }

    chooseAttack() {
        var skill = //RANDOMLY SELECT SKILL FROM SKILL LIST
        this.attack(player, skill);
    }
}

/*////TURN MANAGER

constructor(){
    who's turn is it
    who is a part of the turns
}

startTurn(target, skill, origin){
    origin.attack(target, skill);
    
    if(origin.isBurned){
        origin.takeBurnDamage();
    }

    origin.changeTurn();
}

*/