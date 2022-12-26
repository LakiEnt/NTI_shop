
const routes = [
  {
    
    path: '', 
    component: () => import('pages/IndexPage.vue')
    
  },
  {
    path:'/products',
    component:() => import('pages/UserCatalog.vue')
  },
  {
    path:'/cart',
    component:() => import('pages/UserCart.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
