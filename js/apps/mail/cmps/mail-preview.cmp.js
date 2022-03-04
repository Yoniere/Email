export default {
    props: ['email'],

    template: `
        <article class="mail-preview flex justify-content">
            <div class="email-sender">{{email.sender}}</div>
            <div class="email-subject">{{email.subject}}</div>
            <div class="email-body">{{bodyToDisplay}}</div>

            <div class="email-readstatus">{{email.isRead}}</div>
            <div class="email-date">{{dateTodisplay}}</div>
            
        </article>
    `,
    data() {
        return {

        }
    },
    computed: {

        dateTodisplay() {
            return new Date(this.email.sentAt)
        },

        bodyToDisplay() {
            return this.email.body.slice(0, 25);
        }
    }

};