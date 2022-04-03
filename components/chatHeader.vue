<template>
  <div class="fixed top-0 left-0 right-0 w-full p-4 bg-white shadow-lg shadow-slate-100 flex flex-row justify-between items-center">
    <div>
      <h1 class="text-sky-600 font-black text-xl">RUANG NGECHAT</h1>
      <!-- <span class="text-slate-400 text-sm mr-1">login as </span> -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span class="border-2 border-amber-400 px-3 py-0 text-slate-100 rounded-2xl bg-amber-400 text-sm font-medium">{{ username }}</span>
      <span class="text-slate-400 text-sm">·</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="border-2 border-amber-400 px-3 py-0 text-slate-100 rounded-2xl bg-amber-400 text-sm font-medium">{{ users }}</span>
    </div>
    <button @click="onLeave">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'chatHeader',
  props: {
    username: {
      type: String,
      required: true,
    },
    users: {
      type: Number,
      required: true,
    }
  },
  methods: {
    onLeave() {
      this.$emit('onLeave');
    }
  }
}
</script>
