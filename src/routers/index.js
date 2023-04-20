import Vue from 'vue';
import Router from 'vue-router';
import TestPage from '@/pages/TestPage.vue';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import AboutUs from '@/pages/AboutUsPage.vue';
import NewPage from '@/pages/NewPage.vue';
Vue.use(Router)

export default new Router({
    mode: 'history', // sử dụng url để giả lập 1 đường kink để tránh trang bị load lại
    routes: [ // bao gồm danh sách route
        {
            path: '/test', ///path của route
            name: 'TestPage', // tên route
            component: TestPage // component route sử dụng
        },
        {
            path: '/home',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/register',
            name: 'RegisterPage',
            component: RegisterPage
        },
        {
            path: '/about',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/new',
            name: 'NewPage',
            component: NewPage
        },

    ]
})