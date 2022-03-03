

export default {
    template: `
        <section class="note-filter">
        <form action="" type="submit">
            <label>
            note opt:
            <input type="text" v-model="filterBy.title" placeholder="Search..."> 
            </label>
          
            <button @click.prevent="setFilter">Search</button>
            </form>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',

            },
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}