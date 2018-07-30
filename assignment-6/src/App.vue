<template>
    <div class="container">
        <Header></Header>
        <hr>
        <ServerContainer></ServerContainer>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
import Vue from 'vue'
export const store = new Vue({
	data: {
		servers: [
			{ serverId: 1, serverStatus: 'Normal' },
			{ serverId: 2, serverStatus: 'Critical' },
			{ serverId: 3, serverStatus: 'Offline' },
			{ serverId: 4, serverStatus: 'Normal' }
		]
	},
	methods: {
		showDetails(server) {
			this.$emit('serverChanged', server)
		},
		changeStatus(serverId) {
			let server = this.servers.find((server) => {
				return server.serverId === serverId;
            });
            server.serverStatus = "Offline";
            // this.showDetails(server);
		}
	}
})
</script>

<style>
</style>
