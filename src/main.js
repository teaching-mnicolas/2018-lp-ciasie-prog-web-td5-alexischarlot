import App from './App.js'
            import Album from './models/Album.js'
            import Game from './models/Game.js'
            import Movie from './models/Movie.js'
            $(document).ready(function () {
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
                    const actors = "Michael Cera, Mary Elizabeth Winstead"
                    const duration = 112
                    const plot = "Scott Pilgrim must defeat his new girlfriend's seven evil exes in order to win her heart."

                    return new  Movie(title, releaseDate, rating, img, director, actors, duration, plot)
                }

                const app = new App()
                app.init()
                app.addMedia(generateAlbum())
                app.addMedia(generateGame())
                app.addMedia(generateMovie())
            })