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

// Exports code
module.exports = {charecterClass};