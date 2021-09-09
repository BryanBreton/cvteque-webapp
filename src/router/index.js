import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Etudiant from '../views/Etudiant.vue'
import Entreprise from '../views/Entreprise.vue'
import OffreLike from '../views/OffreLike.vue'
import MyProfile from '../views/MyProfile.vue'
import Likes from '../views/Likes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Home
    },
    {
      path: '/etudiant',
      name: 'Etudiant',
      component: Etudiant
    },
    {
      path: '/like',
      name: 'OffreLike',
      component: OffreLike
    },
    {
      path: '/profile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/entreprise',
      name: 'Entreprise',
      component: Entreprise
    },
    {
      path: '/likes',
      name: 'Likes',
      component: Likes
    }
  ]
})
