<template>
  <div class="fixed bottom-0 left-0 right-0 flex flex-col border-t-2 border-slate-100 p-4 bg-white shadow-lg shadow-slate-100">
    <input 
      placeholder="type your message..."
      type="text" 
      v-model="newMessage"
      class="mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 focus:outline-none hover:border-sky-300 transition ease-in-out duration-300"/> 
    <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="onSend">SEND</button>
  </div>
</template>
<script>
export default {
  name: 'chatFooter',
  data: () => ({
    newMessage: '',
  }),
  methods: {
    onSend() {
      if (!!this.newMessage) this.$emit('onSend', this.newMessage);
      this.newMessage = '';
    }
  }
}
</script>