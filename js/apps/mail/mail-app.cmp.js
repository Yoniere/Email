import { mailService } from "./service/mail-service.cmps.js";
import { eventApp } from "../../main-services/eventapp-service.js";
import mailList from "./cmps/mail-list.cmp.js";
import mailCompose from "./cmps/mail-compose.cmp.js";
import mailFilter from "./cmps/mail-filter.cmp.js";

export default {
    template: `
        <section class="mail-app app-main">
            <mail-filter @filtered='setfilterBy'></mail-filter>

            <button @click="sortByTitle"> Sort By Subject</button>
            <button>Sort By Date</button>

            <mail-compose :emails='emails' @sendEmail='addSentEmail' ></mail-compose>

            <div>unread Emails: {{unreadEmailsCounter()}}</div>

        <mail-list v-if :emails="emailsToShow()" :emails="emails" @readStatus='isRead'></mail-list>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: {
                text: '',
                isRead: null,
                emailForSort: '',
            }

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
        },
        addSentEmail(sentEmail) {
            console.log(sentEmail)
            mailService.post(sentEmail)
                .then(email => this.emails.unshift(email))
        },

        setfilterBy(filterBy) {
            this.filterBy = filterBy
            console.log(this.filterBy)
        },
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            console.log(this.filterBy)
            const regex = new RegExp(this.filterBy.text, 'i');
            if (this.filterBy.isRead === null) {
                console.log('hello')
                return this.emails.filter(email => regex.test(email.body || email.subject))
            } else {
                return this.emails.filter(email => regex.test(email.body || email.subject) && (email.isRead === this.filterBy.isRead))
            }
        },
        sortByTitle() {
            this.emailForSort = this.emails.slice()
            console.log(this.emailForSort)
            this.emailForSort.subject.sort();
            console.log(this.emailForSort);
            console.log(this.emails)
        }
    },
    computed: {

    },

    components: {
        mailList,
        mailCompose,
        mailFilter,
    }
}