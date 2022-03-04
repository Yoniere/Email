export default {
    props: ['emails'],

    template: `
        <section>
            <button @click="newEmailModal">Compose New Mail</button> 
            <form v-if="this.isclicked" action="">
                <button @click="newEmailModal">X</button>
                <input v-model="newMail.receiver" type="text" placeholder="To">
                <input v-model="newMail.subject" type="text" placeholder="Subject">
                <textarea v-model="newMail.body" rows="4" cols="30"></textarea>
                <button @click="sendEmail(this.newMail)">Send</button>
            </form>   
        </section>
    `,
    data() {
        return {
            isclicked: false,
            newMail: {
                receiver: null,
                sender: 'user@appsus.com',
                subject: null,
                body: null,
                isRead: true,
                sentAt: Date.now(),
                type: 'sent',
            }
        }
    },
    created() {

    },
    methods: {
        newEmailModal() {
            this.isclicked = !this.isclicked;
            console.log(this.isclicked)
            this.newMail = {
                subject: null,
                receiver: null,
                body: null,
            }
        },
        sendEmail(newEmailDetails) {
            if (!this.newMail.subject || !this.newMail.receiver || !this.newMail.body) return;
            this.$emit('sendEmail', newEmailDetails)
                // .then((sent) => this.isclicked = !this.isclicked)
                // console.log(newEmailDetails)
            this.isclicked = !this.isclicked;
            //   newEmailModal
            // this.newMail = {
            //     subject: null,
            //     receiver: null,
            //     body: null,
            // }
        }

    },

    computed: {

    },
    components: {

    }
};