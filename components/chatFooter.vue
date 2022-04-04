<template>
  <div class="fixed bottom-0 left-0 right-0 flex flex-col border-t-2 border-slate-100 p-4 bg-white shadow-lg shadow-slate-100">
    <div class="grid grid-cols-3 gap-3 mb-2">
      <button :class="`px-2 py-1 border-2 border-slate-300 rounded-lg text-center ${activeTabs === 'chat' ? 'border-sky-300 text-sky-300' : 'text-slate-300'}`" @click="activeTabs = 'chat'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      <button :class="`px-2 py-1 border-2 border-slate-300 rounded-lg text-center ${activeTabs === 'img' ? 'border-sky-300 text-sky-300' : 'text-slate-300'}`" @click="activeTabs = 'img'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>
      <button :class="`px-2 py-1 border-2 border-slate-300 rounded-lg text-center ${activeTabs === 'video' ? 'border-sky-300 text-sky-300' : 'text-slate-300'}`" @click="activeTabs = 'video'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
    <div class="flex flex-col" v-if="activeTabs === 'chat'">
      <input 
        placeholder="type your message..."
        type="text" 
        v-model="newMessage"
        class="mb-2 p-2 border-2 border-slate-200 rounded focus:border-sky-300 focus:outline-none hover:border-sky-300 transition ease-in-out duration-300"/> 
      <button class="bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="onSend">
        SEND
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-text-bottom inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
    <div v-else-if="activeTabs === 'img'">
      <label class="block" for="file">
        <input type="file" id="file" class="block w-full text-sm text-slate-500 mb-2
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-sky-50 file:text-sky-300
          file:border-sky-300
          hover:file:bg-sky-100"
          accept="image/*"
          @change="onChangeImg"
        />
      </label>
      <button class="w-full bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="onSendImg">
        SEND
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-text-bottom inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
    <div v-else>
      <label class="block" for="pdf">
        <input type="file" id="pdf" class="block w-full text-sm text-slate-500 mb-2
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-sky-50 file:text-sky-300
          file:border-sky-300
          hover:file:bg-sky-100"
          accept="pdf/*"
          @change="onChangePdf"
        />
      </label>
      <button class="w-full bg-sky-600 hover:bg-sky-800 p-2 transition ease-in-out duration-300 text-slate-100 rounded text-sm font-medium" @click="onSendPDF">
        SEND  
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-text-bottom inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'chatFooter',
  data: () => ({
    newMessage: '',
    activeTabs: 'chat',
    imgFile: null,
    pdfFile: null,
  }),
  methods: {
    onSend() {
      if (!!this.newMessage) this.$emit('onSend', this.newMessage);
      this.newMessage = '';
    },
    async onChangeImg(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgFile = e.target.result;
      };
      reader.readAsArrayBuffer(files[0]);
    },
    onChangePdf(event) {

    },
    onSendImg() {
      if (!!this.imgFile) this.$emit('onSendImg', this.imgFile);
      this.imgFile = '';
    },
    onSendPDF() {

    },
  }
}
</script>