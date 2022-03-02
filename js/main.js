import { router } from './router.js';
import appFooter from './cmps/app-footer.cmp.js';
import appHeader from './cmps/app-header.cmp.js';


const options = {
    template: `
<app-header />
    <section>
   <nav>
            <router-link to="/">Home</router-link>  |
            <router-link to="/noteIndex">noteIndex</router-link>
     </nav>
        
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      
    </section>
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

