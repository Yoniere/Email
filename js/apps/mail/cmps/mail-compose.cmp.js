export default {
    props: ['email'],

    template: `
        <section>
            <button @click="createNewEmail">Compose New Mail</button> 
            <form v-if="this.newEmail" action="">
            <input ref="input" type="text" @input="displayReview" v-model="review.fullName" placeholder="Your Name">
   
            </form>   
        </section>
    `,
    data() {
        return {
            newEmail: false,
        }
    },
    created() {


    },
    methods: {
        createNewEmail() {
            this.newEmail = !this.newEmail;
        }

    },

    computed: {

    },
    components: {

    }
};