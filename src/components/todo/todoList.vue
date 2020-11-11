<template>
    <div>
        <todo-input @handlingSubmit="createTodo" :todos="toDoes" />
        <div class="todo-cards">
        <div v-for="(todo, i) in toDoes" :key="todo.id">
            <todo-item
                    :todo="todo"
                    :index="i"
                    @HandlingIndexDelete="deleteTodo(todo.id)"
            />
        </div>
    </div>
    </div>
</template>

<script>

    import todoItem from "./todoItem";
    import todoInput from "./todoInput";
    import {Api} from "../api";

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
            async createTodo(event){
               // this.toDoes.push(event);
                await Api.toDo.createTodo(event);
               this.getTodo();
            },
            async deleteTodo(i){
               await Api.toDo.deleteTodo(i);
                this.getTodo();
            },
            async getTodo(){
                const todoArray = [];
                const result =  await Api.toDo.getAllTodo();
                Object.entries(result.body).forEach(([key, value]) => todoArray.push({id: key,...value}));
                this.toDoes = todoArray;
                console.log(result.body, todoArray)
            }
        },
        async beforeMount() {
           await this.getTodo();
        }
    }
</script>
<style scoped>
    .todo-cards{
        display: flex;
        flex-wrap: wrap;
    }
</style>
