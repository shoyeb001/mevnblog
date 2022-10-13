<template>
    <div class="write">
        <div class="container">
            <h2>Write Article</h2>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title">
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
            </div>
            <div class="mb-3">
                <input type="file" class="form-control" id="exampleFormControlInput1" placeholder="Title">
            </div>
            <div class="mb-3">
                <input type="text" name="product_tags" class="form-control"
                                                            value="Lorem,Ipsum,Amet" data-role="tagsinput" required="">
            </div>
            <div class="mb-3">
                <TextEditor />
            </div>

           
            <button class="btn">Post Now</button>
            
        </div>
    </div>
</template>

<script>
import TextEditor from '../components/TextEditor.vue';
export default {
    name: "Write",
    components: {
        TextEditor,
    }
}
</script>

<style scoped>
.btn{
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    color: #fff;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 14px;
    width: 167px;
    font-weight:600;
    margin-bottom: 50px;
}
h2{
    font-size: 32px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
    margin-top: 30px;
    text-align: center;
}
</style>
