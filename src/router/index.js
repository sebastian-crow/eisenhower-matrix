import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home'
import About from '../views/About'
import Copyright from '../views/Copyright'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/copyright',
        name: 'Copyright',
        component: Copyright
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router