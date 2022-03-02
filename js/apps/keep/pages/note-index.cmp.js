import noteList from '../cmps/note-list.cmp.js';
import { eventApp } from '../../../main-services/eventapp-service.js';
import { noteService } from '../services/note.service.js';


export default {
    template: `
        <section class="note-index app-main">
            
            <note-list :notes='notes' @remove="removeNote"  @selected="selectNote" ></note-list>
    
        </section>
    `,
    data() {
        return {
            notes: null,
            noteIndex: null,
            filterBy: null,
            selectedNote: null,
        }
    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes);
    },
    methods: {
        selectNote(note) {
            this.selectedNote = note;

        },

        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id);
                    this.notes.splice(idx, 1);
                    eventApp.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
                })
                .catch(err => {
                    console.error(err);
                    eventApp.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
                });
        },
    },
    computed: {

    },

    components: {
        noteService,
        noteList,
        eventApp
    }
};

