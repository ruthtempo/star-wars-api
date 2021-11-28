<template>
    <div class="starshipCard">
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${$store.state.starships[$route.query.index].id}.jpg`" alt="">
        <h1>Starship Name: {{$store.state.starships[$route.query.index].name}}</h1>
        <ul>
            <li><b>Model:</b> {{$store.state.starships[$route.query.index].model}}</li>
            <li><b>Manufacturer:</b> {{$store.state.starships[$route.query.index].manufacturer}}</li>
            <li><b>Cost in Credits:</b> {{$store.state.starships[$route.query.index].cost_in_credits}}</li>
            <li><b>Length:</b> {{$store.state.starships[$route.query.index].length}}</li>
            <li><b>Max Atmosphering Speed:</b> {{$store.state.starships[$route.query.index].max_atmosphering_speed}}</li>
            <li><b>Crew:</b> {{$store.state.starships[$route.query.index].crew}}</li>
            <li><b>Passengers:</b> {{$store.state.starships[$route.query.index].passengers}}</li>
            <li><b>Cargo Capacity:</b> {{$store.state.starships[$route.query.index].cargo_capacity}}</li>
            <li><b>Consumables:</b> {{$store.state.starships[$route.query.index].consumables}}</li>
            <li><b>Hyperrive_rating:</b> {{$store.state.starships[$route.query.index].hyperdrive_rating}}</li>
            <li><b>MGLT:</b> {{$store.state.starships[$route.query.index].MGLT}}</li>
            <li><b>Starship class:</b> {{$store.state.starships[$route.query.index].starship_class}}</li>
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

.starshipCard{
    color:white;

}

ul{
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
}

li{
    padding:20px;
}
</style>