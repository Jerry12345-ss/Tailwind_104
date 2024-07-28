import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/',
        name : 'Layout',
        component : ()=> import('../components/Layout/Layout.vue'),
        children : [
            {
                path : '',
                name : 'Home',
                component : ()=> import('../page/Home.vue')
            }
        ]
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;