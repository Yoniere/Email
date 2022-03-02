import notePreview from './note-preview.cmp.js'
import { noteService } from '../services/note.service.js'

export default {
    props: ['notes'],
    template: `
        
            <ul class="note-list">
                <li v-for="note in notes" :key="note.id" class="note-preview-container" >
                   <note-preview :note="note" />
                   <div class="actions">
                       <button @click="remove(note.id)">X</button>
                       <button @click="select(note)">Details</button>
                       <!-- <router-link :to="'/note/edit/'+note.id">Edit</router-link> -->

                    </div>
                </li>
            </ul>
                   
                
      
    `,

    data() {
        return {


        }
    },

    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(note) {
            this.$emit('selected', note);
        }
    },
    computed: {},
    components: {
        notePreview,
        noteService
    },
}