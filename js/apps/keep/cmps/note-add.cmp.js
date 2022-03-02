import { noteService } from '../services/note.service.js'

export default {
    template: `
    
        <section class="note-add app-main">
   
       
            
        </section>
    `,
    data() {
        return {
            noteName: '',
            notes: []
        }
    },
    created() {

        console.log("got here");

    },
    methods: {


        addNote(note) {


            noteService.query()
                .then(updatedNotes => this.$emit('addedNote', updatedNotes));
        }


    },
    mounted() {
        this.$refs.input.focus()
    },
}