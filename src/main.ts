import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import AxiosPlugin from 'vue-axios-cors';

import App from './App.vue'
// import router from './router'

import Header from './components/HeaderNav.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


// Add all solid icons to the library
library.add(fas);


const app = createApp(App)

app.use(createPinia())
// app.use(AxiosPlugin)
// app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('HeaderNav',Header);

app.mount('#app')