//this is for the creation of the ships of both the player and the enemy. This will tie into LoadScene to load up the battle scene.
class CorsairBattleScene extends Phaser.Scene {
    constructor() {
        super({ key: "CorsairBattleScene" });
    }


    create() {
        this.cameras.main.setBackgroundColor('rgba(0,0,255, 0.5)');
        this.isPlayersTurn = true;
        //variable for the players ship and showing it being implemented into the game via the battle scene.
        player = new PlayerShip(this, 150, 300, "player", 70, "Pirate", 25)
        this.add.existing(player);

        //variable for the enemy ship and showing it being implemented into the game via the battle scene.
        enemy = new EnemyShip(this, 600, 200, "enemy", 50, "british", 10)
        this.add.existing(enemy);

        //this allows me to create the battle as a group and access it when the battle scene starts.
        var battle = new Phaser.Physics.Arcade.Group(this);

        //This is for the player's hp and showing it in the game, I will place the HP above the player with code shown below.
        
        battle.playerStatus = this.add.text(player.x - 20 , player.y - 80, "HP:" + player.hp, {
            fontSize: '16px',
            fontFamily: 'Papyrus',
            color: '#ffffff',
            align: 'center'

        });

        battle.enemyStatus = this.add.text(enemy.x - 20, enemy.y - 50, "HP:" + enemy.hp, {
            fontSize: '16px',
            fontFamily: 'Papyrus',
            color: '#ffffff',
            align: 'center'

        });

       /*battle.won = function () {
            this.registry.destroy();
            this.events.off();
            this.scene.restart();
        }

        battle.playerAttack  () {
            var currentEnemy = player.currentEnemy;
            var playerHit = battle.player.attackDamage + ButtonMaster.skill;
            currentEnemy.hp = currentEnemy.hp - playerHit;
            if (currentEnemy.hp <= 0) {
                battle.won();
            }
        }
        */
        
        this.scene.launch("CorsairUIScene")
    }

    

    update() {
        if (!this.isPlayersTurn) {
            console.log("Enemy Turn");//PICK AN ENEMY ATTACK
        }

    }


}
