import express from 'express';

import { showSongs } from '../../controllers/song.js';
import { showArtists } from '../../controllers/artist';
import { showPlaylists } from '../../controllers/playlist';
import { showUsers } from '../../controllers/user';

const router = express.Router()

router.get('/api/songs', showSongs)
router.get('/api/artists', showArtists)
router.get('/api/playlists', showPlaylists)
router.get('/api/users', showUsers)

export default router