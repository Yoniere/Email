
export default {
    template: `
          <section >
          <video width="320" height="240" ref="videoPlayer">
    <source
      src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
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
        }

    },
};

