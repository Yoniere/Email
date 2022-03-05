import { utilService } from '../../../main-services/util.services.js';



export default {
    template: `
        <section class="new-note new-todos">
            <form @submit.prevent="addNote">
                <input type="text" v-model="note.info.title" placeholder="Title" required>
                <input type="submit" class="submit-note" value="Save">
            </form>
            <form @submit.prevent="addTodo">
                <input type="text" v-model="todo.txt" placeholder="What Todo?" required>
                <input type="submit" class="submit-todo" value="Next">
            </form>
            <ul class="todo-list" v-show="note.info.todos.length">
                <li v-for="(todo, idx) in note.info.todos">
                    <pre v-text="todo.txt" @blur="updateTodoTxt($event, id)" contenteditable></pre>
                    <div class="todo-controls">
                        <svg @click="deleteTodo(id)" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>
                    </div>    
                </button>
                </li>
                
            </ul>
        </section>
    `,
    data() {
        return {
            todo: { id: utilService.makeId(), txt: null, doneAt: null },
            note: this.newTodo()
        }
    },
    methods: {
        addNote() {
            this.$emit('add-note', this.note);
            this.note = this.newTodo()
        },
        addTodo() {
            this.note.info.todos.push(this.todo);
            this.todo = { id: utilService.makeId(), txt: null, doneAt: null };
        },
        updateTodoTxt(ev, id) {
            if (!ev.target.innerText) this.note.info.todos.splice(id, 1);
            else this.note.info.todos[id].txt = ev.target.innerText
        },
        deleteTodo(idx) {
            this.note.info.todos.splice(idx, 1);
        },

        newTodo() {
            return {
                id: utilService.makeId(),
                type: 'note-todos',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    todos: [],
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        },

    }
}