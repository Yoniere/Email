import homePage from './views/home-page.cmp.js';
import noteInd from './apps/keep/pages/note-index.cmp.js';
import mailApp from './apps/mail/mail-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';


const routes = [{
        path: '/',
        component: homePage
    },

    {
        path: '/note-index',
        component: noteInd,
    },

    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },
    // {
    //     path: '/book-add',
    //     component: addBook
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});