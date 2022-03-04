import { mailService } from "./service/mail-service.cmps.js";
import mailList from "./cmps/mail-list.cmp.js";
import mailCompose from "./cmps/mail-compose.cmp.js";
import mailFilter from "./cmps/mail-filter.cmp.js";
import mailTypesList from "./cmps/mail-filtertypes-list.cmp.js";

export default {
    template: `
        <section class="mail-app app-main-layout">

            <section class="filter-area flex">
                <mail-filter class="filter-area-filters"  @filtered='setfilterBy'></mail-filter>
                <div class="filter-area-sort flex">
                <button @click="sortByTitle"> Sort By Subject</button>
                <button @click="sortByDate" >Sort By Date</button>
                </div>
                <div class="filter-area-unread bold">unread Emails: {{unreadEmailsCounter()}}</div>
            </section>
            <section class="main-area flex">
                <section class="side-area flex column">
                    <mail-compose :emails='emails' @sendEmail='addSentEmail' ></mail-compose>
                    <mail-types-list @filterByType='filterEmailsByType' :emails="emails"></mail-types-list>
                </section>
                <mail-list class="mail-area flex column" :emails="emailsToShow()" :emails="emails" @readStatus='isRead'></mail-list>
            </section>
            </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: {
                text: '',
                isRead: null,
                type: '',
                emailForSort: null,
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
            // console.log(unreadCounter)
            return unreadCounter
        },
        addSentEmail(sentEmail) {
            console.log(sentEmail)
            mailService.post(sentEmail)
                .then(email => this.emails.unshift(email))
        },

        setfilterBy(filterBy) {
            this.filterBy = filterBy
                // console.log(this.filterBy)
        },
        emailsToShow() {
            if (!this.filterBy.text && this.filterBy.isRead === null && !this.filterBy.type) return this.emails;
            // console.log(this.filterBy)
            const regex = new RegExp(this.filterBy.text, 'i');
            if (!this.filterBy.type) {
                if (this.filterBy.isRead === null) {
                    return this.emails.filter(email => regex.test(email.body || email.subject))
                } else if (!this.filterBy.text) {
                    return this.emails.filter(email => (email.isRead === this.filterBy.isRead))
                } else {
                    return this.emails.filter(email => regex.test(email.body || email.subject) && (email.isRead === this.filterBy.isRead))
                }
            } else if (this.filterBy.isRead === null) {
                if (!this.filterBy.type) {
                    return this.emails.filter(email => regex.test(email.body || email.subject))
                } else if (!this.filterBy.text) {
                    return this.emails.filter(email => (email.type === this.filterBy.type))
                } else {
                    return this.emails.filter(email => regex.test(email.body || email.subject) && (email.type === this.filterBy.type))
                }
            } else if (!this.filterBy.text) {
                if (!this.filterBy.type) {
                    return this.emails.filter(email => (email.isRead === this.filterBy.isRead))
                } else if (this.filterBy.isRead === null) {
                    return this.emails.filter(email => (email.type === this.filterBy.type))
                } else {
                    return this.emails.filter(email => (email.isRead === this.filterBy.isRead) && (email.type === this.filterBy.type))
                }
            }


            // return this.emails.filter(email => regex.test(email.body || email.subject) && (email.isRead === this.filterBy.isRead) && (email.type === this.filterBy.type))

        },
        filterEmailsByType(type) {
            this.filterBy.type = type
            console.log(this.filterBy)
                // return this.emails.filter(email => email.type === type)
        },

        // emailsTypeToShow() {
        //     if (!this.filterBy.type);
        //     console.log(this.filterBy.type)
        //     return this.emails.filter(email => email.type === this.filterBy.type)
        // }
        sortByTitle() {
            this.emailForSort = this.emails.slice()
            console.log(this.emailForSort)
            this.emailForSort.sort((a, b) => (a.subject > b.subject) ? 1 : -1)
            this.emails = this.emailForSort;
        },

        sortByDate() {
            this.emailForSort = this.emails.slice()
            console.log(this.emailForSort)
            this.emailForSort.sort((a, b) => (a.sentAt - b.sentAt))
            this.emails = this.emailForSort;
        }
    },
    computed: {

    },

    components: {
        mailList,
        mailCompose,
        mailFilter,
        mailTypesList,
    }
}