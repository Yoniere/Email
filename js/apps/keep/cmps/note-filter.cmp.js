// import { eventApp } from '../../../main-services/eventapp-service.js';

export default {
    props: ['notes'],
    template: `
      
         <section class="note-filter">
                <input type="text"
                placeholder="Search notes..."
                v-model="filterBy.type"
                @input="setFilterByType"/>
        </section>

    `,
    data() {
        return {

            filterBy: {
                type: '',
            }
        };
    },
    methods: {
        setFilterByType() {
            this.$emit('filtered', this.filterBy)
        },



    },

}