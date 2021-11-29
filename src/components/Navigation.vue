<template>
  <div>
    <ul class="navigation">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/starships">STARSHIPS</router-link></li>
    </ul>
  </div>
</template>

<style scoped>


.navigation {
  list-style-type: none;
  background-color: black;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1px;
  border-color:#333;
  padding:0;
}
.navigation li{
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-left: 1px solid #333;
  padding:10px;
  
}

.navigation :nth-child(2){
  border-style: solid;
  border-right: 1px solid #333;
  padding:10px;

}

</style>