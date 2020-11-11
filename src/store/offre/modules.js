import state from './states'
import actions from './actions'
import mutations from './mutations'

const offreStore = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default offreStore