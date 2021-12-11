import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      starships: [],
      nextPageUrl:"https://swapi.dev/api/starships",
      loading: false, //to prevent from doubleclickling -button wi be disabled when true
      modal:null,
      userObject:null,
      starshipFile:{},
      pilots: {
        //["http://..."]: {...}
      },
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
      closeModal(state){
        state.modal = null
      },
      openModal(state, modal){
        state.modal = modal
      },
      signInUser(state, user){
        state.userObject = user
      },
      saveStarshipFile(state, starship){
        state.starshipFile = starship
      },
      savePilot(state, pilot){
        // state.pilots[pilot.url] = pilot
        state.pilots = {...state.pilots} //copy of the original object. the template wont recognise the change otherwise
        state.pilots[pilot.url] = pilot
        console.log(pilot, state.pilots)
      }
      

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
      },
      fetchStarshipFile(context, id){
        context.commit('saveStarshipFile', {}) //reset old state (starshipfile)
        fetch(`https://swapi.dev/api/starships/${id}`)
        .then(response=>response.json())
        .then(response=>{
          context.commit('saveStarshipFile', response)

        })
      },
      fetchPilotUrl(context, url){
        fetch(url)
        .then(response=>response.json())
        .then(response=>{
          context.commit('savePilot', response)

        })

      }

    },
    getters:{

    }

})