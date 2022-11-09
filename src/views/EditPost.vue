<template>
    <div class="write">
        <div class="container">
            <h2>Write Article</h2>
            <p>{{ this.msg }}</p>
            <div class="mb-3">
                <input type="text" v-model="post.title" class="form-control" id="exampleFormControlInput1"
                    placeholder="Title">
            </div>
            <div class="mb-3">
                <textarea class="form-control" v-model="post.description" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Description"></textarea>
            </div>
            <div class="mb-3">
                    <div class="upload-btn-wrapper">
                        <button class="btn1">Upload Image</button><br>
                        <input type="file" ref="file" name="myfile" accept="image/*" @change="PreviewImage" />
                    </div>
                    <div class="image">
                        <img :src="src" alt="Admin">
                    </div>
            </div>
            <!-- <div class="mb-3">
                <div class="image">
                    <img :src="src">
                </div>
            </div> -->
            <div class="mb-3">
                <input type="text" v-model="post.tags" name="product_tags" class="form-control" required="">
            </div>
            <div class="mb-3">
                <!-- <TextEditor /> -->
                <div class="editor">
                    <quill-editor v-model:content="content" contentType="html" theme="snow" toolbar="full">
                    </quill-editor>
                </div>
            </div>
            <button class="btn" @click="updateArticle()">Post Now</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    name: "EditPost",
    components: {
        QuillEditor,
    },
    data() {
        return {
            post: [],
            src: "",
            content: '',
            thumbnail: "",
        }
    },
    methods: {
        PreviewImage(event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.src = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
                this.thumbnail = this.$refs.file.files[0];
            }
        },
        async updateArticle() {
            const user_id = localStorage.getItem("user_id");
            let formdata = new FormData();
            formdata.append("id",this.$route.params.id);
            formdata.append("title", this.post.title);
            formdata.append("description", this.post.description);
            formdata.append("thumbnail", this.thumbnail);
            formdata.append("tags", this.post.tags);
            formdata.append("content", this.content);
            const token = JSON.parse(localStorage.getItem('user'));
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            };
            const res = await axios.put("http://localhost:8000/post/update/" + user_id, formdata, { headers: headers });
            this.$router.push("/blog");
            this.msg = res.data.msg;
        }
    },
    async mounted() {
        const post_id = this.$route.params.id;
        const posts = await axios.get("http://localhost:8000/post/view/" + post_id);
        console.log(posts.data);
        this.post = posts.data;
        this.src = "http://localhost:8000/" + posts.data.thumbnail;
        this.content = posts.data.content;
        const editor = document.getElementsByClassName('ql-editor');
        editor[0].innerHTML = this.content;
    },

}
</script>

<style scoped>
.editor {
    height: 400px;
    display: inline-block;
}

.btn {
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    color: #fff;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 14px;
    width: 167px;
    font-weight: 600;
    margin-bottom: 50px;
}

h2 {
    font-size: 32px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
    margin-top: 30px;
    text-align: center;
}

.image{
    width: 200px;
}

.image img {
    width: 100%;
    overflow: hidden;
}
.upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
}

.btn1 {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

.upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}

button {
    cursor: pointer;
}
</style>
