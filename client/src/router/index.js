import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Songs from '../views/Songs.vue'
import Users from '../views/Users.vue'
import Playlists from '../views/Playlists.vue'
import Artists from '../views/Artists.vue'
import PlaylistsAndSongs from '../views/PlaylistsAndSongs.vue'
import ArtistsAndSongs from '../views/ArtistsAndSongs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists
  },
  {
    path: '/Artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/playlistssongs',
    name: 'PlaylistsAndSongs',
    component: PlaylistsAndSongs
  },
  {
    path: '/artistssongs',
    name: 'ArtistsAndSongs',
    component: ArtistsAndSongs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
