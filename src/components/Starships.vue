<template>
    <ul class="starshipList">
        <li class="starship" v-for="(starship, index) in $store.state.starships" :key="index">
          <router-link :to="{path:'starshipfile', query: {index}}">
            Starship Name: {{starship.name}} <br>
            Model:{{starship.model}}
          </router-link> 
        </li>
    </ul>
</template>

<script>
export default {
    name:"Starships",
    mounted(){
        this.$store.dispatch('fetchStarships')
    }
}
</script>
<style scoped>

.starshipList{
    padding:0;
}
.starship{
    background-color: whitesmoke;
    padding:10px;
    margin:10px;
    cursor:pointer;
    list-style-type: none;
   
}

</style>