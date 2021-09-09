import axios from 'axios'
const actions= {
    connexion({commit}, {email, pwd}){
        axios.get('http://localhost:3000/connexionEtudiant', {
            headers: {
                authorization: email+":"+pwd
            }
        }).then(response => {
            console.log(response);
            let user = response
            commit('setCurrentUser', user)
        }).catch(error => {
            console.log(error)
        })
    }
    }

export default actions