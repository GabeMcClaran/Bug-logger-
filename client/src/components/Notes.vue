<template>
  <div class="note">
    <h4>
      {{ note.reportedBy }}
    </h4>
    <h4>
      {{ note.content }}
    </h4>
  </div>
</template>

<script>
  export default {
    name: "Notes",
    props: ["note"],
    computed: {},
    data() {
      return {
        note: ""
      };
    },
    methods: {
      makeNote() {
        swal("Write something here:", {
          content: "input"
        }).then(value => {
          swal(`Bug Note: ${value}`);
        });
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
