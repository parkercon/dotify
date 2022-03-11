import express from 'express';

import { showSongs, createSong, updateSong } from '../../controllers/song.js';
import { showArtists, createArtist, updateArtist } from '../../controllers/artist.js';
import { showPlaylists, createPlaylist, updatePlaylist } from '../../controllers/playlist.js';
import { showUsers, createUser, updateUser } from '../../controllers/user.js';
import { showPlaylistsAndSongs, createPlaylistAndSong } from '../../controllers/playlistAndSong.js';
import { showArtistsAndSongs, createArtistAndSong } from '../../controllers/artistAndSong.js';

const router = express.Router()

router.get('/api/songs', showSongs)
router.get('/api/artists', showArtists)
router.get('/api/playlists', showPlaylists)
router.get('/api/users', showUsers)
router.get('/api/playlistsAndSongs', showPlaylistsAndSongs)
router.get('/api/artistsAndSongs', showArtistsAndSongs)

router.post('/api/songs', createSong)
router.post('/api/artists', createArtist)
router.post('/api/playlists', createPlaylist)
router.post('/api/users', createUser)
router.post('/api/playlistsAndSongs', createPlaylistAndSong)
router.post('/api/artistsAndSongs', createArtistAndSong)

router.put('/api/artists/:id', updateArtist)
router.put('/api/playlists/:id', updatePlaylist)
router.put('/api/songs/:id', updateSong)
router.put('/api/users/:id', updateUser)


export default router