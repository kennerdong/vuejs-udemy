<template>
<div>
  <div class="panel panel-default panel-body">
    <h1>Trade or View your Portfolio</h1>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <br><br>
    <h5>Your Funds: {{funds | currency}}</h5>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      funds: 'funds'
    })
  },
}
</script>

