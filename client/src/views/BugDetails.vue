<template>
  <div class="BugDetails container">
    <h1>BUG DETAILS</h1>
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
        <button @click="edit" class="btn btn-info">Edit</button>
        <button @click="close" class="btn btn-danger">CLOSE</button>
      </div>
    </div>
    <h3>Notes:</h3>
    <report-note/>
    <notes v-for="note in notes" :key="note.id" :note="note"/>
    
  </div>
</template>

<script>
  import Notes from "@/components/Notes.vue";
  import ReportNote from "@/components/ReportNote.vue";
  export default {
    name: "bugdetails",
    props: ["bugdata"],
    mounted() {
      this.$store.dispatch("getBugById", this.$route.params.id);
      this.$store.dispatch("getNotes", this.$route.params.id);
    },
    computed: {
      bug() {
        return this.$store.state.activeBug;
      },
      notes(){
        return this.$store.state.notes;
      }
    },
    methods: {
      close() {
        swal({
          title: "Are you sure?",
          text: "Once bug is closed you will not be able to edit Bug.",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            this.$store.dispatch("close", this.bug.id);
            swal("Bug has been closed!", {
              icon: "success"
            });
          } else {
            swal("Bug is still open.");
          }
        });

      },
      edit(){

      }
      
    },
    components: {
      Notes,
      ReportNote
    }
  };
</script>

<style></style>
