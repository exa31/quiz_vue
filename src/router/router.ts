import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomePages.vue')
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: () => import('../views/QuizPage.vue')
        },
    ]
})

export default router;