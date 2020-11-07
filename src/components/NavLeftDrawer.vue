<template>
  <v-navigation-drawer app clipped>
    <v-list>
      <v-list-item v-for="items in leftnav" :key="items" :to="{ path: '/' + items.linkto }">
        <v-list-item-content>
          <v-list-item-title>{{ items.pagename }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavLeftDrawer",
  data: () => ({
    leftnav: [
      { pagename: "Search Tools", linkto: "searchtools" },
      { pagename: "Teacher", linkto: "teacherview" },
    ],
  }),
};
</script>