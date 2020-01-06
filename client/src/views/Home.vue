<template>
  <div class="home container-fluid">
    <div id="nav">
      <nav class="navbar navbar-light bg-info">
        <span class="navbar-brand mb-0 h1 badge badge-light">Bug Tracker</span>
        <!-- <button id="bugForm" type="submit" class="btn btn-dark">
          Report Bug
        </button> -->
      </nav>
      <report-bug/>
    </div>
    <div class="row">
      <div class="col-6">
        <H2>Current Bugs</H2>
      </div>
      <div class="col-6">
        <p><input type="checkbox" @click="filter()">Hide Closed</p>
      </div>
    </div>
    <div class="row">
      <div class="col-9 table-responsive">
        <table class="table table-striped table-sm ">
          <thead>
            <tr>
              <th>Title</th>
              <th>Reported By</th>
              <th>Closed</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table" v-for="bug in bugs" :key="bug.id" @click="setActive(bug)">
              
              <router-link :to="{name: 'bugdetails', params:{ id: bug.id} }"><td v-model="newBug.title" type="text" id="title" required>
                {{ bug.title }}
              </td>
            </router-link>
              <td
                v-model="newBug.reportedBy"
                type="text"
                id="reportedBy"
                required
              >
                {{ bug.reportedBy }}
              </td>
              <td class="bugStatus" :class="{finished: bug.closed}" v-model="newBug.closed" type="Boolean" id="closed" required>
                {{ bug.closed }}
              </td>
              <td v-model="newBug.closedDate" type="date" id="dateClosed">
                {{ bug.updatedAt }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import ReportBug from "@/components/ReportBug.vue";
  export default {
    name: "home",
        mounted() {
      this.$store.dispatch("getAllBugs");
    },
    data() {
      return {
        newBug: {
          title: "",
          reportedBy: "",
          closed: Boolean,
          description: "",
          closedDate: ""
        }
      };
    },
    
    computed: {
      bugs() {
        return this.$store.state.bugs;
      }
    },
    components: {
      ReportBug
    },
    methods: {
      setActive(bug){
      
        this.$store.dispatch("setActiveBug",bug)
        console.log(bug);
        
      }
    },
    filter(){
      
    }
    
    
    }
    

</script>
<style>
  .bugStatus {
   color: green;
  }
  .finished{
    color: red;
  }
</style>
