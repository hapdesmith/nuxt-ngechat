<template>
  <div class="flex flex-col w-screen font-sans text-stone-600">
    <div class="flex flex-col w-screen h-screen p-4" v-if="shouldLogin">
      <input 
          placeholder="your username..."
          type="text" 
          v-model="username"
          class="mb-2 p-2 border-2 rounded focus:border-sky-600 hover:border-sky-600 transition ease-in-out duration-300"/> 
      <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-stone-100 rounded text-sm font-medium" @click="join">ENTER CHAT ROOM</button>
    </div>
    <div class="flex flex-col w-screen h-screen" v-else>
      <div class="fixed top-0 left-0 right-0 w-full p-4 bg-sky-600">
        <h1 class="text-stone-100 font-bold text-lg">CHAT ROOM</h1>
        <span class="text-stone-100 text-sm">you login as </span><span class="text-yellow-300 text-sm font-medium italic">{{ username }}</span>
      </div>
      <div class="p-4 chat-wrapper">
        <Message 
          v-for="(message, index) in messages" :key="`message-${index}`"
          :message="message" 
          :isMe="message.id === user.id" 
          :isAdmin="message.name === 'admin'"/>
      </div>
      <div class="fixed bottom-0 left-0 right-0 flex flex-col border-t-2 border-stone-100 p-4 bg-stone-100">
        <input 
          placeholder="type your message..."
          type="text" 
          v-model="newMessage"
          class="mb-2 p-2 border-2 rounded focus:border-sky-600 hover:border-sky-600 transition ease-in-out duration-300"/> 
        <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-stone-100 rounded text-sm font-medium" @click="send">SEND</button>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
import Message from "@/components/message";

export default {
  name:'chat',
  components: {
    Message,
  },
  data: () => ({
    newMessage: '',
    username: '',
    shouldLogin: true,
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
      this.shouldLogin = false;
    }
  }
}
</script>
<style scoped>
.chat-wrapper {
  margin-top: 84px;
  overflow: auto;
  height: calc(100vh - 206px);
}
</style>