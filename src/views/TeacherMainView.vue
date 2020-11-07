<template>
 <v-container>
  <v-row>
   <v-col>
    <NewsFeed></NewsFeed>
   </v-col>
   <v-col>
    <FavoritTools></FavoritTools>
   </v-col>
  </v-row>
 </v-container>
</template>
<script>
import NewsFeed from '../components/NewsFeed.vue';
import FavoritTools from '../components/FavoritTools';
export default {
 name: 'TeacherMainView',
 components: {NewsFeed,FavoritTools}
}
</script>