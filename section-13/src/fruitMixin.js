export const fruitMixin = {
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
  },
  created(){
    console.log('Created');
  }
}