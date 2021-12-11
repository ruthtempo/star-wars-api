<template>
    <div class="starshipCard">
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${$route.query.id}.jpg`" alt="">
        <h1>Starship Name: {{$store.state.starshipFile.name}}</h1>
        <ul>
            <li><b>Model:</b> {{$store.state.starshipFile.model}}</li>
            <li><b>Manufacturer:</b> {{$store.state.starshipFile.manufacturer}}</li>
            <li><b>Cost in Credits:</b> {{$store.state.starshipFile.cost_in_credits}}</li>
            <li><b>Length:</b> {{$store.state.starshipFile.length}}</li>
            <li><b>Max Atmosphering Speed:</b> {{$store.state.starshipFile.max_atmosphering_speed}}</li>
            <li><b>Crew:</b> {{$store.state.starshipFile.crew}}</li>
            <li><b>Passengers:</b> {{$store.state.starshipFile.passengers}}</li>
            <li><b>Cargo Capacity:</b> {{$store.state.starshipFile.cargo_capacity}}</li>
            <li><b>Consumables:</b> {{$store.state.starshipFile.consumables}}</li>
            <li><b>Hyperrive_rating:</b> {{$store.state.starshipFile.hyperdrive_rating}}</li>
            <li><b>MGLT:</b> {{$store.state.starshipFile.MGLT}}</li>
            <li><b>Starship class:</b> {{$store.state.starshipFile.starship_class}}</li>
        </ul>
        <div v-if="$store.state.starshipFile.pilots.length >= 1">
            <h2>Pilots</h2>
            <div class="pilot-section">
                <PilotCard 
                    v-for="pilotUrl in $store.state.starshipFile.pilots" 
                    :key="pilotUrl" 
                    :url="pilotUrl"
                />
            </div>
        </div>
    </div>
</template>
<script>
import PilotCard from "./PilotCard"

export default {
    name:"StarshipFile",
    components:{
        PilotCard,
        },
    mounted(){
        this.$store.dispatch('fetchStarshipFile', this.$route.query.id)
    }
}
</script>
<style scoped>

.pilot-section{
    display: flex;
    justify-content: center;
}

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

/* .pilot-section{
    display:flex;
} */
</style>