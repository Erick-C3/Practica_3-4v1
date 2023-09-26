const Enemigo = require("./Enemigo.js");
const ProgramaTv = require("./ProgramaTv.js");
const powerRangers = require("./powerRangers.js");

const enemigo1 = new Enemigo("Lord Zedd", 1, 3);
const miProgramaTarde = new ProgramaTv(powerRangers, enemigo1);

miProgramaTarde.iniciaEpisodio();











/* console.log( powerRangerRosa.getNombre()); */
/* 
powerRangerRosa.decimeComoTeLlamas();
powerRangerVerde.decimeComoTeLlamas(); */


