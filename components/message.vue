<template>
  <div v-if="isAdmin" class="flex flex-row justify-center italic text-slate-300 mb-2 text-sm">
    {{ message.text }} - {{ message.time }}
  </div>
  <div v-else :class="`flex flex-col mb-2 ${getClass.wrapper}`">
    <div :class="`w-9/12 py-2 px-4 rounded-lg break-words ${getClass.text}`">
      <WordType
        v-for="(word, index) in getWords"
        :key="index"
        :word="word"
        :isMe="isMe"
      />
    </div>
    <div class="w-9/12 text-right">
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
    },
    isAdmin: {
      type: Boolean,
    }
  },
  computed: {
    getWords() {
      return this.message.text.split(' ');
    },
    getClass() {
      return this.isMe ? { 
        wrapper: 'items-start',
        text: 'bg-white shadow-lg shadow-slate-200 text-slate-600 rounded-bl-none',
        name: 'text-slate-300',
        } : {
        wrapper: 'items-end text-right',
        text: 'bg-sky-600 shadow-lg shadow-sky-300 text-slate-100 rounded-br-none',
        name: 'text-sky-600',
        };
    },
  },
}
</script>