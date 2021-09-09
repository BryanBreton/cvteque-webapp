<template>
    <div>
      <Navbar />
      <v-template >
        <div class="user">
        <h2>Présentation</h2>
        <h3>{{user.nom}} {{user.prenom}}</h3>
        <h4>Date de Naissance</h4>{{user.date_naissance}}
        <h4>email :</h4> {{user.email}}
        <h2>
          Experiences
        </h2>
        <div class="experiences" v-for="exp in user.experiences" :key="exp.id">
          {{exp.poste}} - {{exp.entreprise}} ({{exp.date_debut}} - {{exp.date_fin}})
        </div>
        <h2>
          Formations
        </h2>
        <div class="formation" v-for="forma in user.formations" :key="forma.id">
          {{forma.diplome}} - {{forma.ecole}} {{forma.ville}} ({{forma.date_debut}} - {{forma.date_fin}})
        </div>
        </div>
      </v-template>
           
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'
// import jwt from 'jsonwebtoken'
import Navbar from '../components/Navbar'
export default {
    data: () => ({
    //
        file: '',
        user: {}
    }),
    methods:{
      decode(code){
        const decoded = VueJwtDecode.decode(code)
        console.log('test')
        console.log(decoded);
      },
      getUserInfo(){
        axios.get('http://localhost:3000/etudiants/'+this.currentUser.id, {headers:{"jwt-token": this.currentUser.token}}).then(res => {
          console.log("par la");
          console.log(res.data);
          this.user = res.data
        })
      }
      
    },
    components:{
      Navbar
    },
    computed:{
        ...mapState('etudiantStore', ['currentUser'])
    },
    mounted(){
      this.decode(this.currentUser.token)
      this.getUserInfo()
    },
    created(){
      this.getUserInfo()
    }
}
</script>
<style>
.user{
  margin-left: 1% !important;
  margin-top: 5% !important;
}
</style>