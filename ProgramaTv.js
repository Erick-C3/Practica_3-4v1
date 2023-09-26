class ProgramaTv{
    #powerRangers = "def power rangers";
    #enemigos = "def enemigos";

    constructor(powerRangers, enemigos){
        this.#powerRangers = powerRangers;
        this.#enemigos = [enemigos];
    }

    iniciaEpisodio(){
        this.#powerRangers[0].atacaA(this.#enemigos[0]); // 3-2 = 1
        this.#enemigos[0].atacaA(this.#powerRangers[0]);
        this.#enemigos[0].atacaA(this.#powerRangers[0]);
        this.#enemigos[0].atacaA(this.#powerRangers[0]);
        this.#powerRangers[0].atacaA(this.#enemigos[0]); // 1 > 0 
        this.#powerRangers[0].atacaA(this.#enemigos[0]); // -1 
    }
}

module.exports = ProgramaTv;