<template>
  <div class="reportBug">
    <form @submit.prevent="makeBug" class="reportBug">
      <input
        v-model="reportedBy"
        type="text"
        placeholder="Your Name..."
        required
      />
      <input v-model="title" type="text" placeholder="Bug Name..." required />
      <input
        v-model="description"
        type="text"
        placeholder="Bug Description..."
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "ReportBug",
    data() {
      return {
        reportedBy: "",
        title: "",
        description: ""
      };
    },

    methods: {
      makeBug() {
        let data = {
          reportedBy: this.reportedBy,
          title: this.title,
          description: this.description
        };
        this.$store.dispatch("createBug", data);
      }
    }
  };
</script>
<style></style>
