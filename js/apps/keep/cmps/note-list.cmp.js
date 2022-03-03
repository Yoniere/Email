import notePreview from './note-preview.cmp.js'
import { noteService } from '../services/note.service.js'
import noteEdit from './edit-note.cmp.js';

export default {
    props: ['notes'],
    template: `
            <section>
            <ul class="note-list">
                <li v-for='note in notes'  class="note-preview-container" >
            
                   <note-preview :note='note' />
                   
                       <button @click="remove(note.id)">X</button>
                       <!-- <button @click="select(note)">Details</button> -->
                       <!-- <router-link :to="'/note/edit/'+note.id">Edit</router-link> -->

                       <router-link :to="'/note/edit/'+note.id">Edit</router-link>
                       <!-- <button @click="select(notes)">Details</button> -->
                    <!-- </div> -->
                </li>
            </ul>
            </section>         
    `,

    data() {
        return {

        }
    },

    methods: {
        remove(id) {
            this.$emit('remove', id);
            console.log('id', id);
        },
        select(note) {
            this.$emit('selected', note);
        },


    },
    computed: {},
    components: {
        notePreview,
        noteService, noteEdit
    },
}