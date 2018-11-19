describe ("Movie", function() {

    const Media = MyMediatek.models.Media
    const Movie = MyMediatek.models.Movie
    let movie

    const expectedTitle = "Scott Pilgrim vs. the World"
    const expectedReleaseDate = new Date(2010, 8, 13)
    const expectedRating = 5
    const expectedImg = "img/movies/scott-pilgrim.jpg"
    const expectedDirector = "Edgar Wright"
    const expectedActors = "Michael Cera, Mary Elizabeth Winstead"
    const expectedDuration = 112
    const expectedPlot = "Scott Pilgrim must defeat his new girlfriend's seven evil exes in order to win her heart."

    beforeEach (function () {
        movie = new Movie(expectedTitle, expectedReleaseDate, expectedRating, expectedImg, expectedDirector, expectedActors, expectedDuration, expectedPlot)
    })

    it ("should be defined and available at MyMediatek.models.Movie", function() {
        expect(Movie).toBeDefined()
        expect(Movie instanceof Function).toBeTruthy()
    })

    it ("should be usable to create movies", function() {
        expect(movie.title).toEqual(expectedTitle)
        expect(movie.releaseDate).toEqual(expectedReleaseDate)
        expect(movie.rating).toEqual(expectedRating)
        expect(movie.img).toEqual(expectedImg)
        expect(movie.director).toEqual(expectedDirector)
        expect(movie.actors).toEqual(expectedActors)
        expect(movie.duration).toEqual(expectedDuration)
        expect(movie.plot).toEqual(expectedPlot)
    })

    it ("a movie should be a media", function() {
        expect(movie instanceof Media).toBeTruthy()
    })
})
