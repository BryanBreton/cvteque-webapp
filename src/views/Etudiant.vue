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
            Vous venez d'aimer cette annonce, vous pouvez retrouvez les annonces que vous avez aimées dans l'onglet dédié (coeur dans la barre de navigation)
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

      <div v-for="offre in offres" :key="offre.id">
        <v-row>
          <v-col>
            <v-card class="pa-md-4 ma-4 mx-lg-auto">
              <v-card-title>
                {{ offre.titre }}
              </v-card-title>
              <v-card-text>
                {{ offre.type_offre }}
              </v-card-text>
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ offre.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
              <v-footer>
                {{ offre.nom }} - {{ offre.date_offre }}
                <v-btn
                  icon
                  @click="like(offre.id, currentUser.id, currentUser.id_ecole)"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-footer>
            </v-card>
          </v-col>
        </v-row>
      </div>
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
                this.dialog = true
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
  background-image: url("../assets/etudiants.jpg");
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
</style>