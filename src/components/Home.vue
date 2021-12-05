<template>
  <div class="home">
    <h1>Welcome to the Star Wars Website!</h1>
    <p>We hope you enjoy the amazingly detailed Starship List that we've prepared for you</p>
    <router-link to="/starships" class="startButton">Check Starships</router-link> 
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


p, h1{
  color:white;
  margin:50px;
}

.startButton{
    padding:10px;
    font-size: 20px;
    background-color:#494847;
    /* border-radius: 30%; */
    border-color:#494847;
    border-style:solid;
    color:rgb(211, 210, 210);
    cursor:pointer;
    text-decoration: none;
    border-radius:45px;
}

.startButton:hover{
  background-color: grey;
  border-color:grey;
  color:white;
}

</style>
