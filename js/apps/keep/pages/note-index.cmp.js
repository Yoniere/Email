import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import { eventApp } from '../../../main-services/eventapp-service.js';
import { noteService } from '../services/note.service.js';


export default {
    template: `
        <section class="note-index app-main">
            
            <note-list  @remove="removeNote" :notes="notesToShow" @selected="selectNote" ></note-list>
            <!-- <div class="actions"> -->
            <note-filter :notes='notes' @filtered="setFilter" v-if="!selectedNote"></note-filter>

            <!-- <component :is="note" :info="note" @setVal="setAns($event, idx)"></component> -->
                          <!-- <select v-model="key" @change="setNoteType" class="form-control">

                          <option v-for="(note, idx) in notes" v-bind:value="note.info" >{{ note.type }}</option>
                    </select> -->
        </section>
    `,
    data() {
        return {
            notes: null,

            answers: [],
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
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);

            this.answers.splice(idx, 1, ans)
            console.log('ans', ans, idx);


        },
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


    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            console.log('this.filterBy123', this.filterBy);
            let filterdByType = this.notes;
            if (this.filterBy.type) {
                const regex = new RegExp(this.filterBy.type, 'i')
                filterdByType = this.notes.filter((note) => regex.test(note.type))
                console.log('filterdByType', filterdByType);
            }
        }
    },
    components: {
        noteService,
        noteList,
        eventApp,
        noteFilter
    }
};

