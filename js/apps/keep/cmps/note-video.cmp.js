
export default {
    template: `
          <section >
              <input v-model='search' @change='searchSong' type="text">
          <video width="320" height="240" ref="videoPlayer" @change="reportVal">

          <iframe width="420 " height="315 " :src="searchSong"> </iframe>
  <div>
    <button @click="play">play</button>
    <button @click="pause">pause</button>
    <button @click="stop">stop</button>
    <button @click="setSpeed(0.5)">0.5x</button>
    <button @click="setSpeed(1)">1x</button>
    <button @click="setSpeed(1.5)">1.5x</button>
    <button @click="setSpeed(2)">2x</button>
  </div>
          

          </section>
          `,
    props: ["info"],
    data() {
        return {
            search: null,
            val: ''
        };
    },

    name: "App",
    methods: {
        play() {
            this.$refs.videoPlayer.play();
        },
        pause() {
            this.$refs.videoPlayer.pause();
        },
        stop() {
            const { videoPlayer } = this.$refs;
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        },
        setSpeed(speed) {
            this.$refs.videoPlayer.playbackRate = speed;
        },
        change() {

            this.$refs.videoPlayer.src = "https://www.youtube.com/watch?v=nqwQpXoSN7Q";

        },

        reportVal() {
            this.$emit("setVal", this.val);
        },

        searchSong() {
            console.log('this.search', this.search);
            getSongs(this.search).then(song => {
                console.log('song', song);
                // return `https://www.youtube.com/embed/${song}`

            })


        }
    },
};



