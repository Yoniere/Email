import { mailService } from "../service/mail-service.cmps.js";
import { eventApp } from "../../../main-services/eventapp-service.js"
export default {


    template: `
        <section v-if="email" class="mail-details app-main-layout">

                   <h2 class="mail-details-sender">{{email.sender}}</h2> 
                   <h1 class="mail-details-subject">{{email.subject}}</h1> 
                   <p>{{email.body}}</p> 
                   <div class="flex">
                       <router-link to="/mail"><img src="./img/back.svg"></router-link>
                   <div @click="onRemove(email.id)"><img src="./img/trash.svg"></div> 
                   </div>
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