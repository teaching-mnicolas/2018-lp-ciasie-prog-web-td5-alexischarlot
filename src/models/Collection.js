MyMediatek.models.Collection = (function () {

    class Collection {
        constructor () {
            this.medias = []
        }

        addMedia (media) {
            this.medias.push(media)
        }

        removeMedia (media) {
            this.medias = this.medias.filter(function (other) {
                return media !== other
            })
        }

        getNbMedias () {
            return this.medias.length
        }

        filter (filterFn) {
            return this.medias.filter(filterFn)
        }
    }

    return Collection

})()
