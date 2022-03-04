export default {
    props: ['email'],

    template: `
        <article class="flex justify-content" class="mail-preview ">
            <div>{{email.sender}}</div>
            <div>{{email.subject}}</div>
            <div>{{email.isRead}}</div>
        </article>
    `,
    data() {
        return {}
    },
    created() {


    },
    methods: {


    },

    computed: {

    },
    components: {

    }
};