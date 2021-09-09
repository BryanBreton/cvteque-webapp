const mutations = {
    setCurrentCompany(state, user){
        state.currentCompany = user.data
        console.log(state.currentCompany);
        console.log(3);
        //Ici on a un objet contenant 0: id, 1: Nom, 2: addresse... Passer en JSON ?
    }
    
}
export default mutations