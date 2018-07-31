<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input type="text" v-model="filteredText">
    <ul>
      <li v-for="fruit in filteredFruits">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			text: 'Hello World!',
			fruits: ['apple', 'orange', 'mango', 'durian'],
			filteredText: ''
		}
	},
	computed: {
		filteredFruits() {
			return this.fruits.filter(element => {
				return element.match(this.filteredText)
			})
		}
	}
}
</script>

<style>
</style>
