<template>
    <pwd v-model="showPwd"></pwd>
</template>

<script>
    import pwd from '../components/pwd'
    export default {
        name: "lock",
        components:{
            pwd
        },
        data(){
            return{
                showPwd:true
            }

        }
    }
</script>

<style scoped>

</style>