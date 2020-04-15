import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Terms from "@/views/Terms";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/terms",
        name: "terms",
        component: Terms
    },
    {
        path: '*',
        name: 'Certificate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Certificate')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
