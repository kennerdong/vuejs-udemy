<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Add Me!</button>
    <p>Counts: {{counter}}</p>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      counter: 0
    }
  },
  destroyed(){
    // alert("Destroyed!");
  }
}
</script>

<style scoped>
</style>