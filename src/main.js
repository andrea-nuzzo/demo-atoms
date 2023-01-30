import { createApp } from 'vue'
import routes from './routes'
import store from './store'
import App from './App.vue'

import './css/style.css'

const app = createApp(App)
app.use(routes)
app.use(store)
app.mount('#app')
