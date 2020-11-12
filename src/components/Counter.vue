<template>
    <div>
        <button @click="onInc(1)" class="btn-primary">Increment</button>
        <button @click="onDec(-1)" class="btn-primary">Decrement</button>
        <button class="btn-primary" @click="incrementAction(3)">Increment Action</button>
        <button class="btn-primary" @click="decrementAction(6)">Decrement Action</button>
        <button class="btn-primary" @click="decrement">Action</button>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    import {counterModule} from "../store/counter";
    import {DECREMENT, DECREMENT_ACTION, INCREMENT, INCREMENT_ACTION} from "../store/counter/types";

    const {mapMutations, mapActions} = createNamespacedHelpers(counterModule);

    export default {
        name: "Counter",
        methods:{
            ...mapMutations({
                onInc: INCREMENT,
                onDec: DECREMENT
            }),
            ...mapActions({
                incrementAction: INCREMENT_ACTION,
                decrementAction: DECREMENT_ACTION
            }),
            decrement(){
                this.decrementAction(7880);
            }
          /*  incrementAction(value){
                this.$store.dispatch('incrementAction', value)
            },
            decrementAction(value){
                this.$store.dispatch('decrementAction', value)
            }*/
           /* onInc(){
                //this.$emit('update', 1)
                //this.$store.state.counter++
                this.$store.commit('increment')
            },
            onDec(){
                // this.$emit('update', -1)
                //this.$store.state.counter++
                this.$store.commit('decrement')
            }*/
        }
    }
</script>

<style scoped>

</style>
