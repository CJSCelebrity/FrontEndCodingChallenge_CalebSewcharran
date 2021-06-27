<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title> Coding Challenge Attempt </v-toolbar-title>
      <v-spacer />
      <v-btn-toggle shaped mandatory>
        <v-btn @click="changeTheme"
          ><v-icon>{{
            $vuetify.theme.isDark == true
              ? 'mdi-brightness-5'
              : 'mdi-brightness-3'
          }}</v-icon
          >&nbsp;Change Theme
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
    },
  },
}
</script>
