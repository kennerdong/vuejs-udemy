<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h2>{{text | toLowerCase| toUpperCase}}</h2>
                <hr>
				<button @click="fruits.push('Berry')">Add New Item</button>
                <input type="text" v-model="filteredText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue';
import {fruitMixin} from './fruitMixin';
export default {
	mixins: [fruitMixin],
	data() {
		return {
			text: 'Hello there!',
			// fruits: ['apple', 'orange', 'mango', 'durian'],
			// filteredText: ''
		}
	},
	filters: {
		toUpperCase(value) {
			return value.toUpperCase()
		}
	},
	// computed: {
	// 	filteredFruits() {
	// 		return this.fruits.filter(element => {
	// 			return element.match(this.filteredText)
	// 		})
	// 	}
	// },
	components: {
		appList: List
	}
}
</script>

<style>
</style>
