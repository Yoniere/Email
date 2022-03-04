import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import { eventApp } from '../../../main-services/eventapp-service.js';
import { noteService } from '../services/note.service.js';
import noteAdd from '../cmps/note-add.cmp.js';

export default {
    template: `
        <section class="note-index app-main">
            
            <!-- <div class="actions"> -->
                <note-filter :notes='notes' @filtered="setFilter" v-if="!selectedNote"></note-filter>
                 <router-link :notes='notes' :to="'/note/add/'"  @addedNotes="onAddNotes">add</router-link>
                <!-- <note-add :notes='notes' v-if="isAdd" @addedNotes="onAddNotes" /> -->
                <note-list :notes="notes" @remove="removeNote"  @selected="selectNote" ></note-list>
            <!-- <component :is="note.type" :info="note.info" @setVal="setAns($event, idx)"></component> -->
                          <!-- <select v-model="key" @change="setNoteType" class="form-control">

                          <option v-for="(note, idx) in notes" v-bind:value="note.info" >{{ note.type }}</option>
                    </select> -->
        </section>
    `,
    data() {
        return {
            notes: null,
            isAdd: null,
            filterBy: null,
            selectedNote: null,
            key: null,
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
        onAddNotes(addNotes) {
            this.notes = addNotes

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
        noteAdd
    }
};

