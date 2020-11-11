import state from './states'
import actions from './actions'
import mutations from './mutations'

const etudiantStore = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default etudiantStore