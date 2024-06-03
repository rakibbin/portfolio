import MainContent from '@/components/MainContent.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioView,
      children:[
        {
      path: '/',
      name: 'content',
      component: MainContent
    }
      ]
    },
    
    
  ]
})

export default router
