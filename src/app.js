import store from './store.js';

new Vue({
    el: '#app',

    store: new Vuex.Store(store)
});