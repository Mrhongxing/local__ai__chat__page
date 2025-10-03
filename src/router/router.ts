import { createRouter,createWebHistory } from "vue-router";
import login from "@/component/login/login.vue";
import chatpage from "@/component/chatpage/chatpage.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/chatpage',
        name: 'chatpage',
        component: chatpage
    }
    ,{
        path: '/login',
        name: 'login',
        component: login
    }
    ],
})
export default routes;