<template>
  <div class="col-xs-12 col-sm-6">
    <!-- <p>Server Details are currently not updated</p> -->
    <div v-if="server">
      <p>Server #{{server.serverId}}<br>Status: {{server.serverStatus}}</p>
    <button @click="changeStatus()">Change Status</button>
      </div>
      <div v-else>
        <p>Please select a server</p>
      </div>
  </div>
</template>

<script>
import {store} from '../App.vue'
export default {
  data: function(){
    return {
      server: undefined
    }
  },
  methods: {
    changeStatus(){
      store.changeStatus(this.server.serverId);
    }
  },
  created(){
    store.$on('serverChanged', (server)=>{
      this.server = server
    })
  }  
}
</script>
