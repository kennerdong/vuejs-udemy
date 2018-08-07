<template>
<div class="col-sm-6 col-md-4">
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="panel-title">{{this.stock.name}} <small>(Price: {{this.stock.price}} | Quantity: {{this.stock.quantity}})</small></h3>
    </div>
    <div class="panel-body">
      <div class="pull-left">
        <input class="form-control"
        type="number"
        placeholder="quantity"
        v-model.number="quantity"
        min=0
        :class="{danger: insufficientQuantity}">
      </div>
      <div class="pull-right">
        <button 
        class="btn btn-success pull-right"
        @click="sellStock"
        :disabled="quantity<=0 || !Number.isInteger(quantity)"
        >Sell</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props: ['stock'],
  data(){
    return {
      quantity: 0,
    }
  },
  computed:{
    insufficientQuantity(){
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock(){
      if(this.quantity > this.stock.quantity){
        this.$emit('alert', {
          type: 'alert-warning',
          prefix: 'ERROR:',
          message: 'Order exceeds available quantity.'
        });
        return;
      }
      const order = {
        id: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      // this.$store.dispatch('sellStock', order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>
.danger{
  border: solid 1px red
}
</style>
