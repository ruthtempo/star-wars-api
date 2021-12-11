<template>
    <div class="pilot-card">
      <ul v-if="$store.state.pilots[url]">
        <li>Name: {{$store.state.pilots[url].name}}</li> 
        <li>Height: {{$store.state.pilots[url].height}}</li>
        <li>Hair Color: {{$store.state.pilots[url].hair_color}}</li>
        <li>Skin Color: {{$store.state.pilots[url].skin_color}}</li>
        <li>Eye Color: {{$store.state.pilots[url].eye_color}}</li>
        <li>Gender: {{$store.state.pilots[url].gender}}</li>
      </ul>
    </div>
</template>
<script>
export default {
  name:'PilotCard',
  props:{
    url: String
  },
  mounted(){  
    this.$store.dispatch('fetchPilotUrl', this.url )
  }
}
</script>
<style scoped>

/* .pilot-wrapper{
  display:flex;
  
} */

.pilot-card{
  display: flex;
  margin:20px;
  border-radius:10px;
  width:250px;
  background-color:grey;
  border-radius:10px;
}


li{
  display:flex;
  list-style-type: none;
  justify-content: flex-start;
  padding:5px;
}

</style>