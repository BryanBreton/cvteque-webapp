<template>
    <div class="all">
        <Navbar/>
        <h1>Bienvenue {{currentUser.nom}}</h1>
        <v-container>    
            <div v-for="offre in userLikedOffres" :key="offre.id">
                <v-card class="pa-md-4 ma-4 mx-lg-auto">
                    <v-card-title>
                        {{offre.titre}}
                    </v-card-title>
                    <v-card-text>
                        {{offre.type_offre}}
                    </v-card-text>
                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                                {{offre.description}}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                    <v-footer>
                        {{offre.nom}} - {{offre.date_offre}}
                        

                    </v-footer>
                </v-card>
                
            </div>
        </v-container>
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Navbar from '../components/Navbar'
export default {
    name: 'Etudiant',
    data: () => ({
        show: false,
    }),
    mounted(){
        this.$store.dispatch('offreStore/getOffersLiked', {id:this.currentUser.id})
        
    },
    computed:{
        ...mapState('etudiantStore', ['currentUser']),
        ...mapState('offreStore', ['userLikedOffres'])
    },
    components:{
        Navbar
    },
    methods:{
        
    }
    
}
</script>
<style>
.all{
        color: white;
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
</style>