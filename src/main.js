//CSS
import './assets/styles/reset.css'
import './assets/styles/style.scss'

// main.js
import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router' // ルーターをインポート

const app = createApp(App)
app.use(router) // ルーターを使わせる
app.mount('#app') // マウント
