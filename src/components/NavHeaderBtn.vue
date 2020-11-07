<template>
  <v-row align="left">
    <v-btn-toggle v-model="toogle_exclusive" multiple class="ml-10">
      <v-btn v-for="item in navitems" :key="item" text>{{
        item.namenav
      }}</v-btn>
    </v-btn-toggle>
    <v-spacer></v-spacer>
    <v-list-item-avatar>
      <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
    </v-list-item-avatar>
  </v-row>
</template>
<script>
export default {
  name: "NavHeaderBtn",
  data: () => ({
    navitems: [
      { namenav: "Learning content" },
      { namenav: "Assigniment feedback" },
      { namenav: "Online games" },
    ],
  }),
};
</script>