

export default {
    props: ['notes'],
    template: `
        <section class="note-filter">
                <!-- <form type="submit"> -->

            <!-- <label>
            note opt:
            <input type="text" v-model="filterBy.type" placeholder="Search..."> 
            </label> -->

            <!-- <label> -->
                <!-- {{type.info}} -->
                <select  v-model="filterBy.type" @change="setFilter">
                <option v-for="note in notes">{{note.type}}</option>

                </select>
            <!-- </label>   -->
                   
            <!-- <button @click.prevent="setFilter">Search</button> -->
            <!-- </form> -->
        </section>
    `,

    data() {
        return {
            filterBy: {
                type: ''

            },


        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
            console.log('this.filterBy', this.filterBy);
        }
    }
}


// @change="reportVal"