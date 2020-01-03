<template>
  <div class="BugDetails container">
    BUG DETAILS view here
    <div class="row">
      <div class="col-12">
        <h5>Title:</h5>
        <h2>{{ bug.title }}</h2>
        <div class="row">
          <div class="col-6">
            <h5>Reported By:</h5>
            <h4>{{ bug.reportedBy }}</h4>
          </div>
          <div class="col-6">
            <h5>Status:</h5>
            <h4>{{ bug.closed }}</h4>
          </div>
          <div class="col-12 ">
            <h5>Bug Description:</h5>
            <p>{{ bug.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button @click="close" class="btn btn-danger">CLOSE</button>
      </div>
    </div>
    <h1>Notes:</h1>
    <!-- <notes /> -->
  </div>
</template>

<script>
  // import Notes from "../components/Notes";
  export default {
    name: "bugdetails",
    // props: [bugData],
    mounted() {
      // this.$store.dispatch("getBugById", this.id);
      // this.$store.dispatch("getNotes",this.id)
    },
    computed: {
      bug() {
        return this.$store.state.activeBug;
      }
    },
    methods: {
      close() {
        this.$store.dispatch("close", this.bug.id);
      }
    },
    components: {}
  };
</script>

<style></style>
