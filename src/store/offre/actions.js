import axios from 'axios'
const actions= {
    getOffersBySchoolId({commit}, {idEcole, idEtudiant}){
        
        axios.get('http://localhost:3000/offres/ecole/'+ idEcole +'/etudiant/'+idEtudiant).then(response => {
            let offres = response
            commit('setUsersOffers', offres)
        }).catch(error => {
            console.log(error)
        })
    },
    like({idOffre, idEtudiant}){
        axios.post('http://localhost:3000/like', {"idOffre": idOffre, "idEtudiant": idEtudiant})
    },
    getOffersLiked({commit}, {id}){
        axios.get('http://localhost:3000/offres/like/'+id).then(response =>{
            let offres = response
            commit('setLikedOffers', offres)
        }).catch(error => {
            console.log(error)
        })
    }
}

export default actions