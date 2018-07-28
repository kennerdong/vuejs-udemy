<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <button @click="resetName">Reset Name To Anne</button>
        <button @click="resetNameFn">Reset Name To Ken</button>
    </div>
</template>

<script>
export default {
	props: {
		username: {
            String,
            // required: true,
            default: 'Anonymous'
        },
        resetNameFn: Function
	},
	methods: {
		switchName() {
			return this.username
				.split('')
				.reverse()
				.join('')
        },
        resetName(){
            this.username = "Anne";
            this.$emit('usernameReset', this.username);
        }
	}
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
