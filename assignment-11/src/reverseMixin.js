export const reverseMixin = {
  data() {
		return {
			text: 'Reverse Me!',
			filteredText: ''
		}
	},
	computed: {
		reversedText() {
			return (this.filteredText = this.text
				.split('')
				.reverse()
				.join(''))
        },
        countLength(){
            return `(computed) ${this.filteredText} (${this.filteredText.length})`;
        }
	}
}