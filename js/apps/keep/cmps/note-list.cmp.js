import notePreview from './note-preview.cmp.js'
import { noteService } from '../services/note.service.js'

export default {
    props: ['notes'],
    template: `
        
            <ul class="note-list">
                <li v-for='note in notes'  class="note-preview-container" >
            
                   <note-preview :note='note' />
                   <div class="actions">
                       <button @click="remove(note.id)">X</button>
                       <button @click="select(note)">Details</button>
                       

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
            console.log('id', id);
        },
        select(note) {
            this.$router.push(`/book/${note.id}`)
            console.log('note', note);
        }
    },
    computed: {},
    components: {
        notePreview,
        noteService
    },
}