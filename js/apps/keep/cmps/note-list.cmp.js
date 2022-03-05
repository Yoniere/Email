import notePreview from './note-preview.cmp.js'
import { noteService } from '../services/note.service.js'
import noteEdit from './edit-note.cmp.js';
import noteTxt from './note-txt.cmp.js'

export default {
    props: ['notes'],
    template: `
            
            <section >
                
                <ul v-show="notes.length" class="note-list">
                    <li class="curr-note-list" v-for='note in notes' >
                        
                        <!-- <note-color :note="note"  @update-note="updateNote"/> -->
                                <note-preview :note='note'  />
                    <!-- <button @click="remove(note.id)">X</button> -->
                     <span>
                                 <svg  @click="remove(note.id)" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m490.667 85.333h-42.667-68.693l-7.019-28.075c-8.405-33.706-38.571-57.258-73.323-57.258h-85.931c-34.752 0-64.917 23.552-73.323 57.259l-7.019 28.075h-68.692-42.667c-11.797-.001-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h22.485l17.963 323.541c1.899 33.899 29.995 60.459 63.936 60.459h260.565c33.941 0 62.037-26.56 63.936-60.459l17.963-323.541h22.485c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-309.59-17.728c3.691-14.677 16.811-24.939 31.957-24.939h85.931c15.147 0 28.267 10.261 31.957 24.939l4.416 17.728h-158.677zm10.923 337.728c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.333 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333zm85.334 0c0 11.776-9.536 21.333-21.333 21.333s-21.333-9.557-21.333-21.333v-213.333c0-11.776 9.536-21.333 21.333-21.333s21.333 9.557 21.333 21.333z"/></svg>
                                   <router-link :note='note' @update-note="updateNote" :to="'/note/edit/'+note.id" >Edit</router-link>
                    </span>

 
                
                             </li>
                    </ul>
            </section>         
    `,

    data() {
        return {
            selectedNote: null,

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
            this.$emit('update-note', note.id)
        },


    },
    computed: {},
    components: {
        notePreview,
        noteEdit,
        // noteImg,
        noteTxt,
        // noteVideo,
        // noteTodos,
        // colorNote

    },
}