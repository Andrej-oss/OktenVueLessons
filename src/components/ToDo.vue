<template>
    <div>
    <form :id="form.id" :fields="form.fields" class="form">
        <div class="form-group">
            <label >Tittle</label>
            <input type="text" class="form-control"  v-model="form.fields.type">
        </div>
        <div class="form-group">
            <label >What toDo</label>
            <input type="text" class="form-control"   v-model="form.fields.name">
        </div>
        <button type="submit" class="btn btn-primary" @click="onSave(form, $event)">Submit</button>
    </form>

        <template v-if="toDoes.length" >
            <div class="todo-cards">
            <div v-for="(todo, i) in toDoes" :key="i" >
    <div class="todo">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{todo.tittle}}</h5>
                    <p class="card-text">{{todo.todo}}</p>
                    <a href="#" class="btn btn-primary" @click="onDelete(i)">Delete</a>
                </div>
        </div>
    </div>
            </div>
            </div>
        </template>
    </div>
</template>

<script>

    import {FormField} from "@asigloo/vue-dynamic-forms/src/core/utils";

    export default {
        name: "ToDo",
        data() {
            return {
                toDoes: [{tittle: "First", todo: "todo with example"}],
                form: {
                    id: 'test-form',
                    fields:
                        new FormField({
                            type: 'text',
                            name: 'name',
                        }),
                }
            }
        },
        methods: {
            onSave(form, e) {
                e.preventDefault();
                console.log(form.fields.name, form.fields.type);
                 this.toDoes.push({tittle: form.fields.type, todo: form.fields.name });
                console.log(this.toDoes)
            },
            onDelete(i){
                this.toDoes.pop(i);
            }
        }
    }
</script>

<style scoped>
.form{
    width: 600px;
    height: 300px;
    border: black solid 1px;
    border-radius: 5%;
    margin-left: 400px;
}
    .todo{
        width: 400px;
        height: 200px;
        margin: 10px 10px 10px 10px;
    }
    .todo-cards{
        display: flex;
        flex-wrap: wrap;
    }
</style>
