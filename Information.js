const classes = require("./classes"); // Allows for the use of classes from classes.js

// class information with their stat bonuses
const Dragonborn = classes.raceClass('Dragonborn', 2, 0, 0, 0, 0, 1, 'no');
const Dwarf = classes.raceClass('Dwarf', 0, 0, 2, 0, 0, 0, 'no');
const elf = classes.raceClass('elf', 0, 2, 0, 0, 0, 0, 'no');
const Gnome = classes.raceClass('Gnome', 0, 0, 0, 2, 0, 0, 'no');
const Half_Elf = classes.raceClass('Half-Elf', 0, 0, 0, 0, 0, 2,'yes'); // Has a two ability scores increase by 1
const Half_Orc = classes.raceClass('Half-Orc', 2, 0, 1, 0, 0, 0, 'no');
const Halfling = classes.raceClass('Halfling', 0, 2, 0, 0, 0, 0, 'no');
const Human = classes.raceClass('Human', 1, 1, 1, 1, 1, 1, 'no');
const Tiefling = classes.raceClass('Tiefling', 0, 0, 0, 0, 0, 2, 'no');
const Arakocra = classes.raceClass('Arakocra', 0, 2, 0, 0, 1, 0, 'no');
const Aasimar = classes.raceClass('Aasimar', 0, 0, 0, 0, 1, 2, 'no');
const Fairy = classes.raceClass('Fairy', 0, 0, 0, 0, 0, 0, 'yes'); // Increase one score by 2, and increase a different one by 1, or increase three different scores by 1.
const Firbolg = classes.raceClass('Firbolg', 1, 0, 0, 0, 2, 0, 'no');
const Genasi = classes.raceClass('Genasi', 0, 0, 2, 0, 0, 0, 'no');
const Githyanki = classes.raceClass('Githyanki', 2, 0, 0, 1, 0, 0, 'no'); // Gith type one
const Githzeria = classes.raceClass('Githzeria', 0, 0, 0, 1, 2, 0, 'no'); // Gith type two
const Goliath = classes.raceClass('Goliath', 2, 0, 1, 0, 0, 0, 'no');
const Harengon = classes.raceClass('Harengon', 0, 0, 0, 0, 0, 0, 'yes'); // Increase one score by 2, and increase a different one by 1, or increase three different scores by 1.
const Kenku = classes.raceClass('Kenku', 0, 2, 0, 0, 1, 0, 'no');
const Locathah = classes.raceClass('Locathah', 2, 1, 0, 0, 0, 0, 'no');
const Owlin = classes.raceClass('Owlin', 0, 0, 0, 0, 0, 0, 'yes'); // Increase one ability score by 2, and increase a different one by 1.
const Tabaxi = classes.raceClass('Tabaxi', 0, 2, 0, 0, 0, 1, 'no');
const Torle = classes.raceClass('Torle', 2, 0, 0, 0, 1, 0, 'no');
const Triton = classes.raceClass('Triton', 1, 0, 1, 0, 0, 1, 'no');
const Verdan = classes.raceClass('Verdan', 0, 0, 1, 0, 0, 2, 'no');




