const mutations = {
    setUsersOffers(state, offres){
        state.userOffres = offres.data
        //Ici on a un objet contenant 0: id, 1: Nom, 2: addresse... Passer en JSON ?

    },
    setLikedOffers(state, offres){
        state.userLikedOffres = offres.data
    }
    
}
export default mutations