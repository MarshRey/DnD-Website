// Chance to hit a creature. Oppearates on the idea that nat 20 is auto hit and 1 is fail
function chanceToHit(AC, plustohit){
    return AC / (10 + plustohit);
}

// Average attacks to kill a creature
function attacksToKill (monsterhealth, d4num, d6num, d8num, d10num, d12num, d20num, d100num){
    return monsterhealth / damageFromRoll(d4num, d6num, d8num, d10num, d12num, d20num, d100num);
}

// Average Damage from a roll of dice
function damageFromRoll(d4num, d6num, d8num, d10num, d12num, d20num, d100num){
    return d4num * 2 + d6num * 3 + d8num * 4 + d10num * 5 + d12num * 6 + d20num * 10 + d100num * 50; 
}

// all dice roller
function diceRoller(d4num, d6num, d8num, d10num, d12num, d20num, d100num){
    return d4Roller(d4num) + d6Roller(d6num) + d8Roller(d8num) + d10Roller(d10num) + d12Roller(d12num) + d20Roller(d20num) + d100Roller(d100num);
}

// d4 roller
function d4Roller(d4num){
    var sum = 0;
    for (let i = 1; i <= d4num; i++){
        sum += Math.floor((Math.random() * 4) + 1);
    }
    return sum;
}

// d6 roller
function d6Roller(d6num){
    var sum = 0;
    for (let i = 1; i <= d6num; i++){
        sum += Math.floor((Math.random() * 6) + 1);
    }
    return sum;
}

// d8 roller
function d8Roller(d8num){
    var sum = 0;
    for (let i = 1; i <= d8num; i++){
        sum += Math.floor((Math.random() * 8) + 1);
    }
    return sum;
}

// d10 roller
function d10Roller(d10num){
    var sum = 0;
    for (let i = 1; i <= d10num; i++){
        sum += Math.floor((Math.random() * 10) + 1);
    }
    return sum;
}

// d12 roller
function d12Roller(d12num){
    var sum = 0;
    for (let i = 1; i <= d12num; i++){
        sum += Math.floor((Math.random() * 12) + 1);
    }
    return sum;
}

// d20 roller
function d20Roller(d20num){
    var sum = 0;
    for (let i = 1; i <= d20num; i++){
        sum += Math.floor((Math.random() * 20) + 1);
    }
    return sum;
}

// d100 roller
function d100Roller(d100num){
    var sum = 0;
    for (let i = 1; i <= d100num; i++){
        sum += Math.floor((Math.random() * 100) + 1);
    }
    return sum;
}

// Average damage from a class
function avgClassDamage(dndclass) {

}

// Class factory for charecters
function makeCharecter(){
    
}