<template>
    <div class="comments">
        <div class="user">
            <div class="img">
                <img src="../assets/img/user.png">
            </div>
            <div class="info my-auto">
                <p class="mb-0">{{email}}</p>
                <span>{{date}}</span>
            </div>
        </div>
        <div class="comment-container">
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Comments",
        props:{
            email:String,
            date:String,
            msg:String
        }
    }
</script>

<style scoped>
    .user{
        display: flex;
    }
    .img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .info{
        margin-left: 20px;
        font-size: 12px;
    }
    .info p{
        font-size: 12px !important;
    }
    .comment-container{
        margin-top: 20px;
    }
    .comment-container p{
        font-size: 14px;
    }
</style>
