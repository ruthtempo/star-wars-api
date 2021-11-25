import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        starships:[
            {
             //    EMPTY OBJECT
                name:"caqui",
                model:"caquito",
            },
            {
              name:"pruty",
              model:"frutty"
            }
         ]
    },
    mutations:{
      saveStarships(state, starships){
        state.starships = starships
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