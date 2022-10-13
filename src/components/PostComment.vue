<template>
    <div class="comments">
        <h2>Comments</h2>
        <hr />
        <div class="form">
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div class="mb-3 row g-2">
                <div class="col-8">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email: name@example.com">
                </div>
                <div class="col-4">
                    <button class="cmt-btn">Post Comment</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostComment",
};
</script>

<style scoped>
h2 {
    font-size: 24px;
    color: #253b7c;
    font-family: "Samsung Sharp Sans Bold", sans-serif;
}

hr {
    color: #000;
    border: 1px solid #000 !important;
    background: rgba(37, 59, 124, 1);
}

.comments {
    margin-top: 40px;
}
textarea{
    border-color: #000 !important;
}
.cmt-btn{
    width: 100%;
    border-radius: 0px;
    border: none;
    font-size: 14px;
    line-height: 50px;
    color: #000;
    padding: 0px 20px;
    background-color: rgba(255, 216, 78, 1);
}
input{
    height: 50px;
    border-color: #000;
}
</style>
