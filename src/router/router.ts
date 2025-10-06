import { createRouter,createWebHistory } from "vue-router";
import login from "@/component/login/login.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/chatpage',
        name: 'chatpage',
        component: () => import('@/component/chatpage_page/chatpage.vue')
    }
    ,{
        path: '/shopping',
        name: 'shopping',
        component: () => import('@/component/shopping_page/shopping.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
    ],
})
export default routes;