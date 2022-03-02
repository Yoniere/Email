import { mailService } from "./service/mail-service.cmps.js";

export default {
    template: `
        <section class="mail-app app-main">
        {{emails}}
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

    }
};