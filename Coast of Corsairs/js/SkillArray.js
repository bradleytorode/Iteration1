//An array to contain all the skills that the player and enemy could have. All stats being named appropriately.
//TODO, create hit rating
var hitRating = Math.random();

const skillList = [
    { name: "CannonBall", attackDamage: 20, effects: "None", hitChance: 1 }, //0
    { name: "FireBall", attackDamage: 10, effects: "Burn", hitChance: 1 }, //1
    { name: "VenomBall", attackDamage: 10, effects: "Poison", hitChance: 1 }, //2
    { name: "Focused Shot", attackDamage: 50, effects: "None", hitChance: 1 }, //3
    { name: "Barrage", attackDamage: 15, effects: "None", hitChance: 1 }, //4
    { name: "Exploding Shot", attackDamage: 35, effects: "None", hitChance: 1 }, //5
    { name: "Infernal Ball", attackDamage: 20, effects: "Burn", hitChance: 1 }, //6
    { name: "FIRE AT WILL", attackDamage: 80, effects: "None", hitChance: 1 }, //7
    { name: "Frozen Orb", attackDamage: 20, effects: "Freeze", hitChance: 1 }, //8
    { name: "Destructive Shot", attackDamage: 100, effects: "None", hitChance: 1 } //9
]