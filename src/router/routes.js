
const routes = [
  {
    path: '/',
    component: () => import('layouts/PlainLayout.vue'),
    children: [
      { path: '', name:'landing', component: () => import('pages/Index.vue') },
      {
        path: 'Login',
        name:'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'Register',
        name:'register',
        component: () => import('pages/Register.vue')
      },
      {
        path: 'Contact',
        name:'contact',
        component: () => import('pages/Contact.vue')
      },
      {
        path: 'About',
        name:'about',
        component: () => import('pages/About.vue')
      },
      {
        path: 'Events',
        name:'event',
        component: () => import('pages/Events.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
