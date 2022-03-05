

import { utilService } from '../../../main-services/util.services.js';

export default {
    props: ['info'],
    template: `
  


  <form >
                <input type="text" v-model="val.todos.title" @change="reportVal" placeholder="Title" :list="listId">
                <input type="text" v-model="val.todos.txt" @change="reportVal" placeholder="Take a note..." :list="listId" required>
                <input type="submit" class="submit-note" @change="reportVal"  :list="listId">
            </form>
           <p> {{val}}</p>


    `,
    data() {
        return {
            val: {
                todos: {
                    title: '',
                    txt: ''
                }

            }
        };
    },
    components: {

    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.val);
            console.log('this.val', this.val);
        },

        addTodo() {
            this.note.info.todos.push({ id: utilService.makeId(), txt: null, doneAt: null })
            this.updatenote(this.note);
        },

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
}