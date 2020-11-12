<template>
    <div>
         Counter is: {{counter}}
        <p>
            DoubleCounter is {{doubleCounter}}
        </p>
    </div>
</template>

<script>
    import {createNamespacedHelpers,} from "vuex";
    import {counterModule} from "../store/counter";
    import {DOUBLE_COUNTER} from "../store/counter/types";

    const{mapGetters, mapState} = createNamespacedHelpers(counterModule);

    export default {
        name: "Result",
       // props:['counter']
        computed:{
            ...mapGetters({
                counter: 'counter',
                doubleCounter: DOUBLE_COUNTER
            }),
            ...mapState({
                counter: store => store.counter
            })
            // counter(){
            //     //return this.$store.state.counter;
            // },
            // doubleCounter(){
            //     return this.$store.getters.doubleCounter
            // }
        }
    }
</script>

<style scoped>

</style>
