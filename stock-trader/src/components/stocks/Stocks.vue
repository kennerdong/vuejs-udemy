<template>
  <div>
    <div class="row">
      <div class="alert alert-dismissible" :class="errorMsg.type" role="alert" v-if="showAlert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>{{errorMsg.prefix}}</strong> {{errorMsg.message}}
      </div>
      <app-stock class="col-sm-6" v-for="stock in stocks" :stock="stock" @alert="alert">{{stock.name}}</app-stock>
    </div>
  </div>
</template>
<script>
import Stock from './Stock.vue'
export default {
  data(){
    return {
      showAlert: false,
      errorMsg: {
        type: '',
        prefix: '',
        message: ''
      }
    }
  },
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
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
