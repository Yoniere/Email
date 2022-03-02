
export default {
    template: `
          <section >
          <!-- <select v-model="val" @change="reportVal">  
                    <option v-for="video in info.videos">{{video.url}}</option> -->
                    <video-embed ref="youtube" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>
                    
                <!-- </select> -->
                <button class="btn btn-primary" v-on:click="change">Change Url</button>

          

          </section>
          `,
    props: ["info"],
    data() {
        return {

        };
    },
    methods: {
        change() {

            this.$refs.youtube.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";

        }
    },
    computed: {

    },

};
