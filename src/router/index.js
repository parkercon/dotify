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
    path: '/dotify',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dotify/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/dotify/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/dotify/playlists',
    name: 'playlists',
    component: Playlists
  },
  {
    path: '/dotify/Artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/dotify/playlistssongs',
    name: 'PlaylistsAndSongs',
    component: PlaylistsAndSongs
  },
  {
    path: '/dotify/artistssongs',
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
