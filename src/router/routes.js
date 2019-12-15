
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Calendar', component: () => import('pages/Calendar.vue')},
      { path: '/PieChartDemo', component: () => import('pages/PieChartDemo.vue')},
      { path: '/TimelineDemo1', component: () => import('pages/TimelineDemo1.vue')},
      { path: '/TimelineDemo2', component: () => import('pages/TimelineDemo2.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
