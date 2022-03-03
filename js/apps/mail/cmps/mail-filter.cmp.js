export default {

    template: `
        <section>
            <input type="text" placeholder="search" @input="setFilterByName" v-model="filterBy.text">
            <button @click="setFilterByRead(true)">Read</button>
            <button @click="setFilterByRead(false)">Unread</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                isRead: null,
            }
        }
    },
    created() {},

    mounted() {

    },
    methods: {
        setFilterByName() {
            this.$emit('filtered', this.filterBy)
        },
        setFilterByRead(TrueOrFalse) {
            this.filterBy.isRead = TrueOrFalse;
            // console.log(this.filterBy.isRead)
            this.$emit('filtered', this.filterBy)
        }

    },

    computed: {

    },

};