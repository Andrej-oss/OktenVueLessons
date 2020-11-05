<template>
    <div>
<h1 v-height-light="'red'">
    Frame Work
</h1>
        <p>{{props.tittle}}</p>
        <p>{{props.completed}}</p>
        <p>{{props.difficult}}</p>
        <button @click="onComplete">Complete</button>
        <button @click="changeTittle">Change</button>
    </div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        name: "FrameWork",
        props:{
            props: {
                type: Object,
             default: null
            }
        },
        methods:{
            onComplete(){
                this.props.completed = !this.props.completed;
            },
            changeTittle(){
                const newTittle = 'new framework list';
                //this.$emit('changeTittle', newTittle)
                eventBus.$emit('changeTittle', newTittle)
            }
        }
    }
</script>

<style scoped>

</style>
