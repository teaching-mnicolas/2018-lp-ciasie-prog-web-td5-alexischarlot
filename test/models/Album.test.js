describe ("Album", function() {

    const Media = MyMediatek.models.Media
    const Album = MyMediatek.models.Album
    let album

    const expectedTitle = "Full Circle"
    const expectedReleaseDate = new Date(2016, 3, 1)
    const expectedRating = 5
    const expectedImg = "img/albums/full-circle.jpg"
    const expectedArtists = "HAELOS"
    const expectedNbTracks = 11

    beforeEach (function () {
        album = new Album(expectedTitle, expectedReleaseDate, expectedRating, expectedImg, expectedArtists, expectedNbTracks)
    })

    it ("should be defined and available at MyMediatek.models.Album", function() {
        expect(Album).toBeDefined()
        expect(Album instanceof Function).toBeTruthy()
    })

    it ("should be usable to create albums", function() {
        expect(album.title).toEqual(expectedTitle)
        expect(album.releaseDate).toEqual(expectedReleaseDate)
        expect(album.rating).toEqual(expectedRating)
        expect(album.img).toEqual(expectedImg)
        expect(album.artists).toEqual(expectedArtists)
        expect(album.nbTracks).toEqual(expectedNbTracks)
    })

    it ("an album should be a media", function() {
        expect(album instanceof Media).toBeTruthy()
    })
})
