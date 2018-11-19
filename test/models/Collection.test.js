describe ("Collection", function() {

    const Album = MyMediatek.models.Album
    const Collection = MyMediatek.models.Collection
    const Game = MyMediatek.models.Game
    const Movie = MyMediatek.models.Movie
    let album, collection, game, movie

    function generateAlbum () {
        const title = "Full Circle"
        const releaseDate = new Date(2016, 3, 1)
        const rating = 5
        const img = "img/albums/full-circle.jpg"
        const artists = "HAELOS"
        const nbTracks = 11

        return new Album(title, releaseDate, rating, img, artists, nbTracks)
    }

    function generateGame () {
        const title = "Hollow Knight"
        const releaseDate = new Date(2017, 2, 24)
        const rating = 5
        const img = "img/games/hollow-knight.jpg"
        const studio = "Team Cherry"
        const nbPlayers = 1
        const plot = "The game tells the story of a knight on a quest to uncover the secrets of the long-abandoned insect kingdom of Hallownest, whose haunting depths draw in the adventurous and brave with promises of treasures and answers to ancient mysteries."

        return new Game(title, releaseDate, rating, img, studio, nbPlayers, plot)
    }

    function generateMovie () {
        const title = "Scott Pilgrim vs. the World"
        const releaseDate = new Date(2010, 8, 13)
        const rating = 5
        const img = "img/movies/scott-pilgrim.jpg"
        const director = "Edgar Wright"
        const actors = ["Michael Cera", "Mary Elizabeth Winstead"]
        const duration = 112
        const plot = "Scott Pilgrim must defeat his new girlfriend's seven evil exes in order to win her heart."

        return new Movie(title, releaseDate, rating, img, director, actors, duration, plot)
    }

    beforeEach (function () {
        collection = new Collection()
        album = generateAlbum()
        game = generateGame()
        movie = generateMovie()
    })

    it ("should be defined and available at MyMediatek.models.Collection", function () {
        expect(Collection).toBeDefined()
        expect(Collection instanceof Function).toBeTruthy()
    })

    it ("should be empty initially", function () {
        expect(collection.getNbMedias()).toEqual(0)
        expect(collection.medias).toEqual([])
    })


    it ("should allow to add medias", function () {
        collection.addMedia(album)
        collection.addMedia(game)
        collection.addMedia(movie)

        expect(collection.getNbMedias()).toEqual(3)
        expect(collection.medias).toEqual([album, game, movie])
    })

    it ("should allow to remove medias", function () {
        collection.addMedia(album)
        collection.addMedia(game)
        collection.addMedia(movie)

        collection.removeMedia(game)

        expect(collection.getNbMedias()).toEqual(2)
        expect(collection.medias).toEqual([album, movie])
    })

    it ("should be filterable", function () {
        collection.addMedia(album)
        collection.addMedia(game)
        collection.addMedia(movie)

        const isEvenFn = function (value, index) {
            return index % 2 === 0
        }

        const evenMedias = collection.filter(isEvenFn)

        expect(evenMedias.length).toEqual(2)
        expect(evenMedias).toEqual([album, movie])
    })
})
