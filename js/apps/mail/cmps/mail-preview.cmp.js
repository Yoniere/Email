export default {
    props: ['email'],

    template: `
        <article  class="mail-preview flex justify-content">
            <div class="email-readstatus"><img :src="isEmailReadToDisplay"></div>
            <div @click=" class="star-status"><img :src="isStarToDisplay"></div>
            <div class="email-date">{{dateTodisplay}}</div>
            <div class="email-sender">{{email.sender}}</div>
            <div class="email-subject">{{email.subject}}</div>
            <div class="email-body">{{bodyToDisplay}}</div>
        </article>
    `,
    data() {
        return {

        }
    },
    computed: {

        dateTodisplay() {
            return new Date(this.email.sentAt).toLocaleDateString('he')
        },

        bodyToDisplay() {
            return this.email.body.slice(0, 50);
        },
        isEmailReadToDisplay() {
            return (this.email.isRead) ? '../../img/read.svg' : '../../img/unread.svg';
        }


    }

};