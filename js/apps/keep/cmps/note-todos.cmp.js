
export default {
    template: `
          <section >
              <datalist :id="listId">
                  <option v-for="todo in info.todos" :value="opt"></option>
              </datalist>
              <label>
                  <input type="text" v-model="val" @change="reportVal" :list="listId" />
                  
                </label>  
           <p> {{val}}</p>    
          </section>
          `,
    props: ["info"],
    data() {
        return {
            newTodos: []
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.val);
            console.log('this.val', this.val);
        },
    },
    computed: {
        listId() {
            return "list" + this._uid;
        }
    },
    created() {
        return "list" + this._uid;
    }
};



/* <label>
                {{todos.label}}
                <select v-model="val" @change="reportVal">  
                    <option v-for="todo in todos.todos">{{todo.txt}}</option>
                </select>
            </label>   */