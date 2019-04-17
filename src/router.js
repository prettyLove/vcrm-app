import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from './views/Home.vue';
import index from './views/index.vue';
import clue from './views/clue.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", name: "login",component: Login},
        {path: "/home",name: "home",component: Home},
        {path:"/index", name:"index",component:index},
        {path:"/clue",name:"clue",component:clue},
    ]
});
