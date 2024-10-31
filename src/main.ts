import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// const app = createApp({
//     data(){
//         return {
//             count:0
//         }
//     }
// })
// app.use(createPinia())
// app.use(router)
// app.config.errorHandler = (err) => {
//     console.log("ada")
// }
// app.mount('#app')
