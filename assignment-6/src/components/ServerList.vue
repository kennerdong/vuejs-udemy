<template>
  <div class="col-xs-12 col-sm-6">{{test}}
    <ul class="list-group">
      <li class="list-group-item" 
        v-for="server in servers"
        :key="server.serverId"
        @click="showDetails(server)"
        >
        Server #{{ server.serverId }}
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../App.vue'
export default {
	data: function() {
		return {
			servers: store.servers
		}
  },
  methods: {
    showDetails(server){
      store.showDetails(server);
    }
  }
}
</script>

<style>
li{
  cursor: pointer;
}
</style>
