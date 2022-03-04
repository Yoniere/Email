import notePreview from './note-preview.cmp.js'
import { noteService } from '../services/note.service.js'
import noteEdit from './edit-note.cmp.js';
import noteAdd from './note-add.cmp.js';
export default {
    props: ['notes'],
    template: `
            <section>
            <ul class="note-list">
                <li v-for='note in notes'  :key="note.id"  class="note-preview-container" >
            
                    
                    <button @click="remove(note.id)">X</button>
                    <router-link :note='note' :to="'/note/add/'+note.id" @addNotes="addNote">add</router-link>
                    <!-- <router-link :note='note' :to="'/note/edit/'+note.id" @addNotes="addNote">Add</router-link> -->
                    <router-link :note='note' :to="'/note/edit/'+note.id" >Edit</router-link>
                    
                    
                    <note-preview :note='note' />
                </li>
            </ul>
            </section>         
    `,

    data() {
        return {
            notes: null
        }
    },
    created() {

        this.addNote()
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
            console.log('id', id);
        },
        select(note) {
            this.$emit('selected', note);
        },

        addNote() {
            noteService.query()
                .then(notes => this.notes = notes)
        },

    },
    computed: {},
    components: {
        notePreview,
        noteService,
        noteEdit,
        noteAdd
    },
}