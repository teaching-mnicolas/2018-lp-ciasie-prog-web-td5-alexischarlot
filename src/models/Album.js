MyMediatek.models.Album = (function () {

    class Album extends MyMediatek.models.Media {
        constructor (title, releaseDate, rating, img, artists, nbTracks) {
            super(title, releaseDate, rating, img)
            this.artists = artists
            this.nbTracks = nbTracks
        }
    }

    return Album

})()
