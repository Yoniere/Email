/* <form @submit.prevent="save">

<div v-for="(note, idx) in notes.type">
  <component :is="notes.type"  :info="notes.info" @setVal="setAns($event, idx)"></component>

  </div>
</form> */