<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <appQuote>
                    <!-- <h2>Another Wonderful Quote!!!!</h2> -->
                    <h2 slot="title">{{quoteTitle}}</h2>
                    <q slot="content">Thou shall not kill</q>
                </appQuote>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
export default {
    data: function(){
        return({
            quoteTitle: 'Another Wonderful Quote'
        })
    },
	components: {
		appQuote: Quote
	}
}
</script>

<style scoped>
    h2{
        color:blue;
    }
</style>
