<template>
  <div class="notes">
    {{ notes }}
  </div>
</template>

<script>
export default {
  name: "Notes",
  mounted() {
    this.$store.dispatch("getAllNotes", this.$route.params.id);
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  data() {
    return {
      note: ""
    };
  },
  methods: {
    makeNote() {
      let note = {
        content: this.note,
        bug: this.$route.params.id
      };
      this.$store.dipatch("makeNote", note);
      this.note = "";
    }
  }
};
</script>

<style></style>
