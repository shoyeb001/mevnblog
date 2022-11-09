<template>
    <div>
        <div class="container">
            <div class="blog">
                <h2>Result For : {{name}}</h2>
                <TagsContainer />
                <div class="blogs">
                    <div class="row">
                        <div class="col-md-4" v-for="items in blog">
                            <BlogArticleContainer :heading="items.title" :description="items.description"
                                :thumbnail="items.thumbnail" :tags="items.tags[0]" :id="items._id"
                                :user_id="items.user_id" :date="items.created_at" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import TagsContainer from '../components/TagsContainer.vue';
import BlogArticleContainer from '../components/BlogArticleContainer.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
export default {
    name: "SearchPage",
    components: {
        TagsContainer,
        BlogArticleContainer,
        Footer,
    },
    data() {
        return {
            blog: [],
            author: [],
            name:"",
        }
    },
    async mounted() {
        try {
            const name = this.$route.query.name;
            const posts = await axios.get("http://localhost:8000/post/search/" + name);
            this.blog = posts.data;
            this.name = name;
        } catch (error) {
            console.log(error);
        }
    },
    watch: {
        async $route() {
            try {
                const name = this.$route.query.name;
                const posts = await axios.get("http://localhost:8000/post/search/" + name);
                this.blog = posts.data;
                this.name=name;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.blog {
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
