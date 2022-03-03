import { mailService } from "./service/mail-service.cmps.js";
import { eventApp } from "../../main-services/eventapp-service.js";
import mailList from "./cmps/mail-list.cmp.js";
import mailDetails from "./pages/mail-details.cmp.js";
import mailCompose from "./cmps/mail-compose.cmp.js";

export default {
    template: `
        <section class="mail-app app-main">
            <mail-compose ></mail-compose>
            <div>unread Emails: {{unreadEmailsCounter()}}</div>
        <mail-list :emails="emails" @readStatus='isRead'></mail-list>
        </section>
    `,
    data() {
        return {
            emails: [],
            // unreadEmails,
        }
    },
    created() {
        mailService.query()
            .then(emails => this.emails = emails)
    },


    unmounted() {},

    methods: {
        isRead(emailId) {
            console.log(emailId)
            const idx = this.emails.findIndex(email =>
                email.id === emailId
                // console.log(email.id)
            )
            console.log(idx)
                // console.log(this.emails)

            this.emails[idx].isRead = true;
            console.log(this.emails[idx].isRead);
            mailService.put(this.emails[idx])
                .then((email) =>
                    console.log(email)
                    // console.log(this.emails)
                    // const idx = this.emails.findIndex((e) => {
                    //     e.id === email.id
                    //     console.log(email)
                );
            // this.emails.splice(idx, 1, this.email);
            // showSuccessMsg('updated');
            // console.log(id)
            //     console.log(this.emails)
            // })
            // .catch(err => {
            // console.error(err);
            // showErrorMsg('Error - please try again later')
            // });
            // }
        },
        unreadEmailsCounter() {
            var unreadCounter = 0;
            for (var i = 0; i < this.emails.length; i++) {
                if (!this.emails[i].isRead)
                    unreadCounter++;
            }
            console.log(unreadCounter)
            return unreadCounter
        }
    },
    components: {
        mailList,
        mailCompose,
    }
}