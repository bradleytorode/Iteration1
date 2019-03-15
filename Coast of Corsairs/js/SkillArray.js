//An array to contain all the skills that the player and enemy could have. All stats being named appropriately.
//TODO, create hit rating

/*
const skillList = [
    { name: "CannonBall", attackDamage: 20, effects: "None", hitChance: 1 }, //0
    { name: "FireBall", attackDamage: 10, effects: "Burn", hitChance: 1 }, //1
    { name: "VenomBall", attackDamage: 10, effects: "Poison", hitChance: 1 }, //2
    { name: "Focused Shot", attackDamage: 50, effects: "None", hitChance: 1 }, //3
    { name: "Barrage", attackDamage: 25, effects: "None", hitChance: 1 }, //4
    { name: "Exploding Shot", attackDamage: 35, effects: "None", hitChance: 1 }, //5
    { name: "Infernal Ball", attackDamage: 20, effects: "Burn", hitChance: 1 }, //6
    { name: "FIRE AT WILL", attackDamage: 80, effects: "None", hitChance: 1 }, //7
    { name: "Frozen Orb", attackDamage: 20, effects: "Freeze", hitChance: 1 }, //8
    { name: "Destructive Shot", attackDamage: 100, effects: "None", hitChance: 1 } //9
]
*/



//Skill List class created to make the abilities replicatible and allowing them to be reusable and understandable
class SkillList {
    constructor(name, attackDamage, effects, hitChance) {
        this.name = name;
        this.attackDamage = attackDamage;
        this.effects = effects;
        this.hitChance = hitChance;
    }
}

//Variables of each skill that the player and enemy AI will use.
var cannonball = new SkillList("Cannonball", 20, "None", 1);
var fireball = new SkillList("Fireball", 10, "Burn", 1);
var venomball = new SkillList("Venomball", 10, "Poison", 1);
var focusedShot = new SkillList("Focused Shot", 50, "None", 1);
var barrage = new SkillList("Barrage", 22, "None", 1);
var explodingShot = new SkillList("Exploding Shot", 35, "None", 1);
var infernalShot = new SkillList("Infernal Ball", 25, "Burn", 1);
var heavyShot = new SkillList("Heavy Shot", 80, "None", 1);
var frozenOrb = new SkillList("Frozen Orb", 20, "Freeze", 1);
var destructiveShot = new SkillList("Destructive Shot", 100, "None", 1);




