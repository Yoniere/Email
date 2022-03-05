import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import { eventApp } from '../../../main-services/eventapp-service.js';
import { noteService } from '../services/note.service.js';
import noteAdd from '../cmps/note-add.cmp.js';
import colorNote from '../cmps/note-color.cmp.js';

export default {
    template: `
        <section class="note-index app-main">
            
            
                <note-filter :notes='notes' @filtered="setFilter" v-if="!selectedNote"></note-filter>
                <note-add  @note-add="addNote"/>
                <note-color :notes="notes"  @update-note="updateNote"/>
                <note-list :notes="notes" @remove-note="removeNote"  @selected="selectNote" @note-edit="updateNote"></note-list>
          
              
        </section>
    `,
    data() {
        return {
            notes: null,
            // isAdd: null,
            filterBy: null,
            selectedNote: null,
            key: null,
            isEdit: false
        }
    },
    created() {
        noteService.initNotes()
        this.getNotes();
    },
    methods: {
        getNotes() {
            this.notes = noteService.getNotes()
        },
        selectNote(note) {
            this.selectedNote = note;

        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        updateNote(id) {
            this.$router.push(`/note/${id}`);
            this.isEdit = true;
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
        addNote(note) {
            noteService.addNote(note)
                .then(notes => this.notes = notes)
        },

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            // console.log('this.filterBy123', this.filterBy);
            let filterdByType = this.notes;
            if (this.filterBy.type) {
                const regex = new RegExp(this.filterBy.type, 'i')
                filterdByType = this.notes.filter((note) => regex.test(note.type))
                // console.log('filterdByType', filterdByType);
            }
        }
    },
    components: {
        noteService,
        noteList,
        eventApp,
        noteFilter,
        noteAdd,
        colorNote
    }
};

