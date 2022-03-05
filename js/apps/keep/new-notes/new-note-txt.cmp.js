import { utilService } from '../../../main-services/util.services.js';


export default {
    template: `
 
            <form class="new-note" @submit.prevent="addNote">
                <input type="text" v-model="note.info.title" placeholder="Title">
                <input type="text" v-model="note.info.txt" placeholder="Take a note..." required>
                <input type="submit" class="submit-note" value="Save">
            </form>
    `,
    data() {
        return {
            note: this.makeNewNote()
        }
    },
    methods: {
        addNote() {
            this.$emit('add-note', this.note);
            this.note = this.makeNewNote()

        },
        makeNewNote() {
            return {
                id: utilService.makeId(),
                type: 'note-txt',
                isPinned: false,
                info: {
                    title: null,
                    txt: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        },
    },
}