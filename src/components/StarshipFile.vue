<template>
    <div>
      
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${$store.state.starships[$route.query.index].id}.jpg`" alt="">
        <h1>Starship Name: {{$store.state.starships[$route.query.index].name}}</h1>
        <ul>
            <li>Model:{{$store.state.starships[$route.query.index].model}}</li>
            <li>Manufacturer:{{$store.state.starships[$route.query.index].manufacturer}}</li>
            <li>Cost in Credits:{{$store.state.starships[$route.query.index].cost_in_credits}}</li>
            <li>Length:{{$store.state.starships[$route.query.index].length}}</li>
            <li>Max Atmosphering Speed:{{$store.state.starships[$route.query.index].max_atmosphering_speed}}</li>
            <li>Crew:{{$store.state.starships[$route.query.index].crew}}</li>
            <li>Passengers:{{$store.state.starships[$route.query.index].passengers}}</li>
            <li>Cargo Capacity:{{$store.state.starships[$route.query.index].cargo_capacity}}</li>
            <li>Consumables:{{$store.state.starships[$route.query.index].consumables}}</li>
            <li>Hyperrive_rating{{$store.state.starships[$route.query.index].hyperdrive_rating}}</li>
            <li>MGLT: {{$store.state.starships[$route.query.index].MGLT}}</li>
            <li>Starship class:{{$store.state.starships[$route.query.index].starship_class}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"StarshipFile",
    mounted(){
        this.$store.dispatch('fetchStarships')
    }
}
</script>
<style scoped>

ul{
  list-style-type: none;
}
</style>