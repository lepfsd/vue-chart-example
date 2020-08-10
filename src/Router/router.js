import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login  from '../components/Login.vue'
import Home  from '../components/Home.vue'
import Signup  from '../components/Signup.vue'
import Credit  from '../components/Credit.vue'
import Withdraw  from '../components/Withdraw.vue'
import Transactions  from '../components/Transactions.vue'
import Payments  from '../components/Payments.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/signup', component: Signup },
    { path: '/credit', component: Credit },
    { path: '/debit', component: Withdraw },
    { path: '/transactions', component: Transactions },
    { path: '/payment', component: Payments },
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

export default router