<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand><router-link to="/" style="text-decoration: none; color: inherit;"><b-icon icon="music-note-list"></b-icon> Dotify</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/users" style="text-decoration: none; color: inherit;">Users</router-link></b-nav-item>
            <b-nav-item><router-link to="/playlists" style="text-decoration: none; color: inherit;">Playlists</router-link></b-nav-item>
            <b-nav-item><router-link to="/songs" style="text-decoration: none; color: inherit;">Songs</router-link></b-nav-item>
            <b-nav-item><router-link to="/artists" style="text-decoration: none; color: inherit;">Artists</router-link></b-nav-item>
            <b-nav-item-dropdown text="M:M Relationships" right>
              <b-dropdown-item><router-link to="/playlistssongs" style="text-decoration: none; color: inherit;">Playlists & Songs</router-link></b-dropdown-item>
              <b-dropdown-item><router-link to="/artistssongs" style="text-decoration: none; color: inherit;">Artists & Songs</router-link></b-dropdown-item>
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
