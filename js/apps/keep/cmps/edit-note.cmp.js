import { noteService } from '../services/note.service.js'
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'

export default {
    // props: ['note'],
    template: `
    
        <section class="edit-note app-main">
       

            <div v-if='noteToEdit' > 
            <component :is="noteToEdit.type" :info="noteToEdit.info"  @setVal="setAns($event, idx)"></component> 
             </div>
                    
     
            <hr />
           
        
        </section>
    `,
    data() {
        return {
            newEdit: [],
            noteToEdit:null,

        };
    },

    created() {
        const id = this.$route.params.noteId;
        noteService.get(id)
            .then(note => {
                this.noteToEdit = note
            });

    },
    
    methods: {
        hello() {
            console.log(this.note)
        },
        setAns(ans, idx) {
            console.log('Setting the answer: ', ans, 'idx:', idx);  
            this.newEdit.splice(idx, 1, ans)

        },
    },
    computed: {
      
    
    },
 
    components: {
        noteTxt,
        noteTodos,
        noteVideo
        // notePreview
    },
};




// import { noteService } from '../services/note.service.js'
// import noteTxt from './note-txt.cmp.js'
// import { eventApp } from '../../../main-services/eventapp-service.js';
// // import noteTxt from './note-txt.cmp.js'

// export default {
//     props: ['note'],
//     template: `
    
//         <section v-if="note" class="edit-note app-main">

//             <h4>{{formTitle}}</h4>
//             <form @submit.prevent="save">
               
              
//                     <component :is="note.type"  :info="note.info" @setVal="setAns($event ,note.id)"></component>
                    


//                     <button>Save</button>
//             </form>
//             <hr />
           
//             <pre>{{noteToEdit}}</pre>
//         </section>
//     `,
//     data() {
//         return {
//             noteToEdit: noteService.getEmptyNote(),
//             newEdit: [],
//             note: null,
//             // noteId: null
//         };
//     },
//     created() {
//         const id = this.$route.params;
//         if (id) {
//             noteService.get(id)
//                 .then(note => this.noteToEdit = note);
//         }
//     },
//     // mounted() {
//     //     this.$refs.vendor.focus()
//     // },
//     methods: {
//         save() {
//             if (!this.noteToEdit.type.info) return;
//             noteService.save(this.noteToEdit)
//                 .then(note => {
//                     eventApp.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
//                     this.$router.push('./note')
//                 });
//         },
//         // save() {
//         //     console.log('Saving..');
//         // },
//         setAns(ans, idx) {
//             console.log('Setting the answer: ', ans, 'idx:', idx);

//             this.noteToEdit.splice(idx, 1, ans)

//         },

//     },
//     computed: {
//         formTitle() {
//             const id = this.$route.params.noteId;
//             console.log('id', id);
//             return id ? 'Edit note' : 'Add note';

//         },

//         noteId() {
//             return this.$route.params.noteId
//         },
//         fetchIdByNote(){

//         }
//     },
//     watch: {
//         noteToEdit: {
//             handler() {
//                 console.log('Edited note was changed');
//             },
//             deep: true
//         }
//     },
//     components: {
//         noteTxt,
//     },
// };