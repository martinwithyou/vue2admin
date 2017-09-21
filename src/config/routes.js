/**
 * Created by lichb on 2017/1/24.
 */


/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/',
    meta: {auth: false},
    component: resolve => require(['../modules/index/'], resolve)
  },
  {
    path: '/login',
    meta: {auth: false},
    component: resolve => require(['../modules/login/'], resolve)
  },
  {
    path: '/home',
    meta: {auth: true},
    component: resolve => require(['../modules/home/'], resolve),
    children: [
      {
        path: 'page1',
        meta: {auth: true},
        component: resolve => require(['../modules/page1/'], resolve)
      },
      {
        path: 'page2',
        meta: {auth: true},
        component: resolve => require(['../modules/page2/'], resolve)
      },
      {
        path: 'demoPage',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage/'], resolve)
      },
       {
        path: 'page4',
        meta: {auth: true},
        component: resolve => require(['../modules/page4/'], resolve)
      },
      {
        path: 'demoPage_a',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_a/'], resolve)
      },
      {
        path: 'demoPage_b',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_b/'], resolve)
      },
      {
        path: 'demoPage_c',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_c/'], resolve)
      },
      {
        path: 'demoPage_d',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_d/'], resolve)
      },
      {
        path: 'demoPage_e',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_e/'], resolve)
      },
      {
        path: 'demoPage_f',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_f/'], resolve)
      },
      {
        path: 'demoPage_g',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_g/'], resolve)
      },
      {
        path: 'demoPage_h',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_h/'], resolve)
      },
      {
        path: 'demoPage_i',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_i/'], resolve)
      },
      {
      	path: 'demoPage_j',
        meta: {auth: true},
        component: resolve => require(['../modules/demoPage_j/'], resolve)
      }
    ]
  },
  {
    path: '*',
    meta: {auth: false},
    component: resolve => require(['../modules/home/'], resolve)
  },
]
