import { utilService } from '../../../main-services/util.services.js';




export default {
    template: `
            <form class="new-note new-img" @submit.prevent="addNote">
                <input type="text" v-model="note.info.title" placeholder="Title">
                <input type="text" v-model="note.info.url" placeholder="Image URL..." required>
                <input type="submit" class="submit-note" value="Save">
            </form>
    `,
    data() {
        return {
            note: this.makeNewImg()
        }
    },
    methods: {
        addNote() {
            this.$emit('add-note', this.note);
            this.note = this.makeNewImg();
        },
        makeNewImg() {
            return {
                id: utilService.makeId(),
                type: 'note-img',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    url: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        }
    },
}