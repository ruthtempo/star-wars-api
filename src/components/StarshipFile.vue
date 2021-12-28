<template>
    <div class="starshipCard">
        <img :src="`https://starwars-visualguide.com/assets/img/starships/${$route.query.id}.jpg`" alt="">
        <h1>Starship Name: {{$store.getters.getStarshipFile.name}}</h1>
        <ul>
            <li><b>Model:</b> {{$store.getters.getStarshipFile.model}}</li>
            <li><b>Manufacturer:</b> {{$store.getters.getStarshipFile.manufacturer}}</li>
            <li><b>Cost in Credits:</b> {{$store.getters.getStarshipFile.cost_in_credits}}</li>
            <li><b>Length:</b> {{$store.getters.getStarshipFile.length}}</li>
            <li><b>Max Atmosphering Speed:</b> {{$store.getters.getStarshipFile.max_atmosphering_speed}}</li>
            <li><b>Crew:</b> {{$store.getters.getStarshipFile.crew}}</li>
            <li><b>Passengers:</b> {{$store.getters.getStarshipFile.passengers}}</li>
            <li><b>Cargo Capacity:</b> {{$store.getters.getStarshipFile.cargo_capacity}}</li>
            <li><b>Consumables:</b> {{$store.getters.getStarshipFile.consumables}}</li>
            <li><b>Hyperrive_rating:</b> {{$store.getters.getStarshipFile.hyperdrive_rating}}</li>
            <li><b>MGLT:</b> {{$store.getters.getStarshipFile.MGLT}}</li>
            <li><b>Starship class:</b> {{$store.getters.getStarshipFile.starship_class}}</li>
        </ul>
        <div v-if="$store.getters.countStarshipPilots">
            <h2>Pilots</h2>
            <div class="pilot-section">
                <PilotCard 
                    v-for="pilotUrl in $store.getters.getStarshipFile.pilots" 
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