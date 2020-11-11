import Vue from 'vue'
import Vuex from 'vuex'
import etudiantStore from './etudiant/modules'
import offreStore from './offre/modules'
import companyStore from './entreprises/modules'
Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {etudiantStore, offreStore, companyStore}
})

export default Store
