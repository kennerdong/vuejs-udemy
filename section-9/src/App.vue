<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <!-- <appQuote>
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <p slot="subtitle">Passed in subtitle</p>
                    <q>Thou shall not kill</q>
                </appQuote> -->
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Component</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
	data: function() {
		return {
			quoteTitle: 'Another Wonderful Quote',
			selectedComponent: 'appQuote'
		}
	},
	components: {
		appQuote: Quote,
		appAuthor: Author,
		appNew: New
	}
}
</script>

<style scoped>
h2 {
	color: blue;
}
</style>
