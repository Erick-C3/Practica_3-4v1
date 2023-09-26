const PowerRanger = require("./PowerRanger");

class Enemigo{
    #puntosVida = 0;
    #nombre = "def nombre enemigo";
    #puntosAtaque = 0;

    /**
     * Inicializa un objeto enemigo
     * @param {String} nombre del enemigo 
     * @param {Number} puntosAtaque del enemigo 
     * @param {Number} puntosVida del enemigo 
     */
    constructor(nombre, puntosAtaque, puntosVida){
        this.#nombre = nombre;
        this.#puntosAtaque = puntosAtaque;
        this.#puntosVida = puntosVida;
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getPuntosVida(){
        return this.#puntosVida;
    }

    getPuntosAtaque(){
        return this.#puntosAtaque;
    }
    setPuntosAtaque(puntosAtaque){
        this.#puntosAtaque = puntosAtaque;
    }

    setPuntosVida(puntosVida){
        this.#puntosVida = puntosVida;
    }

    defendeteDe(unPowerRanger){
        console.log("Me estoy defendiendo de " + unPowerRanger.getNombre());
        this.#puntosVida -= unPowerRanger.getPuntosAtaque();
        if (this.#puntosVida <= 0) {
            console.log("Perdi");
        }else{
            console.log("Me quedan "+ this.#puntosVida + " de vida");
        }
    }

    /**
     * 
     * @param {PowerRanger} unPowerRanger 
     */
    atacaA(unPowerRanger){
        if (unPowerRanger.getPuntosVida() > 0) {
            console.log("Estoy atacando a "+ unPowerRanger.getNombre());
            unPowerRanger.defendeteDe(this);
        }else{
            console.log("El enemigo " + unPowerRanger.getNombre()+ " esta muy debil para pelear");
        }
    }
}


module.exports = Enemigo;