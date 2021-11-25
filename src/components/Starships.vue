<template>
    <ul>
        <li class="starship" v-for="(starship, index) in $store.state.starships" :key="index">
            Starship Name: {{starship.name}} <br>
            Model:{{starship.model}}
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

.starship{
    background-color: whitesmoke;
    padding:10px;
    margin:10px;
    cursor:pointer;
}
</style>