import { noteService } from '../services/note.service.js'

// import noteTxt from './note-txt.cmp.js'

export default {
    // props: ['note'],
    template: `
    
        <section v-if="note" class="edit-note app-main">

        <p>sdasfsdf</p>
            <!-- <h4>{{formTitle}}</h4>
            <form @submit.prevent="save">
               
              
                    <component :is="note"  :info="info" @setVal="setAns($event ,note.id)"></component>
                    
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat alias minima tenetur, animi error iure placeat possimus asperiores, veritatis, illo autem corrupti optio exercitationem repudiandae delectus voluptatum molestiae! Neque.</p>


                <button :disabled="!isValid">Save</button>
            </form>
            <hr />
            <pre>{{noteToEdit}}</pre>
            <pre>{{selected}}</pre> -->
        </section>
    `,
    data() {
        return {
            // noteToEdit: noteService.getEmptyNote(),
            // selected: []
            note: null,
            noteId: null
        };
    },
    created() {
        const id = this.$route.params.noteId;
        // console.log(id)
        noteService.get(id)

            .then(note => this.note = note);
    },
    // mounted() {
    //     this.$refs.vendor.focus()
    // },
    methods: {
        // save() {
        //     if (!this.noteToEdit.vendor) return;
        //     noteService.save(this.noteToEdit)
        //         .then(note => {
        //             eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
        //             this.$router.push('/note')
        //         });
        // },
        setFilter() {
            this.$emit('edit', { ...this.filterBy });
        }
    },
    computed: {
        // formTitle() {
        //     const id = this.$route.params.noteId;
        //     return id ? 'Edit note' : 'Add note';
        // },
        // isValid() {
        //     return !!this.noteToEdit.note
        // },
        noteId() {
            return this.$route.params.noteId
        },
    },
    // watch: {
    //     noteToEdit: {
    //         handler() {
    //             console.log('Edited note was changed');
    //         },
    //         deep: true
    //     }
    // },
    // components: {
    //     noteTxt,
    // },
};