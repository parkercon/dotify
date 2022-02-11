<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/"><b-icon icon="music-note-list"></b-icon> Dotify</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/dotify/users">Users</router-link></b-nav-item>
            <b-nav-item href="/dotify/playlists">Playlists</b-nav-item>
            <b-nav-item href="/dotify/songs">Songs</b-nav-item>
            <b-nav-item href="/dotify/artists">Artists</b-nav-item>
            <b-nav-item-dropdown text="M:M Relationships" right>
              <b-dropdown-item href="/dotify/playlistssongs">Playlists & Songs</b-dropdown-item>
              <b-dropdown-item href="/dotify/artistssongs">Artists & Songs</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view/>

  <b-navbar fixed="bottom" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>Made with <b-icon icon="heart-fill"></b-icon> by Parker Conrad and Alihan Baysal</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
