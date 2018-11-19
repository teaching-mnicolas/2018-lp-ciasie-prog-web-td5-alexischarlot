describe ("Game", function() {

    const Media = MyMediatek.models.Media
    const Game = MyMediatek.models.Game
    let game

    const expectedTitle = "Hollow Knight"
    const expectedReleaseDate = new Date(2017, 2, 24)
    const expectedRating = 5
    const expectedImg = "img/games/hollow-knight.jpg"
    const expectedStudio = "Team Cherry"
    const expectedNbPlayers = 1
    const expectedPlot = "The game tells the story of a knight on a quest to uncover the secrets of the long-abandoned insect kingdom of Hallownest, whose haunting depths draw in the adventurous and brave with promises of treasures and answers to ancient mysteries."

    beforeEach (function () {
        game = new Game(expectedTitle, expectedReleaseDate, expectedRating, expectedImg, expectedStudio, expectedNbPlayers, expectedPlot)
    })

    it ("should be defined and available at MyMediatek.models.Game", function() {
        expect(Game).toBeDefined()
        expect(Game instanceof Function).toBeTruthy()
    })

    it ("should be usable to create games", function() {
        expect(game.title).toEqual(expectedTitle)
        expect(game.releaseDate).toEqual(expectedReleaseDate)
        expect(game.rating).toEqual(expectedRating)
        expect(game.img).toEqual(expectedImg)
        expect(game.studio).toEqual(expectedStudio)
        expect(game.nbPlayers).toEqual(expectedNbPlayers)
        expect(game.plot).toEqual(expectedPlot)
    })

    it ("a game should be a media", function() {
        expect(game instanceof Media).toBeTruthy()
    })
})
