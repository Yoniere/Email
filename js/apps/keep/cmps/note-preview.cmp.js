export default {
    props: ['note'],
    template: `
        <section class="note-preview">
        <p>note id: {{note.id}}</p>
        <p>isPinned: {{note.isPinned}}</p>
            <p>note type: {{note.type}}</p>
            
            <!-- <router-link :to="'/note/'+note.id">Details</router-link> -->
            <pre>{{note}}</pre>
        </section>
    `,
    data() {
        return {

        }
    },
    created() { },
    methods: {},

    computed: {


    }
}

