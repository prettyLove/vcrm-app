import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
//import 'amfe-flexible/index';
import 'lib-flexible/flexible.js'
import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
import {Dialog, Toast} from 'vant';
Vue.use(Dialog)
   .use(Toast);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
