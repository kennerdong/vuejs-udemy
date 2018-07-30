<template>
    <div class="container">
        <progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></progress-bar>
        <new-quote @quoteAdded="newQuote"></new-quote>
        <quotes-grid :quotes="quotes"></quotes-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to Delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuotesGrid from './components/QuotesGrid.vue'
import NewQuote from './components/NewQuote.vue'
import ProgressBar from './components/Header.vue'

export default {
	data: function() {
		return {
			quotes: ['Initial quote'],
			maxQuotes: 10
		}
	},
	methods: {
		newQuote(quote) {
			if (this.quotes.length >= this.maxQuotes) {
				return alert('Max quotes reached!')
			}
			this.quotes.push(quote)
		}
	},
	components: {
		QuotesGrid,
		NewQuote,
		ProgressBar
	}
}
</script>

<style>
</style>
