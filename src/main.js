import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faWineGlass, faWineBottle } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faWineGlass, faWineBottle)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

