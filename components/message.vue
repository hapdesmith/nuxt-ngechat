<template>
  <div v-if="isAdmin" class="flex flex-row justify-center italic text-slate-300 mb-2 text-sm">
    {{ message.text }} - {{ message.time }}
  </div>
  <div v-else :class="`flex flex-col mb-2 ${getClass.wrapper}`">
    <div :class="`w-9/12 py-2 px-4 rounded-lg break-words ${getClass.text}`">
      <a :href="message.text" 
        target="_blank" 
        v-if="isMsgUrl"
        class="decoration-solid text-sky-600 decoration-sky-600"
      >{{ message.text }}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-text-bottom inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <template v-else>
        {{ message.text }}
      </template>
    </div>
    <div class="w-9/12 text-right">
      <span :class="`text-sm ${getClass.name}`">{{ message.name }}</span>
      <span class="text-xs text-slate-300 italic">- {{ message.time }}</span>
    </div>
  </div>
</template>
<script>
const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
export default {
  name: 'message',
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
    isMsgUrl() {
      return urlRegex.test(this.message.text);
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