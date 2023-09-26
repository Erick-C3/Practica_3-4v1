const Enemigo = require("./Enemigo");

class PowerRanger{
    #nombre = "def nombre";
    #puntosAtaque = 0;
    #puntosVida = 0;

    /**
     * Inicializa un objeto power ranger
     * @param {String} nombre del power ranger 
     * @param {Number} puntosAtaque del power ranger 
     * @param {Number} puntosVida del power ranger 
     */
    constructor(nombre, puntosAtaque, puntosVida){
        this.#nombre = nombre;
        this.#puntosAtaque = puntosAtaque;
        this.#puntosVida = puntosVida;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    getPuntosVida(){
        return this.#puntosVida;
    }
    setPuntosVida(puntosVida){
        this.#puntosVida = puntosVida;
    }
    
    setPuntosAtaque(puntosAtaque){
        this.#puntosAtaque = puntosAtaque;
    }

    getPuntosAtaque(){
        return this.#puntosAtaque;
    }

    decimeComoTeLlamas(){
        console.log("Hola! soy power ranger "+ this.getNombre());
    }

    /**
     * Ataca a un enemigo si el PowerRanger y el enemigo tienen puntos de vida
     * @param {Enemigo} unEnemigo 
     */
    atacaA(unEnemigo){
        /* console.log( typeof "z" ); */
        if (this.#puntosVida > 0) {
            if (unEnemigo.getPuntosVida() > 0) {
                console.log("Estoy atacando a "+ unEnemigo.getNombre());
                unEnemigo.defendeteDe(this);
            }else{
                console.log("El enemigo " + unEnemigo.getNombre()+ " esta muy debil para pelear");
            }
        }else{
            console.log("Estoy muy debil para atacar");
        }
    }
    
    defendeteDe(unEnemigo){
        console.log("Me estoy defendiendo de " + unEnemigo.getNombre());
        this.#puntosVida -= unEnemigo.getPuntosAtaque();
        if (this.#puntosVida <= 0) {
            console.log("Perdi");
        }else{
            console.log("Me quedan "+ this.#puntosVida + " de vida");
        }
    }

    

}

module.exports = PowerRanger;