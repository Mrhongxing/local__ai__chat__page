import { createRouter,createWebHistory } from "vue-router";
import chatpage from "@/chatpage/chatpage.vue";
const routes = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/chatpage',
        name: 'chatpage',
        component: chatpage
    }],
})
export default routes;