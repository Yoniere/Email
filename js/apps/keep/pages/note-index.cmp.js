
import noteList from '../cmps/note-list.cmp.js';
// import { eventAppsus } from '../../../main-services/event-appsus-service.js';
import { noteService } from '../services/note.service.js';
// import notesFilter from '../../keep/cmps/note-filter.cmp.js';

export default {
    template: `
        <section class="note-index app-main">
            <h2 >hollaaa</h2>
             
            <!-- <note-filter @filtered="setFilter" v-if="!selectedNote"/> -->
            <note-list :notes='notes' ></note-list>
          <!-- :notes="notesToShow" @remove="removeNote"  @selected="selectNote" -->
                  
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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        // removeNote(id) {
        //     noteService.remove(id)
        //         .then(() => {
        //             const idx = this.notes.findIndex((note) => note.id === id);
        //             this.notes.splice(idx, 1);
        //             eventAppsus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
        //         })
        //         .catch(err => {
        //             console.error(err);
        //             eventAppsus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
        //         });
        // },
    },
    computed: {
        notesToShow() {

        }
    },
    // notesToShow() {
    //     if (!this.filterBy) return this.notes
    //     let filterdByNames = this.notes;
    //     if (this.filterBy.title) {
    //         const regex = new RegExp(this.filterBy.title, 'i')
    //         return filterdByNames = this.notes.filter((note) => regex.test(note.title))
    //     }
    // },

    components: {
        noteService,
        noteList,
        // notesFilter,
        // eventAppsus
    }
};

