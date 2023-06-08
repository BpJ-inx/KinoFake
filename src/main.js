import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import './assets/styles/index.scss'
import router from './router/router'
import store from './store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)

})

app
    .use(store)
    .use(router)
    .mount('#app')



