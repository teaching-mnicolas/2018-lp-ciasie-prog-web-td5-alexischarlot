
    import Album from './models/Album.js'
    import Collection from './models/Collection.js'
    import Game from './models/Game.js'
    import Movie from './models/Movie.js'

    const ALBUM = 0
    const GAME = 1
    const MOVIE = 2

    export default class App {
        constructor () {
            this.collection = new Collection()
            this.currentList = this.collection.medias
        }

        addMedia (media) {
            this.collection.addMedia(media)
            this.displayMedia(media)
        }

        displayMedia (media) {
            const component = this.createComponent(media)
            this.listMedias.append(component)
        }

        displayMedias () {
            const self = this
            this.listMedias.empty()
            this.currentList.forEach(function (media) {
                self.displayMedia(media)
            })
        }

        resetList () {
            this.currentList = this.collection.medias
            this.displayMedias()
        }

        init () {
            const self = this

            this.btnAddMedia = $("#btnAddMedia")
            this.listMedias = $("#medias")

            this.btnAllMedias = $("#btnAllMedias")
            this.btnAlbums = $("#btnAlbums")
            this.btnGames = $("#btnGames")
            this.btnMovies = $("#btnMovies")
            this.currentBtn = this.btnAllMedias

            this.btnAddMedia.on("click", function () {
                self.displayModalAddMedia()
            })

            this.btnAllMedias.on("click", function () {
                self.setCurrentActiveBtn(self.btnAllMedias)
                self.resetList()
            })

            const musicFilterFn = function (media) {
                return media instanceof Album
            }

            this.btnAlbums.on("click", function () {
                self.setCurrentActiveBtn(self.btnAlbums)
                self.currentList = self.collection.filter(musicFilterFn)
                self.displayMedias()
            })

            const gameFilterFn = function (media) {
                return media instanceof Game
            }

            this.btnGames.on("click", function () {
                self.setCurrentActiveBtn(self.btnGames)
                self.currentList = self.collection.filter(gameFilterFn)
                self.displayMedias()
            })

            const movieFilterFn = function (media) {
                return media instanceof Movie
            }

            this.btnMovies.on("click", function () {
                self.setCurrentActiveBtn(self.btnMovies)
                self.currentList = self.collection.filter(movieFilterFn)
                self.displayMedias()
            })

            this.dropdown = $(".ui.dropdown")
            this.dropdown.dropdown({
                onChange: function (value, text, $selectedItem) {
                    self.updateModal(parseInt(value))
                }
            })

            this.initModal()

            this.displayMedias()
        }

        setCurrentActiveBtn (btn) {
            this.currentBtn.removeClass("active")
            this.currentBtn = btn
            this.currentBtn.addClass("active")
        }

        createComponent (media) {
            const self = this
            let icon
            if (media instanceof Album) {
                icon = "music"
            } else if (media instanceof Game) {
                icon = "gamepad"
            } else if (media instanceof Movie) {
                icon = "film"
            }

            let content = media.plot
            if (media instanceof Album) {
                content = `By <b>${media.artists}</b>, contains ${media.nbTracks} tracks.`
            }

            let component = `<div class="card">
                <div class="image">
                <img src="${media.img}">
                </div>
                <div class="content">
                <div class="header">
                    <i class="${icon} icon"></i>
                    ${media.title}
                </div>
                <div class="meta">
                    <span class="date">Released the ${media.releaseDate.toLocaleString()}</span>
                </div>
                <div class="description">
                    ${content}
                </div>
                </div>
                <div class="extra">
                    Rating:
                    <div class="ui star rating" data-rating="${media.rating}" data-max-rating="5"></div>
                </div>
                <div class="ui two bottom attached buttons">
                    <div class="ui button">
                        <i class="edit icon"></i>
                        Edit
                    </div>
                    <div class="ui primary button">
                        <i class="trash icon"></i>
                        Remove
                    </div>
                </div>
            </div>`

            const element = $(component)
            $(element).find(".ui.rating").rating("disable")

            $(element).find("div.ui.primary.button").on("click", function () {
                self.collection.removeMedia(media)
                element.remove()
            })

            return element
        }

        initModal () {
            const self = this
            this.modal = $(".ui.modal").modal({
                onApprove: function () {
                    const media = self.readForm()
                    self.addMedia(media)
                }
            })
            this.modal.find(".ui.rating").rating()
        }

        readForm () {
            const type = parseInt(this.modal.find("input[name=type]").val())

            const title = this.modal.find("input[name=title]").val()
            const releaseDate = new Date(this.modal.find("input[name=releaseDate]").val())
            const rating =  parseInt(this.modal.find("div[data-rating]").rating("get rating"))
            const img =  this.modal.find("input[name=img]").val()

            if (type === ALBUM) {
                const artist = this.modal.find("input[name=artist]").val()
                const nbTracks = this.modal.find("input[name=nbTracks]").val()

                return new Album(title, releaseDate, rating, img, artist, nbTracks)
            } else if (type === GAME) {
                const studio = this.modal.find("input[name=studio]").val()
                const nbPlayers = this.modal.find("input[name=nbPlayers]").val()
                const plot = this.modal.find("input[name=plot]").val()

                return new Game(title, releaseDate, rating, img, studio, nbPlayers, plot)
            } else if (type === MOVIE) {
                const director = this.modal.find("input[name=director]").val()
                const actors = this.modal.find("input[name=actors]").val()
                const duration = this.modal.find("input[name=duration]").val()
                const plot = this.modal.find("input[name=plot]").val()

                return new Movie(title, releaseDate, rating, img, director, actors, duration, plot)
            }
        }

        updateModal (type) {
            let html
            if (type === ALBUM) {
                html = `<div class="inline field">
                    <label>Artist</label>
                    <input type="text" name="artist" placeholder="Artist">
                </div>
                <div class="inline field">
                    <label>Number of tracks</label>
                    <input type="text" name="nbTracks" placeholder="Number of tracks">
                </div>`
            } else if (type === GAME) {
                html = `<div class="inline field">
                    <label>Studio</label>
                    <input type="text" name="studio" placeholder="Studio">
                </div>
                <div class="inline field">
                    <label>Number of players</label>
                    <input type="text" name="nbPlayers" placeholder="Number of players">
                </div>
                <div class="inline field">
                    <label>Plot</label>
                    <input type="text" name="plot" placeholder="Plot">
                </div>`
            } else if (type === MOVIE) {
                html = `<div class="inline field">
                    <label>Director</label>
                    <input type="text" name="director" placeholder="Director">
                </div>
                <div class="inline field">
                    <label>Actors</label>
                    <input type="text" name="actors" placeholder="Actor">
                </div>
                <div class="inline field">
                    <label>Duration</label>
                    <input type="text" name="duration" placeholder="Duration">
                </div>
                <div class="inline field">
                    <label>Plot</label>
                    <input type="text" name="plot" placeholder="Plot">
                </div>`
            }
            const newFields = $(html)
            this.modal.find("#specificFields").empty().append(newFields)
        }

        displayModalAddMedia () {
            this.modal.modal("show")
        }
    }

  
