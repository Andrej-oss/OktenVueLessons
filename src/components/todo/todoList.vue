<template>
    <div>
        <todo-input @handlingSubmit="createTodo" :todos="toDoes" />
        <div class="todo-cards">
        <div v-for="(todo, i) in toDoes" :key="i">
            <todo-item
                    :todo="todo"
                    :index="i"
                    @HandlingIndexDelete="deleteTodo(i)"
            />
        </div>
    </div>
    </div>
</template>

<script>

    import todoItem from "./todoItem";
    import todoInput from "./todoInput";

    export default {
        name: "todoList",
        components:{
            todoItem,
            todoInput
        },
        data(){
            return{
                updateTodo:{},
                toDoes: [{
                    tittle: 'First',
                    name: 'Make task 2'
                }]
            }
        },
        methods:{
            createTodo(event){
                this.toDoes.push(event);
            },
            deleteTodo(i){
                this.toDoes.splice(i, 1);
            },
        }
    }
</script>
<style scoped>
    .todo-cards{
        display: flex;
        flex-wrap: wrap;
    }
</style>
