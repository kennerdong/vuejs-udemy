<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ clicks }}</p>
    <p>Value: {{value}}</p>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        // props: ['counter']
        // computed: {
        //   counter(){
        //     return this.$store.getters.doubleCounter;
        //   },
        //   clicks(){
        //     return this.$store.getters.stringCounter;
        //   }
        // }
        computed: {
          ...mapGetters([
          'doubleCounter',
          'stringCounter',
          'value'
        ]),
        clicks(){
            return this.$store.getters.stringCounter;
          }
        }
    }
</script>