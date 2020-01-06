<template>
  <div class="reportNote">
    <form @submit.prevent="makeNote" class="reportNote">
      <input
        v-model="reportedBy"
        type="text"
        placeholder="Your Name..."
        required
      />
      <input
        v-model="content"
        type="text"
        placeholder="Note Description..."
        required
      />

      <button type="submit">Make Note</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "ReportNote",
    data() {
      return {
        reportedBy: "",
        content: ""
      };
    },
    methods: {
      makeNote() {
        let data = {
          reportedBy: this.reportedBy,
          content: this.content,
          bug: this.$route.params.id
        };
        this.$store.dispatch("createNote", data);
      }
    }
  };
</script>
