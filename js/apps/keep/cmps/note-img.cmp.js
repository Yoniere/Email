

export default {
    props: ['note'],
    template: `
        <div class="note note-img">
            <div class="note-content">
                <div class="img-container">
                    <img :src="note.info.url"/>
                </div>
                <pre class="note-title" contenteditable v-text="note.info.title" @blur="updateTitle"/>
            </div>
            <note-controls :note="note" @remove-note="removenote" @update-note="updatenote"/>
        </div>
    `,
    components: {
        noteControls,
    },
    methods: {
        removeNote(noteId) {
            this.$emit('remove-note', noteId)
        },
        updateNote(note) {
            this.$emit('update-note', note)
        },
        updateTitle(ev) {
            this.note.info.title = ev.target.innerText
            this.updateNote(this.note)
        },
        togglePin() {
            this.note.isPinned = !this.note.isPinned
            this.updateNote(this.note);
        },
    },
}