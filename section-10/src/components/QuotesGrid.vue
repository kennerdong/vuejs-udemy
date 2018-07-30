<template>
  <div class="row">
    <Quotes v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">
      <p>{{quote}}</p>
    </Quotes>
  </div>
</template>

<script>
import Quotes from './Quotes.vue'
export default {
  props: ['quotes'],
  methods: {
    deleteQuote(index){
      this.quotes.splice(index, 1);
    }
  },
  components:{
    Quotes
  }
}
</script>

<style scoped>

</style>


