import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Starships from '../views/Starships'
import StarshipFile from '../views/StarshipFile'
// import store from '../store'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/starships',
      name: 'Starships',
      component:Starships
    },
    {
      path: '/starshipfile',
      name: 'StarshipFile',
      component:StarshipFile
    },

  ]

  const router = new VueRouter({
    routes
  })

  // router.beforeEach((to, from, next) => {
  //   // if userObject null and we want to navigate somewhere outside Home (!==) 
  //   // then go HOME and open LOGIN MODAL
    
  //   if (to.name !== 'Home'&& !store.state.userObject){
  //     next({ name: 'Home' }) 
  //     store.commit('openModal', "showLogin")
  //   } 
  //   else next()

  // })
  
  export default router