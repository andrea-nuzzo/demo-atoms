<template>
    <router-link to="/">
        <button class="shadow-primary uppercase text-categories font-bold border border-1 border-black rounded" :class="category ? `bg-cat-${category} px-4 py-3` : 'bg-white py-1 px-3'">
            {{ text }}
        </button>
    </router-link>
</template>

<script>
export default {
    name: 'ButtonCategory',

    props: {
    category:{
      required: false,
      type: String,
    },
    text:{
      required: true,
      type: String,
    },
  },
}
</script>