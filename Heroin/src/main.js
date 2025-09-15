import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

createApp(App).mount('#app').component('font-awesome-icon', FontAwesomeIcon).mount('#app')
