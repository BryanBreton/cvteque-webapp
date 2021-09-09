const mutations = {
    setCurrentUser(state, user){
        state.currentUser = user.data
        console.log("mutations")
        console.log(state.currentUser)
    }
    
}
export default mutations