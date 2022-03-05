import { noteService } from '../services/note.service.js';
// import { eventApp } from '../../../main-services/eventapp-service.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';
// import noteVideo from './note-video.cmp.js';
// import noteImg from './note-img.cmp.js';
// import notePreview from './note-preview.cmp.js'
export default {
    props: ['note'],
    template: `
    
        <section class="edit-note app-main">
        <h4>{{formTitle}}</h4>
        <form >
            <div  > 
            <!-- <note-preview :note='note' /> -->
            <component :is="noteToEdit.type" :info="noteToEdit.info" @setVal="updateNote" @click="save"></component> 

             </div>
        
          </form>
        
        </section>
    `,
    data() {
        return {
            // addNewNote:noteService.getEmptyNote(''),
            noteToEdit: 'null',

        };
    },


    created() {


        const id = this.$route.params.noteId;
        noteService.get(id)
            .then(note => {
                this.noteToEdit = note
                console.log('created', this.noteToEdit);
            });

    },

    methods: {
        // addNote() {
        //     noteService.addNote(this.addNewNote)
        //         .then((note) => this.$emit('addNotes', note));
        // },

        save() {
            if (!this.noteToEdit.type) return;
            const id = this.$route.params.noteId;

            console.log('id', id);
            noteService.put(this.noteToEdit)

        },



        updateNote(val) {
            console.log('val', val);
            if (this.noteToEdit.type === 'note-txt') {
                this.noteToEdit.info.txt = val;
                this.noteToEdit.info.title = val;
            }
            if (this.noteToEdit.type === 'note-video') {
                this.noteToEdit.info.videos = val;
            }
            if (this.noteToEdit.type === 'note-todos') {
                this.noteToEdit.info.todos = val;
                console.log('  this.noteToEdit.info.todos', this.noteToEdit.info.todos);
            }
            if (this.noteToEdit.type === 'note-img') {
                this.noteToEdit.info.url = val;
            }
        },
    },
    computed: {
        formTitle() {
            const id = this.$route.params.noteId;
            return id ? 'Edit note' : 'Add note';
        },



    },

    components: {
        noteTxt,
        noteService,
        noteTodos,
        // noteVideo,
        // noteImg
    },
};
