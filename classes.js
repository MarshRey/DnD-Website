// Class for Races
class raceClass {
    constructor(race, strinc, dexinc, coninc, intinc, wisinc, chrinc, specialinc){
        this.race = race;
        this.strinc = strinc;
        this.dexinc = dexinc;
        this.coninc = coninc;
        this.intinc = intinc;
        this.wisinc = wisinc;
        this.chrinc = chrinc;
        this.twobyany = twobyany;
    }
}

// Class Charecter Sheet
class charecterClass{
    constructor(dndclass, race, background, level, str, dex, con, int, wis, chr){
        this.dndclass = dndclass;
        this.race = race;
        this.background = background;
        this.level = level;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.chr = chr;
    }
}

// exports code
module.exports = {raceClass, charecterClass};