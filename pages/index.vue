<template>
  <div class="flex flex-col w-screen font-sans text-slate-600">
    <div class="p-4 flex flex-col justify-center w-screen h-screen" v-if="shouldLogin">
      <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-5xl font-black mb-4">
        NGECHAT
      </h1>
      <input 
        placeholder="your username..."
        type="text" 
        v-model="username"
        class="mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 hover:border-sky-300 transition ease-in-out duration-300"/> 
      <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="join">ENTER CHAT ROOM</button>
    </div>
    <div class="flex flex-col w-screen h-screen bg-slate-50" v-else>
      <div class="fixed top-0 left-0 right-0 w-full p-4 bg-white shadow-lg shadow-slate-100">
        <h1 class="text-sky-600 font-black text-xl">CHAT ROOM</h1>
        <span class="text-slate-400 text-sm mr-1">login as </span><span class="border-2 border-amber-400 px-3 py-0 text-slate-100 rounded-2xl bg-amber-400 text-sm font-medium">{{ username }}</span>
      </div>
      <div class="p-4 chat-wrapper">
        <Message 
          v-for="(message, index) in messages" :key="`message-${index}`"
          :message="message" 
          :isMe="message.id === user.id" 
          :isAdmin="message.name === 'admin'"/>
      </div>
      <div class="fixed bottom-0 left-0 right-0 flex flex-col border-t-2 border-slate-100 p-4 bg-white shadow-lg shadow-slate-100">
        <input 
          placeholder="type your message..."
          type="text" 
          v-model="newMessage"
          class="mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 hover:border-sky-300 transition ease-in-out duration-300"/> 
        <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="send">SEND</button>
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
      if (!!this.username) {
        this.createUser({ name:this.username });
        this.shouldLogin = false;
      }
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