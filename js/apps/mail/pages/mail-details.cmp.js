import { mailService } from "../service/mail-service.cmps.js";

export default {


    template: `
        <section class="mail-list">

                   <h1>{{email.sender}}</h1> 
                   <h1>{{email.subject}}</h1> 
                   <p>{{email.body}}</p> 
                   <div @click="onRemove(email.id)">delete</div> 
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    created() {
        const id = this.$route.params.mailId;
        mailService.get(id)
            .then(email => {
                this.email = email
                console.log(this.email)
            });
    },
    methods: {
        onRemove(id) {
            mailService.remove(id)
                .then(() => {
                    const idx = this.emails.findIndex((email) => email.id === id);
                    this.emails.splice(idx, 1);
                    showSuccessMsg('Deleted succesfully');
                })
                .catch(err => {
                    console.error(err);
                    showErrorMsg('Error - please try again later')
                });
        }
    },

};