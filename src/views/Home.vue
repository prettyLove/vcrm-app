<template>
        <div>
                <div class="roll">
                <router-view></router-view>
                </div>
                <van-tabbar v-model="active">
                    <van-tabbar-item icon="home-o" to="/home/index">CRM</van-tabbar-item>
                    <van-tabbar-item icon="search" dot to="/home/clue">线索</van-tabbar-item>
                    <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
                    <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
                </van-tabbar>
        </div>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vant';

    export default {
        name: "home",
        data() {
            return {
                active: 0
            }
        },
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        }
    }
</script>

<style scoped>
    .box{
        position: relative;height: 100%;
    }
    .roll {
        padding-bottom: 1.3334rem;
    }

</style>