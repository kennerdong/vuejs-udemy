<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <router-link to="/" class="navbar-header navbar-brand">Stock Trader</router-link>
      <ul class="nav navbar-nav navbar-left">
        <router-link to="/portfolio" class="nav-item nav-link" tag="li" activeClass="active"><a>Portfolio</a></router-link>
        <router-link to="/stocks" class="nav-item nav-link" tag="li" activeClass="active"><a>Stocks</a></router-link>
      </ul>
      <strong class="navbar-text pull-right">Funds: {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click="endDay">End Day</a></li>
        <li 
          class="dropdown" 
          :class="{open: isDropdownOpen}" 
          @click="isDropdownOpen = !isDropdownOpen">
          <a href="#" 
            class="dropdown-toggle" 
            data-toggle="dropdown" 
            role="button" 
            aria-haspopup="true" 
            aria-expanded="false"
          >Save/Load<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save Data</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data(){
    return{
      isDropdownOpen: false
    }
  },
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'loadPortfolio'
    ]),
    endDay(){
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        myStocks: this.$store.getters.portfolio,
        funds: this.$store.getters.funds,
        stocks: this.$store.getters.stocks

      };
      this.$http.put('', data)
      .then(response=>{
        console.log(response);
      }, errors=>{
        console.log(errors);
      });
    },
    loadData(){
      this.$http.get('')
      .then(response=>{
        this.loadPortfolio(response.body);
      }, errors=>{
        console.log(errors);
      });
    }
  }
}
</script>

<style>

</style>
