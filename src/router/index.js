import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Starships from '../components/Starships'
import StarshipFile from '../components/StarshipFile'
// import LoginForm from '../components/LoginForm'

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
    // {
    //   path: '/loginform',
    //   name: 'LoginForm',
    //   component: LoginForm
    // }
  ]

  const router = new VueRouter({
    routes
  })
  
  export default router