export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            
            <p>note type: {{note.type}}</p>
            <p> {{try}}</p>
           
        </section>
    `,
    data() {
        return {

        }
    },
    created() { },
    methods: {},
    try() {
        return console.log('hii');
    },
    computed: {


    }
}