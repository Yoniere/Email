import { noteService } from '../services/note.service.js';
// import { eventApp } from '../../../main-services/eventapp-service.js';
import noteTxt from './note-txt.cmp.js';
import noteTodos from './note-todos.cmp.js';
// import noteVideo from './note-video.cmp.js';
// import noteImg from './note-img.cmp.js';
// import notePreview from './note-preview.cmp.js'
export default {
    props: ['note'],
    template: `
    
        <section class="edit-note app-main">
        <h4>{{formTitle}}</h4>
        <form >
            <div v-if='noteToEdit' > 
            <!-- <note-preview :note='note' /> -->
            <component :is="noteToEdit.type" :info="noteToEdit.info" @setVal="updateNote" @click="save"></component> 
             </div>
             <!-- <button class="add-btn" @click.prevent="addNote" title="Add Note">Add new Note</button> -->
             <!-- <button  @setVal="updateNote" @click="save">Save</button> -->
     
<!--              
            <div class="note-type-select">
                <div title="Note">
                    <svg :class="noteTypeNote" @click="noteType='note-txt'" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m422.72 42.667h-60.053v-10.176c0-17.92-14.571-32.491-32.491-32.491h-148.352c-17.92 0-32.491 14.571-32.491 32.491v10.176h-60.053c-25.707 0-46.613 20.907-46.613 46.613v376.107c0 25.706 20.906 46.613 46.613 46.613h333.44c25.707 0 46.613-20.907 46.613-46.613v-376.107c0-25.707-20.906-46.613-46.613-46.613zm-230.72 0h128v42.667h-128zm149.333 362.666h-170.666c-11.776 0-21.333-9.557-21.333-21.333s9.557-21.333 21.333-21.333h170.667c11.776 0 21.333 9.557 21.333 21.333s-9.558 21.333-21.334 21.333zm0-85.333h-170.666c-11.776 0-21.333-9.557-21.333-21.333s9.557-21.333 21.333-21.333h170.667c11.776 0 21.333 9.557 21.333 21.333s-9.558 21.333-21.334 21.333zm0-85.333h-170.666c-11.776 0-21.333-9.557-21.333-21.333s9.557-21.334 21.333-21.334h170.667c11.776 0 21.333 9.557 21.333 21.333s-9.558 21.334-21.334 21.334z"/></svg>
                </div>
                <div title="Todo">
                    <svg :class="noteTypeTodos" @click="noteType='note-todos'" enable-background="new 0 0 1000 1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="m351.6 352.2-101.3 108.6 255.5 239.5 484.2-498.3-88.5-81.3-397.7 385.7z"/><path d="m130.1 19.4c-66.4 0-120.1 53.7-120.1 120.2v720.9c0 66.5 53.7 120.1 120.1 120.1h720.9c66.5 0 120.1-53.7 120.1-120.1v-455.8l-120.1 116.5v299.2c0 22-18 40-40 40h-640.8c-22 0-40-18-40-40v-640.8c0-22 18-40 40-40h505.8l107.7-117.8z"/></svg>
                </div>
                <div title="Image">
                    <svg :class="noteTypeImg" @click="noteType='note-img'" enable-background="new 0 0 298.73 298.73" viewBox="0 0 298.73 298.73" xmlns="http://www.w3.org/2000/svg"><path d="m264.959 9.35h-231.172c-18.634 0-33.787 15.148-33.787 33.804v212.461c0 18.634 15.153 33.766 33.787 33.766h231.171c18.634 0 33.771-15.132 33.771-33.766v-212.461c.001-18.656-15.136-33.804-33.77-33.804zm-71.785 50.273c18.02 0 32.634 14.615 32.634 32.634s-14.615 32.634-32.634 32.634c-18.025 0-32.634-14.615-32.634-32.634s14.609-32.634 32.634-32.634zm61.189 198.526h-105.001-100.323c-9.013 0-13.027-6.521-8.964-14.566l56.006-110.93c4.058-8.044 11.792-8.762 17.269-1.605l56.316 73.596c5.477 7.158 15.05 7.767 21.386 1.354l13.777-13.951c6.331-6.413 15.659-5.619 20.826 1.762l35.675 50.959c5.157 7.392 2.046 13.381-6.967 13.381z"/></svg>
                </div>
                <div title="Video">
                    <svg :class="noteTypeVideo" @click="noteType='note-video'" enable-background="new 0 0 489.2 489.2" viewBox="0 0 489.2 489.2" xmlns="http://www.w3.org/2000/svg"><path d="m439.6 0h-390c-27.4 0-49.6 22.2-49.6 49.6v390c0 27.4 22.2 49.6 49.6 49.6h390c27.4 0 49.6-22.2 49.6-49.6v-389.9c.1-27.4-22.2-49.7-49.6-49.7zm-139 47.8h42.5v42.5h-42.5zm-77.2 0h42.5v42.5h-42.5zm-77.3 0h42.5v42.5h-42.5zm-34.8 393.8h-42.5v-42.5h42.5zm0-351.3h-42.5v-42.5h42.5zm77.3 351.3h-42.5v-42.5h42.5zm77.2 0h-42.5v-42.5h42.5zm77.3 0h-42.5v-42.5h42.5zm9.4-184.9-163.1 94.2c-9.2 5.3-20.8-1.3-20.8-12v-188.4c0-10.7 11.6-17.3 20.8-12l163.1 94.2c9.3 5.3 9.3 18.7 0 24zm67.9 184.9h-42.5v-42.5h42.5zm0-351.3h-42.5v-42.5h42.5z"/></svg>
                </div>
                </div>
      -->
          </form>
        
        </section>
    `,
    data() {
        return {
            // addNewNote:noteService.getEmptyNote(''),
            noteToEdit: null,

        };
    },


    created() {

        const id = this.$route.params.noteId;
        if (id === this.$route.params.noteId) {
            noteService.get(id)
                .then(note => {
                    this.noteToEdit = note
                    console.log('created', this.noteToEdit);
                });
        } else {
            id = this.$route.params.noteId;
            noteService.get(id)
                .then(note => {
                    this.addNewNote = note
                    console.log('created', this.addNewNote);
                })
        }
    },

    methods: {
        addNote() {
            noteService.addNote(this.addNewNote)
                .then((note) => this.$emit('addNotes', note));
        },

        save() {
            if (!this.noteToEdit.type) return;
            const id = this.$route.params.noteId;
            if (id === this.$route.params.noteId) {
                console.log('id', id);
                noteService.put(this.noteToEdit)
            } else {
                noteService.put(this.addNewNote)
            }
        },



        updateNote(val) {
            console.log('val', val);
            if (this.noteToEdit.type === 'note-txt') {
                this.noteToEdit.info.txt = val;
                this.noteToEdit.info.title = val;
            }
            if (this.noteToEdit.type === 'note-video') {
                this.noteToEdit.info.videos = val;
            }
            if (this.noteToEdit.type === 'note-todos') {
                this.noteToEdit.info.todos = val;
                console.log('  this.noteToEdit.info.todos', this.noteToEdit.info.todos);
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
        noteService,
        noteTodos,
        // noteVideo,
        // noteImg
    },
};
