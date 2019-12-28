<template>
  <div class="bug container-fluid">
    bug view here
    {{ bug }}
    <h1>Notes:</h1>
    <notes />
  </div>
</template>

<script>
import Notes from "../components/Notes";
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  components: {
    Notes
  }
};
</script>

<style></style>
