import { mailService } from "./service/mail-service.cmps.js";
import mailList from "./cmps/mail-list.cmp.js";
import mailCompose from "./cmps/mail-compose.cmp.js";
import mailFilter from "./cmps/mail-filter.cmp.js";
import mailTypesList from "./cmps/mail-filtertypes-list.cmp.js";

export default {
    template: `
        <section class="mail-app app-main-layout">

            <section class="filter-area flex">
                <mail-filter class="filter-area-filters" @clearAllFilters="setResetFilters" @filtered='setfilterBy'></mail-filter>
                <div class="filter-area-sort flex">
                <button @click="sortByTitle"><img src="../../img/sort-by-name.svg"></button>
                <button @click="sortByDate"><img src="../../img/sort-by-date.svg"></button>
                </div>
                <div class="filter-area-unread bold"><img src="../../img/unread.svg">{{unreadEmailsCounter()}}</div>
            </section>
            <section class="main-area flex">
                <section class="side-area flex column">
                    <mail-compose class="compose-new-mail" :emails='emails' @sendEmail='addSentEmail' ></mail-compose>
                    <mail-types-list @filterByType='filterEmailsByType' :emails="emails"></mail-types-list>
                </section>
                <mail-list class="mail-area flex column" :emails="emailsToShow()" :emails="emails" @isStared="getStarStatus" @readStatus='isRead'></mail-list>
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

            )
            console.log(idx)


            this.emails[idx].isRead = true;
            console.log(this.emails[idx].isRead);
            mailService.put(this.emails[idx])
                .then((email) =>
                    console.log(email)

                );

        },
        unreadEmailsCounter() {
            var unreadCounter = 0;
            for (var i = 0; i < this.emails.length; i++) {
                if (!this.emails[i].isRead)
                    unreadCounter++;
            }
            return unreadCounter
        },
        addSentEmail(sentEmail) {
            console.log(sentEmail)
            mailService.post(sentEmail)
                .then(email => this.emails.unshift(email))
        },

        setfilterBy(filterBy) {
            this.filterBy = filterBy
        },
        emailsToShow() {
            if (!this.filterBy.text && this.filterBy.isRead === null && !this.filterBy.type) return this.emails;
            const regex = new RegExp(this.filterBy.text, 'i');
            if (this.filterBy.type === 'star') {
                return this.emails.filter(email => (email.isStar === true))
            }
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
        },
        filterEmailsByType(type) {
            this.filterBy.type = type
            console.log(this.filterBy)

        },

        sortByTitle() {
            this.emailForSort = this.emails.slice()
            console.log(this.emailForSort)
            this.emailForSort.sort((a, b) => (a.subject > b.subject) ? 1 : -1)
            this.emails = this.emailForSort;
        },

        sortByDate() {
            // this.emailForSort = this.emails.slice()
            // console.log(this.emailForSort)
            return this.emails.sort((a, b) => (a.sentAt - b.sentAt))
                // this.emails = this.emailForSort;
        },
        setResetFilters(filters) {
            this.filterBy = filters;
            this.filterBy.type = '';
        },
        getStarStatus(emailToStar) {
            // console.log(email)
            const idx = this.emails.findIndex(email =>
                    email.id === emailToStar.id
                )
                // console.log(this.emails[idx].isStar);
            mailService.put(this.emails[idx])
                .then((email) =>
                    console.log(email)
                );

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