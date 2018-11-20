import Media from './Media.js'
    export default class Game extends Media {

        constructor (title, releaseDate, rating, img, studio, nbPlayers, plot) {
            super(title, releaseDate, rating, img)
            this.studio = studio
            this.nbPlayers = nbPlayers
            this.plot = plot
        }
    }
