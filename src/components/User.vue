<template>
    <div>
<p>
    USER!!!!!!!!!!{{this.$route.params.id}}
</p>
<!--        <button @click="onEdit">Edit User</button>-->
        <router-link tag="button" :to="`/users/${$route.params.id}/edit`"> Edit user</router-link>
<router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
               // id: this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>
