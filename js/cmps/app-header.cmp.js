export default {
    template: `
        <header class="app-header app-main">
           
                <h3>main app</h3>

                <nav class="nav-bar-header">
                <router-link to="/">Home</router-link> |
                <!-- <router-link to="/about">About</router-link>| -->
                <router-link to="/note-index">Keep</router-link> |
                <router-link to="/mail">Mail</router-link> |
               
            </nav>
               
        </header>
    
    `
}