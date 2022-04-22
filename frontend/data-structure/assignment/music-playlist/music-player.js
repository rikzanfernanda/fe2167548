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
        let result = '';
        
        if (this.playlist.songs.length === 0) result = '';
        else if (this.playlist.isRepeatable) {
            result = `Now Playing ${this.playlist.songs[0].singer} - ${this.playlist.songs[0].title}`;
            let temp = this.playlist.songs[0];
            this.playlist.songs.shift();
            this.playlist.songs.push(temp);
        } else {
            result = `Now Playing ${this.playlist.songs[0].singer} - ${this.playlist.songs[0].title}`;
            this.playlist.songs.shift();
        }

        return result;
    }
}