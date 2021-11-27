import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        starships: []
    },
    mutations:{
      saveStarships(state, starships){
        state.starships = starships

        starships.forEach(starship => {
          const id = parseInt(starship.url.slice(32,-1))
          starship.id= id
          
        });
        
      }
    },
    actions:{
      fetchStarships(context){
        fetch("https://swapi.dev/api/starships")
        .then(response=>response.json())
        .then(response =>{
            context.commit("saveStarships", response.results)
        })
      }

    },
    getters:{

    }

})