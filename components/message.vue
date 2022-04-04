<template>
  <div v-if="isSystem" class="flex flex-row justify-center italic text-slate-300 mb-2 text-sm">
    {{ message.content }} - {{ message.time }}
  </div>
  <div v-else-if="isAdmin" class="w-[80%] flex flex-col text-slate-300 mb-2 items-end text-right self-end">
    <div class="w-full py-2 px-4 rounded-lg break-words bg-emerald-600 shadow-lg shadow-emerald-300 text-slate-100 rounded-br-none">
      <WordType
        v-for="(word, index) in getWords"
        :key="index"
        :word="word"
        :isMe="false"
      />
    </div>
    <div class="w-full text-right">
        <span :class="`text-sm text-emerald-600`">{{ message.name }}</span>
        <span class="text-xs text-slate-300 italic">- {{ message.time }}</span>
      </div>
  </div>
  <div v-else :class="`w-[80%] flex flex-col mb-2 ${getClass.wrapper}`">
    <div :class="`w-full py-2 px-4 rounded-lg break-words ${getClass.text}`">
      <template v-if="isText">
        <WordType
          v-for="(word, index) in getWords"
          :key="index"
          :word="word"
          :isMe="isMe"
        />
      </template>
      <img :src="getBufferString" v-else-if="isImage" class="w-full"/>
      <embed :src="getBufferString" v-else class="w-full h-[30vh]" />
    </div>
    <div class="w-full text-right">
        <span :class="`text-sm ${getClass.name}`">{{ message.name }}</span>
        <span class="text-xs text-slate-300 italic">- {{ message.time }}</span>
      </div>
  </div>
</template>
<script>
import WordType from '@/components/wordType';

export default {
  name: 'message',
  components: {
    WordType,
  },
  props: {
    message: {
      type: Object,
      default: () => {},
    },
    isMe: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSystem: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    isText() {
      return this.message.type === 'text';
    },
    isImage() {
      return this.message.type === 'image';
    },
    isDocument() {
      return this.message.type === 'pdf'
    },
    getWords() {
      if (!this.isText) return;
      return this.message.content.split(' ');
    },
    getBufferString() {
      return {
        image: 'data:image/jpeg;base64,',
        pdf: 'data:application/pdf;base64,',
      }[String(this.message.type)] + Buffer.from(this.message.content, 'binary').toString('base64');
    },
    getClass() {
      return this.isMe ? { 
        wrapper: 'items-start',
        text: 'bg-white shadow-lg shadow-slate-200 text-slate-600 rounded-bl-none',
        name: 'text-slate-300',
        } : {
        wrapper: 'items-end text-right self-end',
        text: 'bg-sky-600 shadow-lg shadow-sky-300 text-slate-100 rounded-br-none',
        name: 'text-sky-600',
        };
    },
  },
}
</script>