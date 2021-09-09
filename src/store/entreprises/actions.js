import axios from 'axios'
const actions= {
    connexion({commit}, {pseudo, pwd}){
        let config = {
            headers: {
                authorization: pseudo+':'+pwd
            }
        }
        axios.get('http://localhost:3000/connexionEntreprise', config).then(response => {
            console.log(2);
            console.log(response);
            let company = response
            commit('setCurrentCompany', company)
        }).catch(error => {
            console.log(error)
        })
    }
}

export default actions