import { mailService } from "../service/mail-service.cmps.js";
import { eventApp } from "../../../main-services/eventapp-service.js"
export default {


    template: `
        <section v-if="email" class="mail-list">

                   <h1>{{email.sender}}</h1> 
                   <h1>{{email.subject}}</h1> 
                   <p>{{email.body}}</p> 
                   <div @click="onRemove(email.id)">delete</div> 
        </section>
        <section v-else=''></section>
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
            });
    },
    methods: {
        onRemove(id) {
            mailService.remove(id)
                .then(() => {

                    this.$router.push('/mail')
                })
                .catch(err => {
                    console.error(err);
                    showErrorMsg('Error - please try again later')
                });
        }
    },

};