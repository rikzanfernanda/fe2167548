const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        this.playlist = new Playlist([...this.playlist.songs, song], this.playlist.isRepeatable)
    }

    play() {
        if (this.playlist.songs.length === 0) return '';

        let result = `Now Playing ${this.playlist.songs[0].singer} - ${this.playlist.songs[0].title}`;
        if (this.playlist.isRepeatable) {
            let first = this.playlist.songs.shift();
            this.playlist.songs.push(first);
        } else {
            this.playlist.songs.shift();
        }

        return result;
    }
}