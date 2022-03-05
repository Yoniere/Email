export default {
    props: ['emails'],

    template: `
            <section class="filter-types-area">
                <div class="flex" @click="filterByType('inbox')"><img src="../../img/inbox.svg"><span>Inbox</span></div>
                <div class="flex" @click="filterByType('sent')" ><img src="../../img/sent.svg"><span>Sent</span></div>
                <div class="flex" @click="filterByType('star')" ><img src="../../img/full-star.svg"><span>Marked</span></div>
                <div class="flex" @click="filterByType('draft')" ><img src="../../img/draft.svg"><span>Draft</span></div>
                <div class="flex" @click="filterByType('trash')" ><img src="../../img/trash.svg"><span>Trash</span></div>
            </section>
    `,
    data() {
        return {}
    },
    created() {


    },
    methods: {
        filterByType(type) {
            this.$emit('filterByType', type)
        }

    },

    computed: {

    },
    components: {

    }
};