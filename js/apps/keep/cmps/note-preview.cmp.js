import { noteService } from '../services/note.service.js'
// import noteImg from './note-img.cmp.js'
// import noteTodos from './note-todos.cmp.js'
import noteTxt from './note-txt.cmp.js'
// import noteVideo from './note-video.cmp.js'
// import noteFilter from './note-filter.cmp.js'
import newNoteTxt from '../new-notes/new-note-txt.cmp.js';
import newNoteTodos from '../new-notes/new-note-todo.cmp.js';
import newNoteImg from '../new-notes/new-note-img.cmp.js';

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
       
      
         
        
    <p>{{note.info.title}}</p> 
        <p v-bind:id>{{note.info.txt}}</p>
        <p v-bind:id><img :src="imageToDisplay"></p>
        <p v-bind:id>{{note.info.todo}}</p>
       
        </section>
    `,
    // .change-color-model

    data() {
        return {
            notes: null,
            selectedNote: null,
            answers: [],
            // colorNote: '#673AB7',
            isClick: false,
        }

    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                this.answers = new Array(this.notes.length)
            })
        // console.log('answers', this.answers);
    },
    methods: {
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);

            this.answers.splice(idx, 1, ans)
            console.log('ans', ans, idx);


        },



    },

    computed: {
        imageToDisplay() {
            return this.note.info.url
        }

    },
    components: {
        noteService,
        // noteImg,
        // noteTodos,
        // noteVideo,
        noteTxt,
        // noteFilter
        newNoteTxt,
        newNoteTodos,
        newNoteImg,
    }
}

// <!-- <div v-for="(note, idx) in notes">  -->
// <!-- <p>note type: note.type</p> -->


// <!-- <component :is="note.type" :info="note.info"/> -->


// <!-- <p v-bind:id>note todos: {{todo}}</p> -->
// <!-- <a v-bind:href="url"> ... </a> -->
// <!-- <span v-html="note.info"></span></p> -->
// <!-- <p>note type: {{note.info.txt}}</p> -->
//     <!-- <component :is="note.type" :info="note.info" @setVal="setAns($event, idx)"></component> -->
//     <!-- <button v-on:click="selectBgColorNote" v-bind:style="{ color: color}" v-model="colorNote"> X<img src="img/color-icon.png" class="color-icon"></button> -->
//      <!-- </div> -->

//      <!-- <div>{{answers}}</div> -->
//         <!-- <pre>{{answers.info}}</pre> -->

