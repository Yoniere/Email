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




            <!-- <component v-for="note in notes"
                       
                        :is="note.type"
                        :key="note.id"
                        :style="note.style"
                        :note="note"
                        @remove-note="remove">
                        
            </component> -->
           
           
<!-- <div v-for="(note, idx) in notes" @click.stop="onSelectNote(note,idx)">
                           <component :is="note.type" :info="note.info" :idx="idx" :id="note.id"></component>
</div> -->

                       <!-- <button @click="select(note)">Details</button> -->
                       <!-- <note-add :note='note' @addNotes="addNote" /> -->
                       <!-- <router-link :note='note' :to="'/note/add/'+note.id" @addNotes="addNote">add</router-link> -->
                       
                       <!-- <router-link :note='note' :to="'/note/edit/'+note.id" @addNotes="addNote">Add</router-link> -->
                       <!-- <button @click="select(notes)">Details</button> -->
                
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