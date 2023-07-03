import Main from '../pages/Main.vue'
import MovePage from '../pages/MovePage.vue'
import ResSearchPage from '../pages/ResSearchPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PremieresPage from '../pages/PremieresPage.vue'
import PopNowPage from '../pages/PopNowPage.vue'
import BestFilmsPage from '../pages/BestFilmsPage.vue'
import PersonalPage from '../pages/PersonalPage.vue'

const routes = [
    {
        path: '/',
        component: Main

    },
    {
        path: '/movepage',
        component: MovePage
    },
    {
        path: '/ressearch',
        component: ResSearchPage
    },
    {
        path: '/premieres',
        component: PremieresPage
    },
    {
        path: '/popnow',
        component: PopNowPage
    },
    {
        path: '/bestfilms',
        component: BestFilmsPage
    },
    {
        path: '/personal',
        component: PersonalPage
    },

]

const router = createRouter({
    routes,
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory()
})

export default router;