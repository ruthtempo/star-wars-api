<template>
<div class="register-background">
  <div class="registerWrapper">
    <div class="registrationContainer">
    <div class="closeButtonWrapper">
      <button class="closeButton" @click="$emit('onClose')">x</button>
    </div>
    <h1>CREATE YOUR ACCOUNT</h1>
      <form>
        <p v-if="errors.length" class="error-message">
          <b> !! Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
        <input type="text" v-model="firstName" placeholder="First Name" required>
        <input type="text" v-model="lastName" placeholder="Last Name">
        <input type="email" v-model="email" placeholder="Email Address" required>
        <div class="displayNameWrapper">
          <input type="text" v-model="username" placeholder="Display Name" required>
          <p>New display names need to be approved. Until then, you'll see a temporary display name.</p>
        </div>
        <div class="passwordWrapper">
          <input :type="type" v-model="password" placeholder="Password" required>
          <label for="showPass">
            <input  id="showPass" type="checkbox" v-model="checked" @click="showPassword">
            Show Password
          </label>
        </div>
        <!-- <button
          class="createAccountButton"
          @click="$store.dispatch('createAccount', {firstName, lastName, email, username,password})"
        >Create Account</button> -->
        <button
          class="createAccountButton"
          @click="checkForm"
        >Create Account</button>
        <p>Already have an account? Sign In</p>
      </form>
    </div>
  </div>
</div>

</template>
<script>
export default {
  name:"RegisterForm",
  data(){
    return{
      type:"password",
      checked:false,
      firstName:"",
      lastName:"",
      email:"",
      username:"",
      password:"",
      errors:[]
    }
  },
  methods:{
    showPassword(){
      !this.checked ? this.type = "text" : this.type = "password"
    },
    checkForm(){
      // if(this.firstName && this.email && this.username && this.password){
      //   this.$store.dispatch('createAccount', {firstName: this.firstName, lastName:this.lastName, email:this.email, username: this.username,password: this.password})
      // }

      this.errors =[];

      if(!this.firstName){
        this.errors.push('Name required')
      }
      if(!this.email){
        this.errors.push('Email required')
      }
      if(!this.username){
        this.errors.push('Username required')
      }
      if(this.username.length <= 7){
        this.errors.push('Username must be at least 7 characters')
      }
      if(!this.password){
        this.errors.push('Password required')
      }
      if(this.email){
        this.errors.push('Email required')
      }
      if(this.errors.length === 0){
        this.$store.dispatch('createAccount', {firstName: this.firstName, lastName:this.lastName, email:this.email, username: this.username,password: this.password})
      }
    }

  }
}
</script>
<style scoped>

.register-background{
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  width:100%;
  height:100vh;
  background-color: rgba(0,0,0,0.5);
}

.registerWrapper{
  display: flex;
  justify-content: center;
}

.registrationContainer{
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color: #313333;
  width:400px;
  padding:20px;
  border-style: none;
  border-radius: 5px;
}

form , .displayNameWrapper, .passwordWrapper {
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

.createAccountButton{
  background-color: #4D5252;
  padding:10px;
  color:white;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  margin: 10px auto 0 auto;
  width:100%;
}

.createAccountButton:hover{
  background-color: darkgray;
}

.closeButton{
  display:flex;
  justify-content: center;
  width:25px;
  height:25px;
  cursor: pointer;
}

p, label{
  font-size:15px;
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