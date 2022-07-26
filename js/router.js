import homePage from './views/home-page.cmp.js';
import mailApp from './apps/mail/mail-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';

const routes = [{
    path: '/',
    component: homePage
},

{
    path: '/mail',
    component: mailApp
},
{
    path: '/mail/:mailId',
    component: mailDetails
},
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});