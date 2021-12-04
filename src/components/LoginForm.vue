<template>
<div class="login-background">
  <div class="loginWrapper">
    <div class="loginContainer">
      <div class="closeButtonWrapper">
        <button class="close-button" @click="$emit('onClose')">x</button>
      </div>
      <h1>SIGN IN</h1>
      <form>
        <input type="text" v-model="username" placeholder="Username" id="username">
        <input type="password" v-model="password" placeholder="Password" id="password">
        <button class="signinButton" @click="signIn">Sign in</button>
      </form>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"LoginForm",
  data(){
    return{
      username:"",
      password:"",
    }
  },
  methods:{
    signIn(){

      const key= this.username
      const userJSON= (window.localStorage.getItem(key)) 
      const userObject = JSON.parse(userJSON)

      if(userJSON !== null && this.password == userObject.password){
        alert("you signed in")
      }else{
        alert("unknown username or wrong password")
      }
    },

  }
}
</script>
<style scoped>

.login-background{
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  width:100%;
  height:100vh;
  background-color: rgba(0,0,0,0.5);
}

.loginWrapper{
  display: flex;
  justify-content: center;
}
.loginContainer{
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color: #313333;
  width:400px;
  padding:20px;
  border-style: none;
  border-radius: 5px;;
}

form{
  display:flex;
  flex-direction: column;
}

input{
  padding:10px;
  margin-top:10px;
  border-style: none;
  border-radius: 5px;;
}
h1{
  color:yellow;
}

.signinButton{
  background-color: #4D5252;
  color:white;
  padding:10px;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  margin: 10px auto 0 auto;
  width:100%;
}

.signinButton:hover{
  background-color: darkgray;
  border-style:solid;
  border-color:yellow;
}

.close-button{
  display:flex;
  justify-content: center;
  width:25px;
  height:25px;
  cursor: pointer;
}

.closeButtonWrapper{
  display: flex;
  justify-content: flex-end;
}
</style>