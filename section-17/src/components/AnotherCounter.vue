<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="updateValue(1000)">Value+</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex';
    export default {
        methods: {
          // ...mapMutations([
          //   'increment',
          //   'decrement'
          // ]),
          ...mapActions([
            'asyncIncrement',
            'asyncDecrement',
            'updateValue'
          ]),
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>