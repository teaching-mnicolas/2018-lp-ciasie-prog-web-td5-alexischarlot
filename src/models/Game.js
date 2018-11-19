MyMediatek.models.Game = (function () {

    class Game extends MyMediatek.models.Media {

        constructor (title, releaseDate, rating, img, studio, nbPlayers, plot) {
            super(title, releaseDate, rating, img)
            this.studio = studio
            this.nbPlayers = nbPlayers
            this.plot = plot
        }
    }

    return Game

})()
