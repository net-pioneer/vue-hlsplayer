import '@/assets/styles/main.scss';
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from "@/composables/i18n.js";
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
import useRequest from "@/composables/useRequest";
const request = useRequest;
const req = new request.Request();
app.provide<useRequest.Request>("http", req);
app.use(pinia)

app.use(router)
app.use(i18n);
app.mount('#app')
