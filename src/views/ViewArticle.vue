<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <ViewArticleContainer :heading="post?.title" :thumbnail="post.thumbnail" :content="post.content" :tags="post.tags" :date = "post.created_at" :user_id="post.user_id"/>
                    <PostComment />
                    <div v-for="item in comments">
                        <Comments :email="item.email" :date="item.date" :msg="item.comment" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="tags">
                        <h2>Tags</h2>
                        <hr class="line" />
                        <span v-for="i in tags">
                            <Tags :name="i" />
                        </span>
                    </div>
                    <RecentPost/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ViewArticleContainer from "../components/ViewArticleContainer.vue";
import PostComment from "../components/PostComment.vue";
import Comments from "../components/Comments.vue";
import Tags from "../components/Tags.vue";
import RecentPost from "../components/RecentPost.vue";
import axios from "axios";
export default {
    name: "ViewArticle",
    components: {
        ViewArticleContainer,
        PostComment,
        Comments,
        Tags,
        RecentPost,
    },
    data() {
        return {
            comments: [
                {
                    email: "shoyebjio3398@gmail.com",
                    date: "32sept, 2021",
                    comment:
                        "This is the best article on the plannet. Hi. Please be wise, do not make the same mistake i had made in the past, i was a victim of bitcoin scam, i saw a glamorous review showering praises and marketing an investment firm, I reached out to them on what their contracts are, and I invested $17,000, which i was promised to get my first 15% profit in weeks, when it’s time to get my profits, I got to know the company was bogus, they kept asking me to invest more and i ran out of patience then requested to have my money back, they refused to answer nor refund my funds, not until a friend of mine introduced me to the WIZARD JAMES RECOVERY SERVICES, so I reached out and after tabling my complaints, they were swift to action and within 36 hours I got back my funds with the due profit. I couldn’t contain the joy in me. I urge you guys to reach out to WIZARD JAMES RECOVERY SERVICE on their support email: wizardjames8@yahoo.com and WhatsApp number: +1 (863) 254-2842. They provide excellent services.",
                },
                {
                    email: "sakilak388@gmail.com",
                    date: "32sept, 2021",
                    comment:
                        "This is the best article on the plannet. Hi. Please be wise, do not make the same mistake i had made in the past, i was a victim of bitcoin scam, i saw a glamorous review showering praises and marketing an investment firm, I reached out to them on what their contracts are, and I invested $17,000, which i was promised to get my first 15% profit in weeks, when it’s time to get my profits, I got to know the company was bogus, they kept asking me to invest more and i ran out of patience then requested to have my money back, they refused to answer nor refund my funds, not until a friend of mine introduced me to the WIZARD JAMES RECOVERY SERVICES, so I reached out and after tabling my complaints, they were swift to action and within 36 hours I got back my funds with the due profit. I couldn’t contain the joy in me. I urge you guys to reach out to WIZARD JAMES RECOVERY SERVICE on their support email: wizardjames8@yahoo.com and WhatsApp number: +1 (863) 254-2842. They provide excellent services.",
                },
                {
                    email: "shoyebjio3398@gmail.com",
                    date: "32sept, 2021",
                    comment:
                        "This is the best article on the plannet. Hi. Please be wise, do not make the same mistake i had made in the past, i was a victim of bitcoin scam, i saw a glamorous review showering praises and marketing an investment firm, I reached out to them on what their contracts are, and I invested $17,000, which i was promised to get my first 15% profit in weeks, when it’s time to get my profits, I got to know the company was bogus, they kept asking me to invest more and i ran out of patience then requested to have my money back, they refused to answer nor refund my funds, not until a friend of mine introduced me to the WIZARD JAMES RECOVERY SERVICES, so I reached out and after tabling my complaints, they were swift to action and within 36 hours I got back my funds with the due profit. I couldn’t contain the joy in me. I urge you guys to reach out to WIZARD JAMES RECOVERY SERVICE on their support email: wizardjames8@yahoo.com and WhatsApp number: +1 (863) 254-2842. They provide excellent services.",
                },
                {
                    email: "sakilak388@gmail.com",
                    date: "32sept, 2021",
                    comment:
                        "This is the best article on the plannet. Hi. Please be wise, do not make the same mistake i had made in the past, i was a victim of bitcoin scam, i saw a glamorous review showering praises and marketing an investment firm, I reached out to them on what their contracts are, and I invested $17,000, which i was promised to get my first 15% profit in weeks, when it’s time to get my profits, I got to know the company was bogus, they kept asking me to invest more and i ran out of patience then requested to have my money back, they refused to answer nor refund my funds, not until a friend of mine introduced me to the WIZARD JAMES RECOVERY SERVICES, so I reached out and after tabling my complaints, they were swift to action and within 36 hours I got back my funds with the due profit. I couldn’t contain the joy in me. I urge you guys to reach out to WIZARD JAMES RECOVERY SERVICE on their support email: wizardjames8@yahoo.com and WhatsApp number: +1 (863) 254-2842. They provide excellent services.",
                },
                {
                    email: "shoyebjio3398@gmail.com",
                    date: "32sept, 2021",
                    comment:
                        "This is the best article on the plannet. Hi. Please be wise, do not make the same mistake i had made in the past, i was a victim of bitcoin scam, i saw a glamorous review showering praises and marketing an investment firm, I reached out to them on what their contracts are, and I invested $17,000, which i was promised to get my first 15% profit in weeks, when it’s time to get my profits, I got to know the company was bogus, they kept asking me to invest more and i ran out of patience then requested to have my money back, they refused to answer nor refund my funds, not until a friend of mine introduced me to the WIZARD JAMES RECOVERY SERVICES, so I reached out and after tabling my complaints, they were swift to action and within 36 hours I got back my funds with the due profit. I couldn’t contain the joy in me. I urge you guys to reach out to WIZARD JAMES RECOVERY SERVICE on their support email: wizardjames8@yahoo.com and WhatsApp number: +1 (863) 254-2842. They provide excellent services.",
                },
                {
                    email: "sakilak388@gmail.com",
                    date: "32sept, 2021",
                    comment:
                        "This is the best article on the plannet. Hi. Please be wise, do not make the same mistake i had made in the past, i was a victim of bitcoin scam, i saw a glamorous review showering praises and marketing an investment firm, I reached out to them on what their contracts are, and I invested $17,000, which i was promised to get my first 15% profit in weeks, when it’s time to get my profits, I got to know the company was bogus, they kept asking me to invest more and i ran out of patience then requested to have my money back, they refused to answer nor refund my funds, not until a friend of mine introduced me to the WIZARD JAMES RECOVERY SERVICES, so I reached out and after tabling my complaints, they were swift to action and within 36 hours I got back my funds with the due profit. I couldn’t contain the joy in me. I urge you guys to reach out to WIZARD JAMES RECOVERY SERVICE on their support email: wizardjames8@yahoo.com and WhatsApp number: +1 (863) 254-2842. They provide excellent services.",
                },
            ],
            tags: [
                'c++', 'JAVA', 'Web Developemt'
            ],
            post:[],
        };
    },
    async mounted(){
            try {
                const url= "http://localhost:8000/post/view/"+this.$route.params.id;
                const article = await axios.get(url);
                this.post = article.data;
            } catch (error) {
                console.log(error);
            }
        }
};
</script>

<style scoped>
.tags {
    margin-top: 75px;
}

h2 {
    font-size: 24px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
}
</style>
