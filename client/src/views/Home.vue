<template>
  <div class="home container">
    <div class="row">
      <div class="col-6">
        <H2>Current Bugs</H2>
      </div>
      <div class="col-6">
        <p type="checkbox">Hide Closed</p>
      </div>
    </div>
    <div class="row">
      <div class="col-9 table-responsive">
        <table class="table table-striped table-sm ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Reported By</th>
              <th>Status</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-model="newBug.title" type="text" id="title" required></td>
              <td v-model="newBug.reportedBy"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  mounted() {
    // debugger;
    this.$store.dispatch("getAllBugs");
  },
  data() {
    return {
      newBug: {
        title: "",
        reportedBy: "",
        closed: Boolean,
        description: ""
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        title: "",
        reportedBy: "",
        closed: Boolean,
        description: ""
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  }
};
</script>
