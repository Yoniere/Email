import { mailService } from "./service/mail-service.cmps.js";
import { eventApp } from "../../main-services/eventapp-service.js";
import mailList from "./cmps/mail-list.cmp.js";
import mailDetails from "./pages/mail-details.cmp.js";

export default {
    template: `
        <section class="mail-app app-main">
        <mail-list :emails="emails"></mail-list>
        </section>
    `,
    data() {
        return {
            emails: [],
        }
    },
    created() {
        mailService.query()
            .then(emails => this.emails = emails)

        // this.unsubscribe = eventApp.on(console.log('he'), (id) => {

        // })
    },


    unmounted() {
        // this.unsubscribe()
    },

    methods: {

    },
    components: {
        mailList
    }
}