<template>
<div class="register-background">
  <div class="registerWrapper">
    <div class="registrationContainer">
    <div class="closeButtonWrapper">
      <button class="closeButton" @click="$emit('onClose')">x</button>
    </div>
    <h1>CREATE YOUR ACCOUNT</h1>
      <form>
        <input type="text" v-model="firstName" placeholder="First Name" required>
        <input type="text" v-model="lastName" placeholder="Last Name" required>
        <input type="email" v-model="email" placeholder="Email Address" required>
        <div class="displayNameWrapper">
          <input type="text" v-model="displayName" placeholder="Display Name" required>
          <p>New display names need to be approved. Until then, you'll see a temporary display name.</p>
        </div>
        <div class="passwordWrapper">
          <input :type="type" v-model="password" placeholder="Password" required>
          <label for="showPass">
            <input  id="showPass" type="checkbox" v-model="checked" @click="showPassword">
            Show Password
          </label>
        </div>
        <button class="createAccountButton" @click="createAccount">Create Account</button>
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
      displayName:"",
      password:"",
    }
  },
  methods:{
    showPassword(){
      !this.checked ? this.type = "text" : this.type = "password"
    },
    createAccount(){
      // - [ ] If inputed username (value) exists in the object local storage>alert
      const key = this.displayName
      const userExists = (window.localStorage.getItem(key) !==null) 
      
      if(userExists){
        alert("user already exists")

      }else{
        const newUser ={
          firstName:this.firstName,
          lastName:this.lastName,
          email:this.email,
          username:this.displayName,
          password: this.password
        }
        window.localStorage.setItem(key, JSON.stringify(newUser))
        this.$store.commit('openModal', 'showLogin' )
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
  font-size:12px;
}
.closeButtonWrapper{
  display: flex;
  justify-content: flex-end;
}
</style>