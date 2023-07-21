import { createRouter, createWebHistory } from 'vue-router'

const routes =[

    {path: '/', name: 'default', component: ()=> import('../views/TestArea.vue')},



]


const router = createRouter({
    routes,
    history: createWebHistory(),
})



export default router