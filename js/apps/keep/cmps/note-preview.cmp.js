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
       
      
    <div>
        <p>{{note.type}}</p> 
        <p>{{note.info.title}}</p> 
        <p v-bind:id>{{note.info.txt}}</p>
        <p v-bind:id><img :src="imageToDisplay" class="noteImg"></p>
        <!-- <p v-bind:id>{{note.info.todos[txt]}}</p> -->
    </div>  

  
    <div v-if="isColorPicker" class="colorPicker">

    <div class="color-opt"
    v-for="color in colors"
    :style="{'background-color': color}"
    @click.stop ="onColorChoice(color, note.id)">
    </div>
    </div>

        </section>
    `,
    // .change-color-model

    data() {
        return {
            notes: null,
            selectedNote: null,
            answers: [],
            BGC: 'rgba(255,255,255,0.3)',
            isClick: false,
            isColorPicker: false,
            colors: ['#3aa7c9',
                '#30e447',
                '#e48f30',
                '#cb3707',
                '#eaf09b',
                'rgba(255, 255, 255, 0.316)'
            ]


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

