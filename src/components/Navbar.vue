<template>
  <div>
    <v-navigation-drawer app temporary></v-navigation-drawer>
    <v-toolbar app dark color="teal lighten-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Online Vue Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>

      <router-view></router-view>

    </v-content>
  </div>
</template>

<script>
  export default {}
</script>