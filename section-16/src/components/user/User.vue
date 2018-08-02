<template>
<div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded ID: {{id}}</p>
    <button class="btn btn-primary" @click="navigateToHome">Go to home</button>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  /*Method 2: The use of props from id is binded by the router by setting props: true in routes file*/
  props: ['id'],
  data(){
    return{
      /*set params to read id of path*/
      // id: this.$route.params.id
    }
  },
  watch: {
    /*Method 1: watch params to detect change in id of path as data() doesn't re-read once component is loaded once*/
    // '$route'(to, from){
    //   this.id = to.params.id;
    // }
  },
  methods: {
    navigateToHome(){
      this.$router.push('/');
    }
  }
}
</script>
