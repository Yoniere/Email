import { router } from './router.js';
import appFooter from './cmps/app-footer.cmp.js';
import appHeader from './cmps/app-header.cmp.js';


const options = {
    template: `

         <app-header />
      
         <router-view />
            <app-footer />
    `,
    components: {
        appHeader,
        appFooter,

    }
};

const app = Vue.createApp(options);
app.use(router);
app.mount('#app');

