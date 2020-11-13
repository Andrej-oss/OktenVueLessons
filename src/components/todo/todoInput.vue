<template>
    <div>
        <form :id="form.id" :fields="form.fields" class="form">
            <div class="form-group">
                <label >Tittle</label>
                <input type="text" class="form-control"
                       v-model="form.fields.type" style="margin: 10px 10px 10px 50px;width: 500px"/>
            </div>
            <div class="form-group">
                <label >What toDo</label>
                <input type="text" class="form-control"
                       v-model="form.fields.name" style="margin: 10px 10px 10px 50px; width: 500px" />
            </div>
            <div class="form-group">
                <label >completed</label>
                <input type="checkbox"
                       v-model="form.fields.checked" />
            </div>
            <button type="submit"
                    class="btn btn-primary"
                    @click="onSave(form, $event)"
                    style="margin-right: 10px">Create</button>
            <button type="submit"
                    class="btn btn-primary"
                    @click="onUpdateToDO({id:`${todos[index].id}`, body: {tittle:form.fields.type, name: form.fields.name, completed: form.fields.checked}})">
                Update</button>
        </form>
    </div>
</template>

<script>
    import {FormField} from "@asigloo/vue-dynamic-forms/src/core/utils";
    import {eventBus} from "../../main";
    import {todoModule} from "../../store/todo";
    import {createNamespacedHelpers} from "vuex";
    import {ACTIONS_UPDATE_TODO} from "../../store/todo/types";

    const {mapActions} = createNamespacedHelpers(todoModule);

    export default {
        name: "todoInput",
        data() {
            return {
                index: Number,
                form: {
                    id: 'formField',
                    fields: new FormField({
                        type: 'text',
                        name: 'name',
                        checked: false,
                    })
                }
            }
        },
        methods: {
            onSave(form, event) {
                event.preventDefault();
                console.log(form);
                this.$emit('handlingSubmit', {
                    tittle: form.fields.type,
                    name: form.fields.name,
                    completed: form.fields.checked
                });

            },
            ...mapActions({
                onUpdateToDO: ACTIONS_UPDATE_TODO
            }),
        },
        props: {
            todos: {
                type: Array,
                default: null
            }
        },
        beforeCreate() {
            eventBus.$on('HandlingIndexUpDate', (value) => {
                this.form.fields.type = this.todos[value].tittle;
                this.form.fields.name = this.todos[value].name;
                this.form.fields.checked = this.todos[value].completed;
                this.index = value;

                console.log(value)
            })
        },
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
</style>
