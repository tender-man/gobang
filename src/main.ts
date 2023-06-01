import {createApp} from 'vue'
import {createPinia} from "pinia"
// @ts-ignore
import App from './App.vue'
import "./style/base.less"

createApp(App)
    .use(createPinia())
    .mount('#app')
