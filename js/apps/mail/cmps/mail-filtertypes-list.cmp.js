export default {
    props: ['emails'],

    template: `
            <section>
                <button @click="filterByType('inbox')">Inbox</button>
                <button @click="filterByType('sent')" >Sent</button>
                <button @click="filterByType('draft')" >Draft</button>
                <button @click="filterByType('trash')" >Trash</button>
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