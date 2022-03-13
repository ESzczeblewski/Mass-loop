import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store'
import i18n from './i18n'

// createApp(App).mount('#app')

const app = createApp(App).use(i18n)

app.use(store)

app.mount('#app')


