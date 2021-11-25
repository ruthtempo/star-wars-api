<template>
  <div class="container">
    <img class="logo" src="../assets/starwars_logo.png" alt="">
    <ul class="navigation">
      <li><a href="#">Home</a></li>
      <li><a href="#">Starships</a></li>
    </ul>
    <Starships/>
  </div>
</template>

<script>
import Starships from './Starships.vue'

export default {
  name: 'Home',
  components:{
    Starships,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.logo{
  width:200px;
  height:auto;
}
</style>
