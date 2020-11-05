<template>
    <div>
        <Header/>
        <p>{{tittle}}</p>
        <div v-for="(framework, i) in frameworks" :key="i">
            {{framework.tittle}}
            {{framework.completed}}
            {{framework.difficult}}
            <FrameWork :props="framework" @changeTittle="onChange"/>
        </div>
    </div>
</template>

<script>
    import FrameWork from "./FrameWork";
    import Header from "../Header";
    import {frameworkMixin} from "../mixins/frameworkMixin";

    export default {
        name: "FrameWorkList",
        components:{
            FrameWork,
            Header
        },
        mixins: [
            frameworkMixin
        ]

    }
</script>

<style scoped>

</style>
