<template>
    <div>
        Users
        <button class="btn-primary" @click="toHome">To Home</button>
        <ul>
            <template v-for="(user, i) in users">
                <router-link tag="li" :to="user.link" :key="i">{{"User" + i}}</router-link>
            </template>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User",
        methods:{
            toHome(){
                this.$router.push('/')
            }
        },
        data(){
            return{
                users: [{link:'/users/1'},{link:'/users/3'}, {link:'/users/2'}]
            }
        }
    }
</script>

<style scoped>

</style>
