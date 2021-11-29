<template>
  <div id="app">
    <img class="logo" src="./assets/starwars_logo.png" alt="">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"

export default {
  name: 'App',
  components:{
    Navigation,
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: min 100vh;
}

body{background: #2A2928;}

.logo{
  width:200px;
  height:auto;
}

h3 {
  margin: 40px 0 0;
}


a{
  color: white;
  text-decoration: none;
}

a:hover{
  color:#4EAFBC 
} 

</style>
