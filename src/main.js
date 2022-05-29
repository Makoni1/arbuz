import { createApp } from 'vue';
import App from './App.vue'; 
import Vue from 'vue'
import store from './vuex/store'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App);
app.component('Datepicker', Datepicker);
app.mount('#app');

createApp(App).mount('#app');
new Vue({
    render: h => h(App),
    store,
  }).$mount('#app')

