<template>
  
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      src="https://i.picsum.photos/id/1073/1920/1080.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>CVTèque</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="redirectProfile()">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="redirectLike()">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  methods:{
    redirectLike(){
      this.$router.push({name: 'OffreLike'})
    },
    redirectProfile(){
      this.$router.push({name: "MyProfile"})
    }
  }
}
</script>