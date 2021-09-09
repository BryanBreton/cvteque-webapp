<template>
  <div class="all">
    <Navbar />
    
    <v-container>
      <div class="offre" v-for="offre in offres" :key="offre.id">
          <v-card>
              <v-card-title>
                  {{ offre.titre }}
              </v-card-title>
              <v-card-text>
                  {{ offre.description }}
              </v-card-text>
              <v-footer>
                  Voir les etudiants qui aiment cette offre
              </v-footer>
          </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";
import Navbar from "../components/Navbar";
export default {
  name: "Entreprise",
  data: () => ({
    offres: null
  }),
  mounted() {
  },
  created(){
      console.log("lol");
      this.getOffreByEntreprise(this.currentCompany.id)
  },
  computed: {
    ...mapState("companyStore", ["currentCompany"]),
    // ...mapState("offreStore", ["userOffres"]),
  },
  components: {
    Navbar,
  },
  methods: {
    getOffreByEntreprise(id){
        console.log(id);
        axios.get('http://localhost:3000/offres/entreprises/'+id).then(response => {
            this.offres = response.data
        })
    }
    },
};
</script>
<style>
.all {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>