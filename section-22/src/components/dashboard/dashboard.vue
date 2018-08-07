<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{email}}</p> 
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      email: ''
    }
  },
  created(){
    axios.get('/users.json')
    .then(response=>{
      console.log(response);
      const data = response.data;
      const users = [];
      Object.keys(data).map((e)=>{
        const user = data[e];
        user.id = e;
        users.push(user);
        this.email = users[0].email;
        console.log(users);
      });
    })
    .catch(error=>console.log(error));
  }
}
</script>


<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>