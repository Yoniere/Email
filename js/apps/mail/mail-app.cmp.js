import { mailService } from "./service/mail-service.cmps.js";
import mailList from "./cmps/mail-list.cmp.js";

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

    },
    methods: {


    },
    components: {
        mailList
    }
};