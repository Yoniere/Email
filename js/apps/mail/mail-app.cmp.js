import { mailService } from "./service/mail-service.cmps.js";
import { eventApp } from "../../main-services/eventapp-service.js";
import mailList from "./cmps/mail-list.cmp.js";
import mailDetails from "./pages/mail-details.cmp.js";

export default {
    template: `
        <section class="mail-app app-main">
        <mail-list :emails="emails" @readStatus='isRead'></mail-list>
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


    unmounted() {},

    methods: {
        isRead(email) {
            email.isRead = true;
            mailService.put(email.id)
                .then(() => {
                    const idx = this.emails.findIndex((e) => {
                        e.id === email.id
                        console.log(email)
                    });
                    this.emails.splice(idx, 1);
                    // showSuccessMsg('updated');
                    // console.log(id)
                    console.log(this.emails)
                })
                // .catch(err => {
                // console.error(err);
                // showErrorMsg('Error - please try again later')
                // });
        }
    },
    components: {
        mailList
    }
}