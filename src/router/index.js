import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Starships from '../components/Starships'
import StarshipFile from '../components/StarshipFile'

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