import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main'
import login from '../components/login'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: main
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: login

    }
]

const router = new VueRouter({
    routes
})

export default router