import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/technik',
    name: 'Technik',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technik.vue'),
  },
  {
    path: '/buecher',
    name: 'Buecher',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buecher.vue'),
  },
  {
    path: '/sport',
    name: 'Sport',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sport.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
