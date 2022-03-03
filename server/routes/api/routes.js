import express from 'express';

import { showSongs } from '../../controllers/song.js';

const router = express.Router()

router.get('/api/songs', showSongs)

export default router