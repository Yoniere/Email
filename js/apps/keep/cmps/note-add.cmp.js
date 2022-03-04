import { noteService } from '../services/note.service.js';
// import { eventApp } from '../../../main-services/eventapp-service.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteImg from './note-img.cmp.js';
// import notePreview from './note-preview.cmp.js'
export default {
    // props: ['notes'],
    template: `
    
        <section class="add-note app-main">
        <h4>{{formTitle}}</h4>
     
        <form @submit.prevent="save">
                <!-- <div v-for="(info, idx) in notes.type"> -->
                    <component :is="addNewNote"  :info="addNewNote" @setVal="updateNote"></component>
                <!-- </div> -->
                <button @click="addedNote()">add</button>
          </form>
        
        </section>
    `,
    data() {
        return {
            addNewNote:noteService.getEmptyNote(''),
            notes:null,

        };
    },

   

    created() {
      
        const id = this.$route.params.noteId; 
       
            
            noteService.get(id)
            .then(note => {
                this.addNewNote = note
                console.log('created',this.addNewNote );
        })

    },
    
    methods: {
        addedNote() {
                noteService.addNote(this.addNewNote)
                    .then((note) => this.$emit('addedNotes', note));
            },

        save() {
            if (!this.addNewNote.type) return;
            const id = this.$route.params.noteId; 
          
                noteService.put(this.addNewNote)
            
           },

           
        
        
        updateNote(val){
        console.log('val',val);
        
            if (this.addNewNote.type === 'note-txt') {
                this.addNewNote.info.txt = val;
                console.log(' this.addNewNote123', this.addNewNote);
            }
            if (this.addNewNote.type === 'note-video') {
                this.addNewNote.info.videos = val;
            }
            if (this.addNewNote.type === 'note-todos') {
                this.addNewNote.info.todos = val;
            }
            if (this.addNewNote.type === 'note-img') {
                this.addNewNote.info.url = val;
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


// import { noteService } from '../services/note.service.js'
// import { eventApp } from '../../../main-services/eventapp-service.js';
// import noteTxt from './note-txt.cmp.js';
// import noteTodos from './note-todos.cmp.js'
// import noteVideo from './note-video.cmp.js'
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
                  
//              <button @click="save">Save</button>
     
     
//           </form>
        
//         </section>
//     `,
//     data() {
//         return {
//             newEdit: [],
//             noteToEdit:null,

//         };
//     },
    

//     created() {
        
//         const id = this.$route.params.noteId;
//         noteService.get(id)
//             .then(note => {
//                 this.noteToEdit = note
//                 console.log('created',this.noteToEdit );
//             });

//     },
    
//     methods: {
//         save() {

//             console.log('this.noteToEdit',this.noteToEdit);
//             if (!this.noteToEdit.type) return;
//             noteService.put(this.noteToEdit)
            
//                 //  .then((notes) => {
              
                   
//                 //  });
//         },
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
//         // notePreview
//     },
// };
