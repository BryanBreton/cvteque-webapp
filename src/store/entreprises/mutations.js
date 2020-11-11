const mutations = {
    setCurrentCompany(state, user){
        state.currentUser = user.data
        
        //Ici on a un objet contenant 0: id, 1: Nom, 2: addresse... Passer en JSON ?
    }
    
}
export default mutations