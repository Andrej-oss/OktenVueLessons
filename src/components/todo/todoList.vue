<template>
    <div>
        <todo-input @handlingSubmit="saveToDo($event)"  :todos="toDoes"/>
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
    import {todoModule} from "../../store/todo";
    import {createNamespacedHelpers} from "vuex";
    import { ACTIONS_GET_ALL_TODO, ACTIONS_SAVE_TODO} from "../../store/todo/types";


    const {mapActions, mapState} = createNamespacedHelpers(todoModule);

    export default {
        name: "todoList",
        components: {
            todoItem,
            todoInput
        },
        methods: {

            get() {
            },
            ...mapActions({
                getToDos: ACTIONS_GET_ALL_TODO,
                saveToDo: ACTIONS_SAVE_TODO,
            })
        },
        computed: {
            ...mapState({
                toDoes: state => state.todo
            }),
        },
        beforeMount() {
            this.getToDos()
        },
    }
</script>
<style scoped>
    .todo-cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>
