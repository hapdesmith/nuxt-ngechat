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
        class="mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 focus:outline-none hover:border-sky-300 transition ease-in-out duration-300"/> 
      <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="join">
        ENTER CHAT ROOM
      </button>
    </div>
    <div class="flex flex-col w-screen h-screen bg-slate-50" ref="body" v-else>
      <ChatHeader 
        :username="username"
        :users="users.length"
        @onLeave="leave"
      />
      <div class="p-4 chat-wrapper flex flex-col" ref="messageBox">
        <Message 
          v-for="(message, index) in messages" :key="`message-${index}`"
          :message="message" 
          :isMe="message.id === user.id" 
          :isSystem="message.name === 'system'"
          :isAdmin="message.name === 'admin'"
          @onDeleteMsg="deleteMsg"
         />
      </div>
      <ChatFooter
        @onSend="send"
        @onSendImg="sendImg"
        @onSendPdf="sendPdf"
      />
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import Message from '@/components/message';
import ChatHeader from '@/components/chatHeader';
import ChatFooter from '@/components/chatFooter';

export default {
  name:'chat',
  components: {
    Message,
    ChatHeader,
    ChatFooter,
  },
  data: () => ({
    username: '',
    shouldLogin: true,
  }),
  computed: {
    ...mapState(['user', 'users', 'messages']),
  },
  watch: {
    messages() {
      setTimeout(() => {
        if (this.$refs.messageBox) {
          this.$refs.messageBox.scrollTop = this.$refs.messageBox.scrollHeight;
        }
      }, 500);
    },
  },
  methods: {
    ...mapActions([ 'createUser', 'createMessage', 'leaveRoom', 'createImg', 'createPdf', 'deleteMessage']),
    send(message) {
      this.createMessage(message);
      this.scrollToBot();
    },
    sendImg(img) {
      this.createImg(img);
      this.scrollToBot();
    },
    sendPdf(pdf) {
      this.createPdf(pdf);
      this.scrollToBot();
    },
    deleteMsg(msg) {
      this.deleteMessage(msg);
    },
    join() {
      if (!!this.username) {
        this.createUser({ name:this.username });
        this.shouldLogin = false;
      }
    },
    leave() {
      this.leaveRoom();
      this.username = '';
      this.shouldLogin = true;
    },
    scrollToBot() {
      const y = this.$refs.body;
      window.scrollTo(0, y);
    }
  }
}
</script>
<style scoped>
.chat-wrapper {
  margin-top: 84px;
  overflow: auto;
  height: calc(100vh - 244px);
}
</style>