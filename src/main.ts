import {createApp} from 'vue'
import {createPinia} from "pinia"
// @ts-ignore
import App from './App.vue'

createApp(App).use(createPinia())
    .mount('#app')
