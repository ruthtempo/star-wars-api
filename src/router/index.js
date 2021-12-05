import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Starships from '../views/Starships'
import StarshipFile from '../views/StarshipFile'


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
  
  export default router