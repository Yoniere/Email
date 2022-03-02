export default {
    template: `
          <section class="note-todos" >
            
             <label>
                {{info.label}}
                <select v-model="val" @change="reportVal">  
                    <option v-for="todo in info.todos">{{todo.txt}}</option>
                </select>
            </label>  
          </section>
          `,
    props: ['info'],
    data() {
        return {
            val: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.val)
        }
    },
    computed: {

    },

}