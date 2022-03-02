import homePage from './views/home-page.cmp.js';
import noteInd from './apps/keep/pages/note-index.cmp.js';
import mailApp from './apps/mail/mail-app.cmp.js';


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
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
    // {
    //     path: '/book-add',
    //     component: addBook
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});