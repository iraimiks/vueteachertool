<template>
  <v-app id="app">
    <NavLeftDrawer></NavLeftDrawer>
    <v-app-bar app clipped-left>
      <v-toolbar-title>LMS</v-toolbar-title>
      <NavHeaderBtn></NavHeaderBtn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import NavLeftDrawer from './components/NavLeftDrawer.vue';
import NavHeaderBtn from './components/NavHeaderBtn.vue';

export default {
  name: 'App',
  components: {
    NavLeftDrawer,
    NavHeaderBtn,
  }
};

</script>
