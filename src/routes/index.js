import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue')
    },
] 

export default createRouter({
        history: createWebHistory(),
        routes,
    }
)