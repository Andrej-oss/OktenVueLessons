<template>
    <div>
        {{tittle | toLowerCase}}
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        name: "Header",
        data(){
            return{
                tittle: "Header"
            }
        },
        created() {
            eventBus.$on('changeTittle', (value) => this.tittle = value);
        }
    }
</script>

<style scoped>

</style>
