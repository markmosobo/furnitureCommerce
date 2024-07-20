import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-bundler.js'

import AppComponent from './components/App.vue'
import router from './router/index'

//imports for css
import "@/assets/libs/slick-carousel/slick/slick.css";
import "@/assets/libs/slick-carousel/slick/slick-theme.css";
import "@/assets/libs/tiny-slider/dist/tiny-slider.css";

import "@/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css";
import "@/assets/libs/feather-webfont/dist/feather-icons.css";
import "@/assets/libs/simplebar/dist/simplebar.min.css";

import "@/assets/css/theme.min.css";

//imports for js
import "@/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/libs/simplebar/dist/simplebar.min.js";

import "@/assets/js/theme.min.js";
import "@/assets/js/vendors/validation.js";

import "@/assets/js/vendors/jquery.min.js";
import "@/assets/js/vendors/countdown.js";
import "@/assets/libs/slick-carousel/slick/slick.min.js";
import "@/assets/js/vendors/slick-slider.js";
import "@/assets/libs/tiny-slider/dist/min/tiny-slider.js";
import "@/assets/js/vendors/tns-slider.js";
import "@/assets/js/vendors/zoom.js";

const app=createApp({
    components: {
        AppComponent
    }
})

app.use(router)
app.mount('#app')