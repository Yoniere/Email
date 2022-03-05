export default {
    props: ['email'],

    template: `
        <article  class="mail-preview flex justify-content">
            <div class="email-readstatus"><img :src="isEmailReadToDisplay"></div>
            <div @click="getStarClick" class="star-status"><img :src="isStarToDisplay">star</div>
            <div class="email-date">{{dateTodisplay}}</div>
            <div class="email-sender">{{email.sender}}</div>
            <div class="email-subject">{{email.subject}}</div>
            <div class="email-body">{{bodyToDisplay}}</div>
        </article>
    `,
    data() {
        return {

            isstar: false

        }
    },
    methods: {
        getStarClick() {
            this.email.isStar = !this.email.isStar
            this.$emit('isStared', this.email)
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