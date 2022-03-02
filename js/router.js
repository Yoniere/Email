// import bookApp from './views/book-app.cmp.js';
import homePage from './views/home-page.cmp.js';
import noteInd from './apps/keep/pages/note-index.cmp.js';


const routes = [
    {
        path: '/',
        component: homePage
    },

    {
        path: '/note-index',
        component: noteInd,
    },

    // {
    //     path: '/book',
    //     component: bookApp
    // },
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