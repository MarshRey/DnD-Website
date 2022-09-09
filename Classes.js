// Class for Races
function raceClass(race, varient, strinc, dexinc, coninc, intinc, wisinc, chrinc) {
    this.race = race;
    this.varient = varient;
    this.strinc = strinc;
    this.dexinc = dexinc;
    this.coninc = coninc;
    this.intinc = intinc;
    this.wisinc = wisinc;
    this.chrinc = chrinc;
}

// Class for Classes
function classClass() {
    
}

// Class Charecter Sheet
function charecterClass(dndclass, race, background, level, str, dex, con, int, wis, chr) {
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