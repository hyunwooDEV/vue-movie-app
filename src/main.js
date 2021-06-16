import { createApp } from 'vue'
import App from './App'
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'
//인덱스라는 파일명은 생략가능
createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) //$loadImage
  .mount('#app')