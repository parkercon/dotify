import express from 'express';

import { showSongs } from '../../controllers/song.js';
import { showArtists } from '../../controllers/artist.js';
import { showPlaylists } from '../../controllers/playlist.js';
import { showUsers } from '../../controllers/user.js';
import { showPlaylistsAndSongs } from '../../controllers/playlistAndSong.js';
import { showArtistsAndSongs } from '../../controllers/artistAndSong.js';

const router = express.Router()

router.get('/api/songs', showSongs)
router.get('/api/artists', showArtists)
router.get('/api/playlists', showPlaylists)
router.get('/api/users', showUsers)
router.get('/api/playlistsAndSongs', showUsers)
router.get('/api/artistsAndSongs', showUsers)

export default router