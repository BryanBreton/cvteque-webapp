import state from './states'
import actions from './actions'
import mutations from './mutations'

const companyStore = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default companyStore