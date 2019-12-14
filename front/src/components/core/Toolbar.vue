<template>
  <v-toolbar
    id="core-toolbar"
    app
    flat
    prominent
    style="background: #eee;"
  >
    <div class="v-toolbar-title">
      <v-toolbar-title class="tertiary--text font-weight-light">
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>
    <v-spacer />
    <form
      ref="form"
      method="POST"
      action="/logoutCheck"
    >
      <v-toolbar-items>
        <v-flex
          align-center
          layout
          py-2
        >
          <v-btn
            class="toolbar-items"
            @click="auth"
          >
            <v-icon color="tertiary">
              mdi-airplane-off
            </v-icon>
            <v-list-tile-title style="color:black; margin-left:5px;">
              Logout
            </v-list-tile-title>
          </v-btn>
        </v-flex>
      </v-toolbar-items>
    </form>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    title: "MOCA ADMIN",
    responsive: false
  }),

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onClick() {
      //
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    auth() {
      this.$refs.form.submit();
    }
  }
};
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
