<template>
  <div v-if="isAdmin" class="flex flex-row justify-center italic text-stone-300 mb-2 text-sm">
    {{ message.text }} - {{ message.time }}
  </div>
  <div v-else :class="`flex flex-row flex-wrap mb-2 ${getClass.wrapper}`">
    <div :class="`w-9/12 py-2 px-4 rounded-lg break-words ${getClass.text}`">
      {{ message.text }}
    </div>
    <div>
      <span :class="`text-sm ${getClass.name}`">{{ message.name }}</span>
      <span class="text-xs text-stone-300 italic">- {{ message.time }}</span>
    </div>
  </div>
</template>
<script>
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
    getClass() {
      return this.isMe ? { 
        wrapper: 'justify-start',
        text: 'bg-sky-600 text-stone-100',
        name: 'text-sky-600',
        } : {
        wrapper: 'justify-end text-right',
        text: 'bg-stone-100 text-stone-600',
        name: 'text-stone-600',
        };
    },
  },
}
</script>