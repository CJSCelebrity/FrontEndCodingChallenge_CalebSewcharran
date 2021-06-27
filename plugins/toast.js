import Vue from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

Vue.use(Toast, {
  transition: 'Vue-Toastification__fade',
  iconClass: 'mdi/font',
  iconTag: 'span',
  timeout: 2500,
  showCloseButtonOnHover: true,
})
