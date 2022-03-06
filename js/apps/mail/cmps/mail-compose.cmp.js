export default {
    props: ['emails'],

    template: `
        <section>
            <button class="new-email flex" @click="newEmailModal"><img src="./img/new.svg">New Email</button> 
            <form class="modal" v-if="this.isclicked" action="">
                
                <div class="modal-header flex justify-content">
                    <h1 class="modal-header-txt">Compose New Mail</h1>
                    <button class="modal-exit-btn" @click="newEmailModal">x</button>
                </div>
                <input class="modal-receiver" v-model="newMail.receiver" type="text" placeholder="To">
                <input class="modal-subject" v-model="newMail.subject" type="text" placeholder="Subject">
                <textarea class="modal-text-area" v-model="newMail.body" rows="4" cols="30"></textarea>
                <button class="modal-send" @click="sendEmail(this.newMail)"><img src="./img/sent.svg"></button>
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
            this.newMail.sender = 'user@appsus.com';
            this.newMail.sentAt = Date.now();
            this.newMail.type = 'sent';
            this.newMail.isRead = true;

            console.log(this.newMail)
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
        },

    },

    computed: {

    },
    components: {

    }
};