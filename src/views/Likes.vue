<template>
    <div class="likes">
        <Navbar />
        <v-expansion-panels class="profil">
        <v-expansion-panel v-for="like in likes" :key="like.id">
          <v-expansion-panel-header>
            {{ like.nom }} - {{ like.prenom }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ like.email }}
          </v-expansion-panel-content>
          <v-footer>
            {{ like.id_ecole }}
            <v-icon @click="validate(like.id_etudiant)">
                mdi-heart
            </v-icon>
          </v-footer>
        </v-expansion-panel>
      </v-expansion-panels>
        
    </div>
</template>
<script>
import Navbar from "../components/Navbar";
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    name: "likes",
    computed:{
        ...mapState('offreStore', ['likes']),
        ...mapState('companyStore', ['currentCompany'])
    },
    components: {
        Navbar,
    },
    methods: {
        validate(idEtudiant) {
            console.log("mdr")
            console.log(idEtudiant)
            console.log(this.currentCompany)
            axios.post('http://localhost:3000/validate', {
                "idEntreprise": this.currentCompany.id,
                "idEtudiant": idEtudiant
            })
        }
    }
}
</script>
<style>
.profil{
    margin-top: 10%;
}
</style>