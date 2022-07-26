import mailPreview from "./mail-preview.cmp.js";

export default {
    props: ['emails'],

    template: `
        <section class="mail-list">
            <ul>
                <li v-for="email in emails" class="flex justify-content">
                
                    <mail-preview @isStared="isStared" :class="isRead" :email='email'></mail-preview>
                    <router-link class="read-btn" @click="readStatus(email.id)" :to="'/mail/'+email.id">Read</router-link>
                
                </li>
            </ul>
        </section>
    `,
    data() {
        return {

        }
    },
    created() {


    },
    methods: {
        readStatus(id) {
            // console.log(id)
            this.$emit('readStatus', id)
        },
        isRead() {
            return (!this.email.isRead) ? 'isRead' : ''
        },
        isStared(starStatus) {
            // console.log(starStatus)
            this.$emit('isStared', starStatus)
        }
    },
    components: {
        mailPreview
    },
    computed: {

    }
}