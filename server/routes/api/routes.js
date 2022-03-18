import express from 'express';

import { showSongs, createSong, updateSong, deleteSong, showSongsByName } from '../../controllers/song.js';
import { showArtists, createArtist, updateArtist, deleteArtist, showArtistsByName } from '../../controllers/artist.js';
import { showPlaylists, createPlaylist, updatePlaylist, deletePlaylist, showPlaylistByName } from '../../controllers/playlist.js';
import { showUsers, createUser, updateUser, deleteUser, showUserByEmail } from '../../controllers/user.js';
import { showPlaylistsAndSongs, createPlaylistAndSong, deletePlaylistAndSong, showByPlaylistId } from '../../controllers/playlistAndSong.js';
import { showArtistsAndSongs, createArtistAndSong, deleteArtistAndSong, showByArtistId } from '../../controllers/artistAndSong.js';

const router = express.Router()

router.get('/api/songs', showSongs)
router.get('/api/artists', showArtists)
router.get('/api/playlists', showPlaylists)
router.get('/api/users', showUsers)
router.get('/api/playlistsAndSongs', showPlaylistsAndSongs)
router.get('/api/artistsAndSongs', showArtistsAndSongs)

router.get('/api/users/:userEmail', showUserByEmail);
router.get('/api/songs/:songName', showSongsByName);
router.get('/api/artists/:artistName', showArtistsByName);
router.get('/api/playlists/:playlistName', showPlaylistByName);
router.get('/api/playlistsAndSongs/:playListId', showByPlaylistId);
router.get('/api/artistsAndSongs/:artistId', showByArtistId);

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
router.delete('/api/songs/:id', deleteSong)
router.delete('/api/artists/:id', deleteArtist)
router.delete('/api/playlists/:id', deletePlaylist)
router.delete('/api/users/:id', deleteUser)
router.delete('/api/playlistsAndSongs/:playlistId/:songId', deletePlaylistAndSong)
router.delete('/api/artistsAndSongs/:artistId/:songId', deleteArtistAndSong)


export default router