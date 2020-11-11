<template>
    <div>
        <div class="student">
            <v-container>
                {{currentUser}}
                <h1>ouiiiiiiiiiiiiiiiiiii</h1>
                <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
            </v-container>
        </div>   
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios'
//import Navbar from '../components/Navbar'
export default {
    data: () => ({
    //
        file: ''
    }),
    methods:{
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post( 'http://localhost:3000/file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
        }
    },
    components:{
      //  Navbar
    },
    computed:{
        ...mapState('etudiantStore', ['currentUser'])
    }
}
</script>
<style lang="scss">
    
</style>