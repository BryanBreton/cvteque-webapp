<template>
    <div>
        <div v-if="student" class="student">
            <v-container>
                <v-card class="pa-md-4 mx-lg-auto milieu">
                    <v-card-title>
                        <h1>Accès espace étudiant</h1>
                        
                    </v-card-title>
                    <div class="red--text" v-if="currentUser == 'Email ou mot de passe incorrect'">
                               <br>
                            <p>Email ou mot de passe incorrect</p> 
                            
                        </div>
                    <v-card-text>
                        <v-text-field outlined shaped name="mail" label="Adresse email" v-model="email"></v-text-field>
                        <v-text-field 
                            outlined shaped
                            v-model="passwordEtudiant"
                            :rules="[rules.required, rules.min]"
                            type="password"
                            name="input-10-1"
                            label="Mot de passe"
                            hint="8 caracteres minimum"
                            counter
                        ></v-text-field>
                        <div class="my-2">
                            <v-btn @click="connexionEtudiant" color="primary">Se connecter</v-btn>
                        </div>
                    </v-card-text>
                <v-switch v-model="student" :label="`Etudiant`"></v-switch>
                    
                </v-card>

            </v-container>
        </div>
        <div v-else class="company">
            <v-container>
                <v-card class="pa-md-4 mx-lg-auto">
                    <v-card-title>
                        <h1>Accès espace entreprise</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field outlined shaped name="pseudo" label="Pseudo de l'entreprise" v-model="pseudo"></v-text-field>
                        <v-text-field 
                            outlined shaped
                            v-model="passwordEntreprise"
                            :rules="[rules.required, rules.min]"
                            type="password"
                            name="input-10-1"
                            label="Mot de passe"
                            hint="8 caracteres minimum"
                            counter
                        ></v-text-field>

                        <div class="my-2">
                            <v-btn color="primary" @click="connexionEntreprise">Se connecter</v-btn>
                        </div>
                    </v-card-text>
                <v-switch v-model="student" :label="`Entreprise`"></v-switch>
                    
                </v-card>
            </v-container>
            
        </div>    
    </div>
</template>

<script>
import { mapState } from "vuex";
//import Navbar from '../components/Navbar'
export default {
    data: () => ({
    //
        student: true,
        email: "",
        passwordEtudiant: "",
        passwordEntreprise: "",
        pseudo: "",
        rules: {
          required: value => !!value || 'Champ obligatoire.',
          min: v => v.length >= 8 || 'Min 8 caracteres',
        } 
    }),
    methods:{
        connexionEtudiant: async function(){
            await this.$store.dispatch('etudiantStore/connexion', {email: this.email, pwd: this.passwordEtudiant}).then(setTimeout(() => {
                if(this.currentUser != "Email ou mot de passe incorrect"){
                    this.$router.push({name: "Etudiant"})
                }
            }, 1000));
        },
        connexionEntreprise: function(){
            this.$store.dispatch('companyStore/connexion', {pseudo: this.pseudo, pwd: this.passwordEntreprise}).then(setTimeout(() => {
                if(this.currentCompany != "Email ou mot de passe incorrect"){
                    // this.$router.push({name: "Etudiant"})
                }
            }, 200));
        }
    },
    components:{
      //  Navbar
    },
    computed:{
        ...mapState('etudiantStore', ['currentUser']),
        ...mapState('companyStore', ['currentCompany'])
    }
}
</script>
<style lang="scss">
    .student{
        background-image: url("../assets/etudiants.jpg");
        background-size: 100% 100%;
        position:absolute;
        top:0%;
        left:0%;
        z-index: 1000;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .company{
        background-image: url("../assets/entreprise.jpg");
        background-size: 100% 100%;
        position:absolute;
        top:0%;
        left:0%;
        z-index: 1000;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: grey!important;
    }
    .milieu{
        position: absolute;
        top: 50%;
        left:0%;
        z-index: 1000;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
    }
    .transparent {
        background-color: transparent!important;
        border-color: transparent!important;
    }
</style>