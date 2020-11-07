<template>
    <div>
        <div class="todo">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{todo.tittle}}</h5>
                    <p class="card-text">{{todo.name}}</p>
                    <a href="#" class="btn btn-primary" @click="onDelete(index)" style="margin-right: 10px">Delete</a>
                    <a href="#" class="btn btn-primary" @click="onUpdate(index)">Update</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {eventBus} from "../../main";

    export default {
        name: "todoItem",
        props:{
            todo:{
                type: Object,
                default: null
            },
            index:{
                type: Number,
                default: 0
            }
        },
        methods:{
            onDelete(i){
                console.log(i);
                this.$emit('HandlingIndexDelete', i)
            },
            onUpdate(i){
               eventBus.$emit('HandlingIndexUpDate', i);
            }
        }
    }
</script>

<style scoped>
    .todo{
        width: 400px;
        height: 200px;
        margin: 10px 10px 10px 10px;
    }

</style>
