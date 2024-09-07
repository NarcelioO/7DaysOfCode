import HomeView from '../Views/HomeView.vue'
import NotFound from '../Views/NotFound.vue'
import AboutView from '../Views/AboutView.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/' ,
        name:'Home',
        component:HomeView
    },
    {
        path:'/about' , 
        name:'About',
        component:AboutView
    },
    {path:'/*', component:NotFound}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router