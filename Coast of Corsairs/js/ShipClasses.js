class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, hp, attackDamage, name, defence) {
        super(scene, x, y, texture);
        // statlines for each ship which will be used for every player and enemy
        this.maxHP = this.hp = hp;
        this.damage = attackDamage;
        this.name = name;
        this.defence = defence;
    }

    //Attack used when attacking a target in the game.
    attack(target) {
        target.takeDamage(this.damage)
    }

    //Used to be called in attacktarget showing the enemy taking damage.
    takeDamage(damage) {
        this.hp -= (damage - this.defence)
    }

}

class PlayerShip extends Ship {
    constructor(scene, x, y, texture, hp, attackDamage, name, defence) {
        super(scene, x, y, texture, hp, attackDamage, name, defence)

        //the scale is set to 2 to allow the players sprite to be bigger and this shows that it is closer than the enemy ship giving perspective in the game.
        this.setScale(2);
    }
}

class EnemyShip extends Ship {
    constructor(scene, x, y, texture, hp, attackDamage, name, defence) {
        super(scene, x, y, texture, hp, attackDamage, name, defence)

        this.flipX = true;
    }
}
