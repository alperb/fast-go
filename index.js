/**
 * FastGO
 * A Go game engine
 * Author: Alper Berber <berber@sabanciuniv.edu>
 * Licensed under MIT (C) 2020
 */

class FastGO {
    /**
     * Constructs the game fundamentals
     * @param options Options given in order to create a virtual game environment.
     */
    constructor(options) {
        this.black = this.createPlayer(0, options.players[0]);
        this.white = this.createPlayer(1, options.players[1]);
    }

    /**
     * Creates a player base model.
     */
    createPlayer(id, name){
        return {
            id,
            name,
            moves: [],
            status: {
                won: false,
                lost: false,
                tie: false
            }
        }
    }
}