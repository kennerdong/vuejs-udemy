<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name To Anne</button>
        <button @click="resetNameFn">Reset Name To Ken</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default {
	props: {
		username: {
            String,
            // required: true,
            default: 'Anonymous'
        },
        resetNameFn: Function,
        userAge: Number
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
    },
    created() {
        eventBus.$on('ageEdited', (age)=>{
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
