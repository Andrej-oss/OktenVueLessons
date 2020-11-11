import Vue from 'vue'

export const toDo = {
    createTodo: (todo) => Vue.http.post('todo.json', todo),
    getAllTodo: () => Vue.http.get('todo.json'),
    deleteTodo:(id)=> Vue.http.delete(`todo/${id}.json`),
    upDateTodo: (id, todo) => Vue.http.put(`todo/${id}.json`, todo)
};
