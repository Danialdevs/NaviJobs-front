import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld'

const routes = [
  { path: '/', component: HelloWorld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
