<template>
  <div class="flex flex-col w-full font-sans text-stone-600 px-4 py-4">
    <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-stone-100 rounded text-sm font-medium" @click="create">CREATE</button>
    <h1>chat app - {{ user.room }} - {{ user.name }} - {{ users }}</h1>
    <p v-for="(message, index) in messages" :key="`message-${index}`">
      {{ message }}
    </p>
    <div class="flex flex-col mb-4">
      <input 
        placeholder="type your message..."
        type="text" 
        v-model="newMessage"
        class="mb-2 p-2 border-2 rounded focus:border-sky-600 hover:border-sky-600 transition ease-in-out duration-300"/> 
      <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-stone-100 rounded text-sm font-medium" @click="send">SEND</button>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name:'chat',
  data: () => ({
    newMessage: '',
  }),
  computed: {
    ...mapState(["user", "users", "messages"]),
  },
  methods: {
    ...mapActions([ "createUser", "createMessage"]),
    send() {
      this.createMessage(this.newMessage);
      this.newMessage = "";
    },
    create() {
      const user = {
        name: "agung" + new Date().toString().slice(16, 24),
        room: "agung-1",
      };
      this.createUser(user);
    }
  }
}
</script>

<style>
</style>
