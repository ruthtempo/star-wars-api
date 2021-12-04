import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        starships: [],
        nextPageUrl:"https://swapi.dev/api/starships",
        loading: false, //to prevent from doubleclickling -button wi be disabled when true
      },
    mutations:{
      saveStarships(state, starshipsNextPage){
        const newStarshipsList = state.starships.concat(starshipsNextPage)
        state.starships = newStarshipsList

        starshipsNextPage.forEach(starship => {
          const id = parseInt(starship.url.slice(32,-1))
          starship.id = id
          
        });
      },
      updatePageUrl(state, link){
        state.nextPageUrl = link
      },
      resetStarshipList(state){
        state.starships = []
        state.nextPageUrl= "https://swapi.dev/api/starships"
        console.log(state.starships)
      },

    },
    actions:{
      fetchStarships(context){
        this.state.loading = true
        fetch(context.state.nextPageUrl)
        .then(response=>response.json())
        .then(response=>{
            this.state.loading =false
            context.commit('saveStarships', response.results)
            context.commit('updatePageUrl', response.next)
        })

      }

    },
    getters:{

    }

})