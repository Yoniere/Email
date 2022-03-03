

export default {
    template: `
        <section class="note-filter">
        <form action="" type="submit">
            <label>
            note opt:
            <input type="text" v-model="filterBy.type" placeholder="Search..."> 
            </label>
          
            <button @click.prevent="setFilter">Search</button>
            </form>
        </section>
    `,
    data() {
        return {
            filterBy: {
                type: '',

            },
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}