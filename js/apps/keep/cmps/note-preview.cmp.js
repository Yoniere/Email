// import noteImg from './note-img.cmp.js'
// import noteTodos from './note-todos.cmp.js'
// import noteVideo from './note-video.cmp.js'
import noteTxt from './note-txt.cmp.js'
import { noteService } from '../services/note.service.js'


export default {
    props: ['note'],
    template: `
        <section class="note-preview">
        <p>note id: {{note.id}}</p>
        <p>note type: {{note.type}}</p>
            
             
                <div v-for="(note, idx) in notes">
                    <component :is="note.type"  :info="note.info" @setVal="setAns($event, idx)"></component>
                </div>

        </section>
    `,
    data() {
        return {
            notes: null,
            answers: []
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                this.answers = new Array(this.notes.length)
            })
    },
    methods: {
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);

            this.answers.splice(idx, 1, ans)

        },


    },

    computed: {


    },
    components: {
        noteService,
        // noteImg,
        // noteTodos,
        // noteVideo,
        noteTxt

    }
}

