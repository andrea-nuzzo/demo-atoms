<template>
    <section class="flex flex-col justify-end pl-4 desktop:pl-10 pb-6 desktop:pb-11 bg-cover bg-center bg-no-repeat" :style="{ 'background-image': `url(${image})` }">

          <button-category :text="categoryText" />

          <h2 class=" text-white font-bold text-mob-m desktop:text-desk-s my-4 desktop:my-6 desktop:w-[50%]">{{ title }}</h2>

          <div class="flex items-center text-white">
            <img class="rounded-full w-8 desktop:w-12 mr-4" :src="avatar" :alt="author">
            <div class="flex flex-col">
              <p class="text-authors-name">Di {{ author }}</p>
              <app-date class="text-date-article" :timestamp="date"/>
            </div>
          </div>

        
        
    </section>
</template>

<script>
import AppDate from '../utils/AppDate.vue'
import ButtonCategory from './ButtonCategory.vue';
export default {
    name: 'Article',

    components: {
      AppDate,
      ButtonCategory,
    },

    props: {
    title:{
      required: false,
      type: String,
    },
    author:{
      required: false,
      type: String,
    },
    avatar:{
      required: false,
      type: String,
    },
    date:{
      required: false,
      type: Number,
    },
    category:{
      required: false,
      type: String,
    },
    categoryText:{
      required: false,
      type: String,
    },
    image:{
      required: false,
      type: String,
    }
  },

}
</script>