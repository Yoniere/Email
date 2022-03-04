import { noteService } from '../services/note.service.js';
// import { eventApp } from '../../../main-services/eventapp-service.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteImg from './note-img.cmp.js';
// import notePreview from './note-preview.cmp.js'
export default {
    // props: ['note'],
    template: `
    
        <section class="edit-note app-main">
        <h4>{{formTitle}}</h4>
        <form >
            <div v-if='noteToEdit' > 
            <!-- <note-preview :note='note' /> -->
            <component :is="noteToEdit.type" :info="noteToEdit.info" @setVal="updateNote"></component> 
             </div>
             <!-- <button class="add-btn" @click.prevent="addNote" title="Add Note">Add new Note</button> -->
             <button @click="save">Save</button>
     
     
          </form>
        
        </section>
    `,
    data() {
        return {
            // addNewNote:noteService.getEmptyNote(''),
            noteToEdit:null,

        };
    },

   

    created() {
      
      
            const id = this.$route.params.noteId; 
            noteService.get(id)
            .then(note => {
                this.noteToEdit = note
                console.log('created',this.noteToEdit );
            });
        // }else{
        //      id = this.$route.params.noteId;
        //     noteService.get(id)
        //     .then(note => {
        //         this.addNewNote = note
        //         console.log('created',this.addNewNote );
        // })
    
    },
    
    methods: {
        // addNote() {
        //         noteService.addNote(this.addNewNote)
        //             .then((note) => this.$emit('addNotes', note));
        //     },

        save() {
            if (!this.noteToEdit.type) return;
            const id = this.$route.params.noteId; 
            if (id === this.$route.params.noteId){
                console.log('id',id);
            noteService.put(this.noteToEdit)
            // }else{
            //     noteService.put(this.addNewNote)
            }
           },

           
        
        
        updateNote(val){
        console.log('val',val);
            if (this.noteToEdit.type === 'note-txt') {
                this.noteToEdit.info.txt = val;
            }
            if (this.noteToEdit.type === 'note-video') {
                this.noteToEdit.info.videos = val;
            }
            if (this.noteToEdit.type === 'note-todos') {
                this.noteToEdit.info.todos = val;
            }
            if (this.noteToEdit.type === 'note-img') {
                this.noteToEdit.info.url = val;
            }
        },
    },
    computed: {
        formTitle() {
            const id = this.$route.params.noteId;
            return id ? 'Edit note' : 'Add note';
        },
      
        
    
    },
 
    components: {
        noteTxt,
        noteTodos,
        noteVideo,
        noteImg
    },
};

// import { noteService } from '../services/note.service.js';
// import { eventApp } from '../../../main-services/eventapp-service.js';
// import noteTxt from './note-txt.cmp.js';
// import noteTodos from './note-todos.cmp.js';
// import noteVideo from './note-video.cmp.js';
// import noteImg from './note-img.cmp.js';
// // import notePreview from './note-preview.cmp.js'
// export default {
//     // props: ['note'],
//     template: `
    
//         <section class="edit-note app-main">
//         <h4>{{formTitle}}</h4>
//         <form >
//             <div v-if='noteToEdit' > 
//             <!-- <note-preview :note='note' /> -->
//             <component :is="noteToEdit.type" :info="noteToEdit.info" @setVal="updateNote"></component> 
//              </div>
//              <button class="add-btn" @click.prevent="addNote" title="Add Note">Add new Note</button>
//              <button @click="save">Save</button>
     
     
//           </form>
        
//         </section>
//     `,
//     data() {
//         return {
//             addNewNote:noteService.getEmptyNote(''),
//             noteToEdit:null,

//         };
//     },

   

//     created() {
      
//         const id = this.$route.params.noteId; 
//         if (id === this.$route.params.noteId) {
//             noteService.get(id)
//             .then(note => {
//                 this.noteToEdit = note
//                 console.log('created',this.noteToEdit );
//             });
//         }else{
//              id = this.$route.params.noteId;
//             noteService.get(id)
//             .then(note => {
//                 this.addNewNote = note
//                 console.log('created',this.addNewNote );
//         })
//     }
//     },
    
//     methods: {
//         addNote() {
//                 noteService.addNote(this.addNewNote)
//                     .then((note) => this.$emit('addNotes', note));
//             },

//         save() {
//             if (!this.noteToEdit.type) return;
//             const id = this.$route.params.noteId; 
//             if (id === this.$route.params.noteId){
//                 console.log('id',id);
//             noteService.put(this.noteToEdit)
//             }else{
//                 noteService.put(this.addNewNote)
//             }
//            },

           
        
        
//         updateNote(val){
//         console.log('val',val);
//             if (this.noteToEdit.type === 'note-txt') {
//                 this.noteToEdit.info.txt = val;
//             }
//             if (this.noteToEdit.type === 'note-video') {
//                 this.noteToEdit.info.videos = val;
//             }
//             if (this.noteToEdit.type === 'note-todos') {
//                 this.noteToEdit.info.todos = val;
//             }
//             if (this.noteToEdit.type === 'note-img') {
//                 this.noteToEdit.info.url = val;
//             }
//         },
//     },
//     computed: {
//         formTitle() {
//             const id = this.$route.params.noteId;
//             return id ? 'Edit note' : 'Add note';
//         },
      
        
    
//     },
 
//     components: {
//         noteTxt,
//         noteTodos,
//         noteVideo,
//         noteImg
//     },
// };


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