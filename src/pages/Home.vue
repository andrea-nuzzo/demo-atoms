<template>
    <button-category :text="'ambiente'" :category="'environment'" />

    <Article class="max-h-[506px] h-[506px]" 
    :title="articles[0].title"
    :author="userArticles(articles[0].userId).name"
    :avatar="userArticles(articles[0].userId).avatar"
    :date="articles[0].publishedAt"
    :category="articles[0].category"
    :category-text="articles[0].categoryText"
    :image="articles[0].image"
    />

    <!-- First Section Articles -->
    <div class="grid grid-cols-1 desktop:grid-cols-2 desktop:grid-rows-2 max-h-[845px] h-[845px]">

        <Article v-for="(article, index) in articles.slice(1,4)" :key="index"
        :title="article.title"
        :author="userArticles(article.userId).name"
        :avatar="userArticles(article.userId).avatar"
        :date="article.publishedAt"
        :category="article.category"
        :category-text="article.categoryText"
        :image="article.image"
        :class="index === 0 ? 'desktop:row-span-2' : ''"
        class="border border-1 border-white"
        />
        <!-- <article class="desktop:row-span-2"/>
        <div class="bg-violet-500 "></div>
        <div class="bg-green-500"></div> -->
    </div>

    <!-- Banner -->
    <div class="h-[214px]">Il tuo supporto</div>

     <!-- Second Section Articles -->
     <div class="grid grid-cols-1 desktop:grid-cols-3 desktop:grid-rows-2 max-h-[845px] h-[845px]">
        <Article v-for="(article, index) in articles.slice(4,10)" :key="index"
        :title="article.title"
        :author="userArticles(article.userId).name"
        :avatar="userArticles(article.userId).avatar"
        :date="article.publishedAt"
        :category="article.category"
        :category-text="article.categoryText"
        :image="article.image"
        :class="index === 4 ? 'desktop:col-span-2' : ''"
        class="border border-1 border-white"
        />
        <!-- <div class="bg-pink-500"></div>
        <div class="bg-violet-500 "></div>
        <div class="bg-green-500"></div>
        <div class="bg-purple-500 "></div>
        <div class="bg-blue-500 desktop:col-span-2"></div> -->
    </div>


    <!-- Banner -->
    <banner-daily-quote :text="'Essere troppo seri non è cosa molto seria'"  :author="'Detto Africano'" :image="'https://s3-alpha-sig.figma.com/img/93be/d634/e8c8234062df3f792a0d9928926e5f47?Expires=1675641600&Signature=j4gCM-v6w7Z9YwPlL5KCHZqN1iGYdSKiflfcsu1wSjqlxRrHyUudPSgHaUZ6VjBqFTU9c~84QngeAdTL6QcBtmDuVqTtRcamSF-rI0jMYuNlHVEJfrRIeWv3DW3-na3JBQ1EFwUfW0DxkkZbQtv9y87x89vmQse4U-8WqfrOSkYIKAtJzNkFDYYXsbqFPocbiJX-U83soFTMhhSnifBTOzDM-BXhP-7z6bF7FZgx0FmtC0bFqfXvBeyE6gzpR6NDZHY8AYofCunE~-2LSrC7dBpzqz4Wrywobv2NemJntkCXMKdUY8cdUmkGTVL~EzcE1eyApHcMrom82gREmTeKbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'"/>

    <!-- Blog -->
    <banner-blog />

    <!-- Second Article punta -->
    <div class="bg-red-500 max-h-[506px] h-[506px]"> Articolo di punta</div>

    <!-- Third Section Articles -->
    <div class="grid grid-cols-1 desktop:grid-cols-4 max-h-[372px] h-[372px]">
        <div class="bg-pink-500"></div>
        <div class="bg-violet-500 "></div>
        <div class="bg-green-500"></div>
        <div class="bg-purple-500 "></div>
    </div>

    <!-- Fourt Section Articles -->
    <div class="hidden desktop:grid desktop:grid-cols-2 desktop:grid-rows-4  max-h-[746px] h-[746px]">
        <div class="bg-pink-500 col-start-1 col-end-2"> More</div>
        <div class="bg-violet-500 col-start-1 col-end-2"> MOre</div>
        <div class="bg-green-500 col-start-1 col-end-2">More</div>
        <div class="bg-yellow-500 col-start-1 col-end-2">More</div>
        <div class="bg-blue-500 col-start-2 row-start-1 row-end-5"> Omre</div>
    </div>
       
   
</template>

<script>
import BannerBlog from '../components/partials/Banner/BannerBlogs.vue'
import BannerDailyQuote from '../components/partials/Banner/BannerDailyQuote.vue'
import ButtonCategory from '../components/partials/ButtonCategory.vue'
import Article from '../components/partials/Article.vue'


export default {
    name: 'Home',
    components: {
        BannerBlog,
        BannerDailyQuote,
        ButtonCategory,
        Article,
    },

    

    computed:{

        articles(){
        return this.$store.state.articles
        },

        users(){
        return this.$store.state.users
        },
    },

    methods: {
        userArticles(userId){
            return this.users.find(user => user.id === userId);
        }
    },
}
</script>
