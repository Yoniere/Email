export default {
    props: ['email'],

    template: `
        <article class="mail-preview">
            <div>{{email.sender}}</div>
            <div>{{email.subject}}</div>
        </article>
    `,
    data() {
        return {}
    },
    created() {


    },
    methods: {


    },
    components: {

    }
};