import { noteService } from '../services/note.service.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import noteTxt from './note-txt.cmp.js'
// import noteFilter from './note-filter.cmp.js'

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
       
       
        <p>note type: {{note.type}}</p>
        <p>note type: {{note.info}}</p>
        <!-- <div v-for="(note, idx) in notes">  -->
            <component :is="note.type" :info="note.info" @setVal="setAns($event, idx)"></component>
            <!-- <button v-on:click="selectBgColorNote" v-bind:style="{ color: color}" v-model="colorNote"> X<img src="img/color-icon.png" class="color-icon"></button> -->
             <!-- </div> -->

             <!-- <div>{{answers}}</div> -->
                <!-- <pre>{{answers.info}}</pre> -->
              
               
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


    },
    components: {
        noteService,
        noteImg,
        noteTodos,
        noteVideo,
        noteTxt,
        // noteFilter


    }
}



//  <select class="form-control" v-model="selectedNote" :required @change="selectNote">
// <option>Choose Province</option>
//  <option v-for="(note, idx) in notes" v-bind:value="note.info" >{{ note.type }}</option>
//  <component :is="note.type"  :info="note.info" @setVal="setAns($event, idx)"></component>
// </select> 