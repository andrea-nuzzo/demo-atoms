<template>
<section class="flex items-center min-h-[154px] desktop:min-h-[247px] bg-cover bg-center bg-no-repeat" :class="image === '' ? 'bg-primary-red' : '' " :style="{ 'background-image': `url(${image})` }">
    <div class="relative ml-[60px] desktop:ml-[150px]">
        <svg class="absolute top-0 left-[-16px] desktop:left-[-32px] transform translate-x-[-100%] translate-y-[-50%]" width="55" height="44" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.89 0L16.15 20.74H22.95V43.69H0V20.4L6.12 0H19.89ZM51.85 0L48.11 20.74H54.91V43.69H31.96V20.4L38.08 0H51.85Z" fill="white" fill-opacity="0.1"/>
        </svg>
        <div>
            <p class="text-mob-l desktop:text-desk-l text-primary-black desktop:text-white">{{text}}</p>
            <p class="mt-[6px] text-mob-xs desktop:text-mob-s text-primary-black desktop:text-white">[{{author}}]</p>
        </div>
    </div>
</section>
</template>

<script>

export default {
    name: 'BannerDailyQuote',

    props: {
    text:{
      required: true,
      type: String,
    },
    author:{
      required: true,
      type: String,
    },
    image:{
      required: true,
      type: String,
    }
  },

  mounted(){
    console.log(this.image)
  },
}
</script>