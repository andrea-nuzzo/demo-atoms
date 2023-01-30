<template>
    <section class="grid grid-cols-2 desktop:grid-cols-6 divide-x divide-y desktop:divide-y-0 divide-black">

        <div class="text-primary-red font-bold text-mob-l desktop:text-desk-l flex justify-center items-center border-t border-black desktop:border-none">Il Blog</div>

        <div v-for="(blog, index) in blogs" :key="index">

            <!-- Last Blog ++ Desktop ++ -->
            <router-link to="/" href="#" v-if="width >= desktop && index == 4" class="flex flex-col justify-center items-center py-6 ">

                <img class="rounded-full w-[64px] desktop:w-[84px] mb-6" :src="userArticles(blog.userId).avatar" :alt="userArticles(blog.userId).name" />
                
                <p class="font-bold text-mob-s desktop:text-desk-xs">{{ blog.title }}</p>
                <p class="text-authors-name">Di {{ userArticles(blog.userId).name }}</p>
            </router-link>

            <!-- Router Link All Blogs ++ Mobile ++ -->
            <router-link to="/" class="h-full flex flex-col justify-center items-center font-bold" href="#" v-else-if="width < desktop && index == 4"> 
                Tutti i Blog
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 7.47L10.05 0.469996C9.85708 0.282431 9.57875 0.212038 9.31985 0.285332C9.06095 0.358627 8.86082 0.564474 8.79485 0.825333C8.72888 1.08619 8.80708 1.36243 9 1.55L14.71 7.25H1.48C1.06579 7.25 0.730003 7.58578 0.730003 8C0.730003 8.41421 1.06579 8.75 1.48 8.75H14.7L9 14.45C8.85706 14.5893 8.77643 14.7804 8.77643 14.98C8.77643 15.1796 8.85706 15.3707 9 15.51C9.13785 15.6546 9.33025 15.7345 9.53 15.73C9.72907 15.7309 9.92012 15.6516 10.06 15.51L17.06 8.51C17.3525 8.21718 17.3525 7.74281 17.06 7.45L17.05 7.47Z" fill="#0B1C3F"/>
                </svg>
            </router-link>

            <router-link to="/" href="#" v-else class="flex flex-col justify-center items-center py-6">
                <img class="rounded-full w-[64px] desktop:w-[84px] mb-6" :src="userArticles(blog.userId).avatar" :alt="userArticles(blog.userId).name" />
                <p class="font-bold text-mob-s desktop:text-desk-xs">{{ blog.title }}</p>
                <p class="text-authors-name"> Di {{ userArticles(blog.userId).name }}</p>
            </router-link>

        </div>
    </section>

</template>

<script>
export default {
    name: 'BannerBlogs',

    data () {
    return {
      desktop: 1440,
      width: 0
    }
  },

    computed:{

      blogs(){
        return this.$store.state.blogs.slice(0,5)
      },

      users(){
        return this.$store.state.users
      },
    },

    /* ==========
       I keep listening to the size component from the window so I can keep the odd blog with the link to all the blogs
     ==========*/
    mounted () {
      this.width = window.innerWidth
      window.addEventListener('resize', this.handleResize)
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    },

    methods: {
      handleResize () {
      this.width = window.innerWidth
      },

      userArticles(userId){
          return this.users.find(user => user.id === userId);
      }
    }
}
</script>