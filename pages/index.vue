<template>
  <div class="flex flex-col w-full font-sans text-stone-600 px-4 py-4">
    <div class="flex flex-col w-full font-sans text-stone-600">
      <input 
          placeholder="your username..."
          type="text" 
          v-model="username"
          class="mb-2 p-2 border-2 rounded focus:border-sky-600 hover:border-sky-600 transition ease-in-out duration-300"/> 
      <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-stone-100 rounded text-sm font-medium" @click="join">ENTER</button>
    </div>
    <h1>MIG33 Chat Room</h1>
    <p v-for="(message, index) in messages" :key="`message-${index}`">
      {{ message.text }} - {{ message.name }}
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
    username: '',
  }),
  computed: {
    ...mapState(["user", "users", "messages"]),
  },
  methods: {
    ...mapActions([ "createUser", "createMessage"]),
    send() {
      if (!!this.newMessage) this.createMessage(this.newMessage);
      this.newMessage = '';
    },
    join() {
      if (!!this.username) this.createUser({ name:this.username });
    }
  }
}
</script>

<style>
</style>
