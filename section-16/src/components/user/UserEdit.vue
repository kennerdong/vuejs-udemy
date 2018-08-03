<template>
<div>
    <h3>Edit the User</h3>
    <p>User ID: {{$route.params.id}}</p>
    <p>Locale: {{$route.query.locale}}</p>
    <p>q: {{$route.query.q}}</p>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px;"></div>
    <p id="data">Some data</p>
</div>
</template>

<script>
export default {
  data(){
    return {
      confirmed: false
    }
  },
  methods: {

  },
  beforeRouteLeave(to, from, next){
    if(this.confirmed){
      next();
    }
    next(false);
  }
}
</script>
