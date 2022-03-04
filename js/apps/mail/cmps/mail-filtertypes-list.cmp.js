export default {
    props: ['emails'],

    template: `
            <section>
                <div @click="filterByType('inbox')">Inbox</div>
                <div @click="filterByType('sent')" >Sent</div>
                <div @click="filterByType('draft')" >Draft</div>
                <div @click="filterByType('trash')" >Trash</div>
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