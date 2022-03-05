
export default {
    props: ["info"],
    template: `
          <section >
              <datalist :id="listId">
                  <option v-for="opt in info.opts" :value="opt"></option>


                  
              </datalist>
           
                <form >
                <input type="text" v-text="val.title" @change="reportVal" placeholder="Title" :list="listId">
                <input type="text" v-text="val.txt" @change="reportVal" placeholder="Take a note..." :list="listId" required>
                <input type="submit" class="submit-note" @change="reportVal"  :list="listId">
            </form>
           <p> {{val}}</p>
          </section>
          `,
    data() {
        return {
            val: {
                title: '',
                txt: ''
            }
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.val);
            console.log('this.val', this.val);
        }
    },
    computed: {
        listId() {
            console.log('this._uid', this._uid);
            return "list" + this._uid;
        }
    },
    created() {
        console.log('this._uid', this._uid);
        return "list" + this._uid;
    }
};
