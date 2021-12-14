<template>
<div class="login-background">
  <div class="loginWrapper">
    <div class="loginContainer">
      <div class="closeButtonWrapper">
        <button class="close-button" @click="$emit('onClose')">x</button>
      </div>
      <h1>SIGN IN</h1>
      <form>
        <p v-if="loginErrors.length" class="error-login">
          <b> Please fill in the required fields:</b>
          <ul>
            <li v-for="error in loginErrors" :key="error">{{ error }}</li>
          </ul>
        </p>
        <input type="text" v-model="username" placeholder="Username" id="username">
        <input type="password" v-model="password" placeholder="Password" id="password">
        <button class="signinButton" @click="checkLogin">Sign in</button>
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
      loginErrors:[],
    }
  },
  methods:{
    checkLogin(){
      this.loginErrors =[];

      if(!this.username){
        this.loginErrors.push('Username required')
      }
      if(!this.password){
        this.loginErrors.push('Password required')
      }
      
      if(this.loginErrors.length === 0){
        this.$store.dispatch('signIn', [this.username,this.password])
      }
    }
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

.error-message, p, ul{
  color:white;
  list-style-type: none;
}
</style>