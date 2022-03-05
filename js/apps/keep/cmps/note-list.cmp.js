import notePreview from './note-preview.cmp.js'
import { noteService } from '../services/note.service.js'
import noteEdit from './edit-note.cmp.js';
// import noteImg from './note-img.cmp.js'
// import noteTodos from './note-todos.cmp.js'
import noteTxt from './note-txt.cmp.js'
export default {
    props: ['notes'],
    template: `
            
                <section >
           
                    <ul v-show="notes.length" class="note-list">
                <li class="curr-note-list" v-for='note in notes' :key="note.id">
                       <button @click="remove(note.id)">X</button>
                       <!-- <button @click="updateNote(note.id)">Update</button> -->
                       <note-preview :note='note'  @update-note="updateNote"/>
                       <router-link :note='note' :to="'/note/edit/'+note.id" >Edit</router-link>



                
                </li>
            </ul>
            </section>         
    `,

    data() {
        return {
            selectedNote: null,
            selectedNoteIDX: null
        }
    },
    created() {

        // this.addNote()
    },
    methods: {
        remove(note) {
            this.$emit('remove-note', note);
            console.log('note', note);
        },
        select(note) {
            // this.$router.push(`/note/${note.note}`)
            this.$emit('selected', note);
        },
        onSelectNote(noteSelected, idx) {
            this.selectedNote = noteSelected;
            this.selectedNoteIDX = idx;
        },
        updateNote(note) {
            this.$emit('update-note', note)
        },
        // addNote() {
        //     noteService.query()
        //         .then(notes => this.notes = notes)
        // },

    },
    computed: {},
    components: {
        notePreview,
        noteEdit,
        // noteImg,
        noteTxt,
        // noteVideo,
        // noteTodos,

    },
}