<template>
  <div>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" class="form-control" :value="firstName" @input="inputChanged">
    </div>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" class="form-control" :value="lastName" @input="inputChanged">
    </div>
  </div>
</template>

<script>
  export default{
    props: ['value'],
    methods: {
      inputChanged(event){
        let input = event.target.value;
        let name = event.target.id == "firstname"? 
        `${input} ${this.lastName}`:
        `${this.firstName} ${input}`
        this.value = name
        this.$emit('input', this.value);
      }
    },
    computed:{
      firstName(){
        return this.value.split(" ")[0];
      },
      lastName(){
        return this.value.split(" ")[1];
      }
    }
  }
</script>