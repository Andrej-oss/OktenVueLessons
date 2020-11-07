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
            <button type="submit" class="btn btn-primary" @click="onSave(form, $event)" style="margin-right: 10px">Create</button>
            <button type="submit" class="btn btn-primary" @click="onUpdate(form, $event)">Update</button>
        </form>
    </div>
</template>

<script>
    import {FormField} from "@asigloo/vue-dynamic-forms/src/core/utils";
    import {eventBus} from "../../main";

    export default {
        name: "todoInput",
        data(){
            return{
                index: Number,
                form:{
                    id: 'formField',
                    fields: new FormField({
                        type: 'text',
                        name: 'name'
                    })
                }
            }
        },
        methods:{
            onSave(form, event){
                event.preventDefault();
                console.log(form);
                this.$emit('handlingSubmit',{tittle:form.fields.type, name: form.fields.name});
            },
            onUpdate(form){
               this.todos.splice(this.index, 1, {tittle:form.fields.type, name: form.fields.name})
            }
        },
        props:{
            todos:{
                type: Array,
                default: null
            }
        },
        created() {
            eventBus.$on('HandlingIndexUpDate', (value) => {
                this.form.fields.type = this.todos[value].tittle;
                this.form.fields.name = this.todos[value].name;
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
