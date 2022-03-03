import { noteService } from '../services/note.service.js'

export default {
    template: `
    
        <section class="note-add app-main">
   
       
            
        </section>
    `,
    data() {
        return {
            noteName: '',
            notes: []
        }
    },
    created() {

        console.log("got here");

    },
    methods: {


        addNote(note) {


            noteService.query()
                .then(updatedNotes => this.$emit('addedNote', updatedNotes));
        }


    },
    mounted() {
        this.$refs.input.focus()
    },
}




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
