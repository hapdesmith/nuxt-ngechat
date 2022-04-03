<template>
  <div class="inline">
    <a :href="word" 
      target="_blank" 
      v-if="isMsgUrl"
      :class="`decoration-solid underline ${isMe ? 'text-sky-600 decoration-sky-600' : 'text-sky-200 decoration-sky-200'}`"
    >{{ word }}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-text-bottom inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
    <a :href="`mailto:${word}`" 
      target="_blank" 
      v-else-if="isMsgEmail"
      :class="`decoration-solid underline ${isMe ? 'text-rose-600 decoration-rose-600': 'text-rose-200 decoration-rose-200'}`"
    >{{ word }}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 align-text-bottom inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>
    <template v-else>
      {{ word }}
    </template>
  </div>
</template>
<script>
const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const emilRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export default {
  name: 'wordType',
  props: {
    word: {
      type: String,
      required: true,
    },
    isMe: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    isMsgUrl() {
      return urlRegex.test(this.word);
    },
    isMsgEmail() {
      return emilRegex.test(this.word);
    },
  }
}
</script>