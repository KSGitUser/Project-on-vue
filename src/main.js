import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import * as fb from 'firebase/app' // firebase connect

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCszcNIqcIHvA2eAg3viIBrAHkO4fX-8ro",
      authDomain: "online-store-on-vue.firebaseapp.com",
      databaseURL: "https://online-store-on-vue.firebaseio.com",
      projectId: "online-store-on-vue",
      storageBucket: "online-store-on-vue.appspot.com",
      messagingSenderId: "100773435953",
      appId: "1:100773435953:web:49c67a364ba588a1"
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')