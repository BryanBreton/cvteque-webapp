<template>
  <div class="all">
    <Navbar />
    <h1>Bienvenue {{ currentUser.prenom }}</h1>
    <v-container>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Annonce aimée
          </v-card-title>

          <v-card-text>
            Vous venez d'aimer cette annonce, vous pouvez retrouvez les annonces
            que vous avez aimées dans l'onglet dédié (coeur dans la barre de
            navigation)
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-expansion-panels class="offres">
        <v-expansion-panel v-for="offre in offres" :key="offre.id">
          <v-expansion-panel-header> {{offre.titre}} - {{offre.type_offre}} </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{offre.description}}
          </v-expansion-panel-content>
          <v-footer>
            {{ offre.nom }} - {{ offre.date_offre }}
            <v-btn
              icon
              @click="like(offre.id, currentUser.id, currentUser.id_ecole)"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
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
  name: "Etudiant",
  data: () => ({
    show: false,
    dialog: false,
    offres: [],
  }),
  mounted() {
    this.$store
      .dispatch("offreStore/getOffersBySchoolId", {
        idEcole: this.currentUser.id_ecole,
        idEtudiant: this.currentUser.id,
      })
      .then(
        setTimeout(() => {
          this.offres = this.userOffres;
        }, 1000)
      );
  },
  computed: {
    ...mapState("etudiantStore", ["currentUser"]),
    ...mapState("offreStore", ["userOffres"]),
  },
  components: {
    Navbar,
  },
  methods: {
    like(idOffre, idUser, idEcole) {
      axios
        .post("http://localhost:3000/like", {
          idOffre: idOffre,
          idEtudiant: idUser,
        })
        .then((res) => {
          if (res.data === "Created") {
            axios
              .get(
                "http://localhost:3000/offres/ecole/" +
                  idEcole +
                  "/etudiant/" +
                  idUser
              )
              .then((resp) => {
                this.offres = resp.data;
                this.dialog = true;
              });
          }
        });

      //this.$store.dispatch('offreStore/like', {idOffre: idOffre, idEtudiant: idUser})
    },
  },
};
</script>
<style>
.all {
  color: white;
  background-size: 100% 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 1000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.offres{
  margin-top: 5%;
}
</style>