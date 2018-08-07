<template>
<div>
  <h5 v-if="stocks.length==0">Whoops, no stocks in your portfolio.</h5>
  <div class="alert alert-dismissible" :class="errorMsg.type" role="alert" v-if="showAlert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>{{errorMsg.prefix}}</strong> {{errorMsg.message}}
  </div>
  <app-stock class="col-sm-6" v-for="stock in stocks" :stock="stock" @alert="alert"></app-stock>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {
  data(){
    return{
      showAlert: false,
      errorMsg: {
        type: 'alert-warning',
        prefix: 'Warning',
        message: 'Testing'
      }
    }
  },
  computed: {
    ...mapGetters({
      stocks: 'portfolio'
    })
  },
  components: {
    appStock: Stock
  },
  methods: {
    alert(obj){
      this.showAlert = true;
      this.errorMsg = Object.assign(obj);
      setTimeout(()=>{
        this.showAlert = false;
      }, 3000);
    }
  }
}
</script>
