import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/about', component: About
        },
        {
            path: '/contact', component: Contact
        }
    ],
    mode: 'history'
})