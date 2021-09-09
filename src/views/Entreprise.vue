<template>
  <div class="all">
    <Navbar />

    <v-container>
      <v-expansion-panels class="offres">
        <v-expansion-panel v-for="offre in offres" :key="offre.id">
          <v-expansion-panel-header>
            {{ offre.titre }} - {{ offre.type_offre }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ offre.description }}
          </v-expansion-panel-content>
          <v-footer>
            {{ offre.date_offre }} -
            <span @click="getLikes(offre.id)"
              >Voir les étudiants intéressés
              <v-btn
                icon
              >
                <v-icon>mdi-account-multiple</v-icon>
              </v-btn></span
            >
          </v-footer>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Navbar from "../components/Navbar";
export default {
  name: "Entreprise",
  data: () => ({
    offres: null,
  }),
  mounted() {},
  created() {
    console.log("lol");
    this.getOffreByEntreprise(this.currentCompany.id);
  },
  computed: {
    ...mapState("companyStore", ["currentCompany"]),
    // ...mapState("offreStore", ["userOffres"]),
  },
  components: {
    Navbar,
  },
  methods: {
    getOffreByEntreprise(id) {
      console.log(id);
      axios
        .get("http://localhost:3000/offres/entreprises/" + id)
        .then((response) => {
          this.offres = response.data;
        });
    },
    getLikes(idOffre) {
      console.log("oeoeoeoe");
      this.$store.dispatch("offreStore/getLikeByOffre", idOffre);
      this.$router.push('Likes')
    },
  },
};
</script>
<style>
.all {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.offres {
  margin-top: 10%;
}
</style>