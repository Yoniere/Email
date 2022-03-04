export default {
    template: `
        <header class="app-header app-main-layout flex justify-content">
           
                <div class="logo bold">Appsus</div>

                <nav class="nav-bar-header">
                <router-link to="/">Home</router-link> 
                <!-- <router-link to="/about">About</router-link>| -->
                <router-link to="/note-index">MissKeep</router-link> 
                <router-link to="/mail">MisterEmail</router-link>
               
            </nav>
               
        </header>
    
    `
}