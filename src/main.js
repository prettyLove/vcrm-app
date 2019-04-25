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
import {Row,Cell, CellGroup,Lazyload } from 'vant';
Vue.use(Dialog)
   .use(Toast)
   .use(Lazyload);
Vue.use(Cell).use(CellGroup);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