/*

var raceInfo = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling", "Human", "Tiefling", "Arakocra", 
"Aasimar", "Fairy", "Firbolg", "Genasi", "Gith", "Goliath", "Harengon", "Kenku", "Locathah", "Owlin", "Tabaxi", "Torle", 
"Triton", "Verdan"];

var classInfo = ["Barbarian", "Blood Hunter", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer",
"Warlock", "Wizard", "bard", "Artificer (UA)"];

var backgroundInfo = ["Acolyt", "Anthropologist", "Archaeologist", "Athlete", "Charlatan", "City Watch", "Clan Crafter", 
"Cloistered Scholar", "Courtier", "Criminal", "Entertainer", "Faceless", "Faction Agent", "Far traveler", "Fewlost, Fisher",
"Folk Hero", "Gladiator", "Guild Artisan", "Guild Artisan", "Guild Merchant", "Haunted One", "Hermit", "House Agent", 
"Inheritor", "Knight", "Knight of the Order", "Marine", "Mercenary Veteran", "Noble", "Outlander", "Pirate", "Sage", "Sailor", 
"Shipwrite", "Smuggler", "Soldier", "Spy", "Urban Bounty Hunter", "Urchin", "Whitchlight Hand", "Gate Warden", "Giant Foundling", 
"Knight of Solamnia", "Mage of High Sorcery", "Planar Philosopher", "Rune Carver"];


var featsInfo = ["Aberrant Dragonmark", "Actor", "Alert", "Artificer Initiate", "Athlete", "Charger", "Chef", "Crossbow Expert",
"Crusher", "Defensive Duelist", "Dual Wielder", "Dungeon Delver", "Durable", "Eldritch Adept", "Elemental Adept", "Fey Touched",
"Fighting Initiate", "Gift of the Chromatic Dragon", "Gift of the Gem Dragon", "Gift of the Metallic Dragon", "Grappler", 
"Great Weapon Master", "Gunner", "Healer", "Heavily Armored", "Heavy Armor Master", "Inspiring Leander", "Keen Mind", 
"Lightly Armored", "Linguist", "Lucky", "Mage Slayer", "Magic Initiate", "Martial Adept", "Medium Armor Master", "Metamagic Adept",
"Mobile", "Moderately Armored", "Mounted Combatant", "Observant", "Piercer", "Poisoner", "Polearm Master", "Resilient", 
"Ritual Caster", "Savage Attacker", "Sentinel", "Shadow Touched", "Sharpshooter", "Shield Master", "Skill Expert", "Skilled",
"Skulker", "Slasher", "Spell Sniper", "Tavern Brawler", "Tough", "War Caster", "Weapon Master", "Acrobat (UA)", 
"Adept of the Black Robes (UA)", "Adept of the Red Robes (UA)", "Adept of the White Robes (UA)", "Agent of Order (UA)", 
"Alchemist (UA)", "Animal Handler (UA)", "Arcanist (UA)", "Baleful Scoin (UA)", "Blade Mastery (UA)", "Brawny (UA)", "Burglar (UA)",
"Cartomancer (UA)", "Cohort of Chaos (UA)", "Diplomat (UA)", "Divine Communications (UA)", "Divinely Favored (UA)", 
"Dragonmark (UA)", "Elemental Touched (UA)", "Ember of the Fire Giant (UA)", "Empathic (UA)", "Fell Handed (UA)", "Flail Mastery (UA)", 
"Fury of the Frost Giant (UA)","Guile of the Cloud Giant (UA)", "Gourmand (UA)", "Greater Dragonmark (UA)", "Historian (UA)", 
"Initiate of High Sorcery (UA)", "Investigator (UA)", "Keenness of the Stone Giant (UA)", "Knight of the Crown (UA)", 
"Knight of the Sword (UA)", "Knight of the Rose (UA)", "Master of Disguise (UA)", "Medic (UA)", "Menacing (UA)", 
"Metabolic Control (UA)", "Naturalist (UA)", "Outlands Envoy (UA)", "Outsized Might (UA)", "Perceptive (UA)", "Performer (UA)", 
"Planar Wanderer (UA)", "Practiced Expert (UA)", "Quick-Fingered (UA)", "Righteous Heritor (UA)", "Rune Carver Adept (UA)", 
"Rune Carver Apprentice (UA)", "Scion of the Elemental Air (UA)", "Scion of the Elemental Earth (UA)", 
"Scion of the Elemental Fire (UA)", "Scion of the Elemental Water (UA)", "Shield Training (UA)", "Silver Tongued (UA)", 
"Spear of Solamnia (UA)", "Soul of the Storm Giant (UA)", "Stealthy (UA)", "Strike of the Giants (UA)", "Survivalist (UA)",
"Tandem Tactician (UA)", "Theologian (UA)", "Tower of Iron Will (UA)", "Tracker (UA)", "Vigor of the Hill Giant (UA)", "Wild Talent (UA)"];
*/
