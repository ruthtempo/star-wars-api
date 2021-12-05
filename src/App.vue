<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="social"></div>
      <div class="logo-wrapper">
        <img class="logo" src="./assets/starwars_logo.png" alt="">
      </div>
      <div class="nav-login">
        <a @click="$store.commit('openModal', 'showLogin')" >LOGIN</a> 
        <span> // </span>
        <a @click="$store.commit('openModal', 'showRegister')">REGISTER</a>
      </div>
    </div>
    <br>
    <Navigation/>
    <router-view> </router-view>

        <LoginForm 
        v-if="$store.state.modal==='showLogin'"
        @onClose="$store.commit('closeModal')"
        />
        <RegisterForm
        v-if="$store.state.modal==='showRegister'"
        @onClose="$store.commit('closeModal')"
        />

  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import LoginForm from "./components/LoginForm.vue"
import RegisterForm from "./components/RegisterForm.vue"


export default {
  name: 'App',
  components:{
    Navigation,
    LoginForm,
    RegisterForm,
  },
  
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

body{
  /* background: #2A2928; */
  background-image: url("./assets/backgrounds-stars.jpeg");
  }

.logo{
  width:200px;
  height:auto;
}

h3 {
  margin: 40px 0 0;
}


a{
  color: rgb(211, 210, 210);
  text-decoration: none;
}

a:hover{
  color:white;
} 

.header-wrapper{
  display:flex;
  align-items: center;
  justify-content: space-between;
}

.social, .logo-wrapper, .nav-login{
  flex-basis:20%;
}
</style>
