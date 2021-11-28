<template>
  <div id="app">
    <img class="logo" src="./assets/starwars_logo.png" alt="">
    <ul class="navigation">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/starships">Starships</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2A2928;
  height: min 100vh;
}

.logo{
  width:200px;
  height:auto;
}

h3 {
  margin: 40px 0 0;
}
.navigation {
  list-style-type: none;
  padding: 0;
}
.navigation li{
  display: inline-block;
  margin: 0 10px;
  
}

a{
  color: white;
  text-decoration: none;
}

a:hover{
  color:#4EAFBC 
}

</style>
