<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <app-nav-bar></app-nav-bar>
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
          </div>
      </div>
    </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  
  export default {
    components: {
      appNavBar: NavBar
    },
    created(){
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
body{
  padding-top: 30px;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.slide-enter-active, .slide-leave-active{
  transition: all .5s ease;
}

.slide-leave-active{
}

.slide-leave{
}
</style>
