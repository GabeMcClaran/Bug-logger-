<template>
  <div class="containter-fluid" id="app">
    <div id="nav">
      <nav class="navbar navbar-light bg-info">
        <span class="navbar-brand mb-0 h1 badge badge-light">Bug Tracker</span>
        <button class="btn btn-dark">Report</button>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
