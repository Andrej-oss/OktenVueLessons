<template>
    <div>
        <div class="todo">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{todo.tittle}}</h5>
                    <p class="card-text">{{todo.name}}</p>
                    <p v-if="todo.completed" style="font-size: small">Completed</p>
                    <p v-else style="font-size: small">Not Completed</p>
                    <a href="#" class="btn btn-primary" @click="onDelete({id:todo.id, i: index})" style="margin-right: 10px">Delete</a>
                    <a href="#" class="btn btn-primary" @click="onUpdate(index)">Update</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {eventBus} from "../../main";
    import {todoModule} from "../../store/todo";
    import {createNamespacedHelpers} from "vuex";
    import {ACTIONS_DELETE_TODO} from "../../store/todo/types";

    const{mapActions} = createNamespacedHelpers(todoModule);

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
            onUpdate(i){
                console.log(i)
               eventBus.$emit('HandlingIndexUpDate', i);
            },
            ...mapActions({
                onDelete: ACTIONS_DELETE_TODO
            })
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
