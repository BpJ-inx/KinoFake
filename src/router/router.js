import Main from '../pages/Main.vue'
import MovePage from '../pages/MovePage.vue'
import ResSearchPage from '../pages/ResSearchPage.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Premieres from '../pages/Premieres.vue'


const routes = [
    {
        path:'/',
        component:Main

    },
    {
        path:'/movepage',
        component: MovePage
    },
    {
        path:'/ressearch',
        component: ResSearchPage
    },
    {
        path:'/premieres',
        component: Premieres
    },
    
]

const router = createRouter({
    routes,
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory()
})

export default router;