<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>Original: {{text}}</p>
                <p>Reversed: {{text | reverse}}</p>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <p>Count length: {{text | countLength}}</p>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>Reversed: {{reversedText}}</p>
                <button @click="text = text.split('').reverse().join('')">Reverse Original Text</button>
                <p>Count length: {{countLength}}</p>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <button @click="text = 'OMG!'">Change original text</button>

            </div>
        </div>
    </div>
</template>

<script>
import {reverseMixin} from './reverseMixin';
export default {
    mixins: [reverseMixin],
	data() {
		return {
			text: 'Reverse Me!',
			filteredText: ''
		}
	},
	filters: {
		reverse(value) {
			return value
				.split('')
				.reverse()
				.join('')
		}
	},
	// computed: {
	// 	reversedText() {
	// 		return (this.filteredText = this.text
	// 			.split('')
	// 			.reverse()
	// 			.join(''))
    //     },
    //     countLength(){
    //         return `(computed) ${this.filteredText} (${this.filteredText.length})`;
    //     }
	// }
}
</script>

<style>
</style>
