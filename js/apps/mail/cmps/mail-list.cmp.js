import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ['emails'],

    template: `
        <section class="mail-list">
            <ul>
                <li v-for="email in emails">
                    <mail-preview :email='email'></mail-preview>
                    <router-link :to="'/mail/'+email.id">Read</router-link>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {}
    },
    created() {


    },
    methods: {},
    components: {
        mailPreview
    }
}