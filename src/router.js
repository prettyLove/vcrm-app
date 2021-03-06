import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from './views/Home.vue';
import index from './views/index.vue';
import clue from './views/clue.vue';
import clue_group from './views/clue_group.vue';
import add_user from './views/add_user.vue';
import user from './views/user.vue';

/**header 组件**/
//import indexHeader from './components/header/indexHeader.vue';

Vue.use(Router);

export default new Router({
    //mode: "history",
    //base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            redirect: '/home/index',
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: index,
                },
                {
                    path: '/home/clue',
                    name: 'clue',
                    component: clue
                },
                {
                    path: 'clue_group',
                    name: 'clue_group',
                    component: clue_group
                },
                {
                    path:'/home/user',
                    name:'user',
                    component:user,
                }
            ]
        },
        {path: "/user", name: "user", component: user},
        {path:'/add_user',name:'add_user',component:add_user},
        // {path:"/clue_group",name:"clue_group",component:clue_group},
    ]
});