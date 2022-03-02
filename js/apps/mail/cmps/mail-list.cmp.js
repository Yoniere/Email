import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ['emails'],

    template: `
        <section class="mail-list">
            <ul>
                <li v-for="email in emails">
                    <mail-preview :email='email'></mail-preview>
                    <div ></div>
                    <router-link @click="readStatus(email)" :to="'/mail/'+email.id">Read</router-link>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {}
    },
    created() {


    },
    methods: {
        readStatus(email) {
            // console.log(email)
            this.$emit('readStatus', email)
        }
    },
    components: {
        mailPreview
    }
}