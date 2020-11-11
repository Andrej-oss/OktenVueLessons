import Vue from "vue";

export const Users = {
    createUser: (user) =>  Vue.http.post('user.json', user),
    getUsers: () => Vue.http.get('user.json'),
    deleteUser:(id) => Vue.http.delete(`user/${id}.json`),
    updateUser: (id, user) => Vue.http.put(`user/${id}.json`, user)
}
