<template>
    <div class="container">
        <div class="blog">
            <h2>All Blogs</h2>
            <TagsContainer />
            <div class="blogs">
                <div class="row">
                    <div class="col-md-4" v-for="n in 10">
                        <BlogArticleContainer />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import TagsContainer from '../components/TagsContainer.vue';
import BlogArticleContainer from '../components/BlogArticleContainer.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "BlogPage",
    components: {
        TagsContainer,
        BlogArticleContainer,
        Footer,
    },

}
</script>

<style scoped>
    .blog{
        width: 100%;
        height: auto;
        padding-bottom: 200px;
    }
h2 {
    font-size: 32px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
    margin-top: 30px;
    text-align: center;
}
</style>
