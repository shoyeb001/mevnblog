<template>
    <div class="tags">
        <span v-for="i in tags">
            <Tags class="tagsitems" @click="Changetag(i)" :name="i"/>
        </span>
    </div>
</template>

<script>
   import Tags from "./Tags.vue";
    export default {
        name:"TagsContainer",
        props:{
            SetTag: Function,
        },
        components:{
            Tags,
        },
        data(){
            return{
                tags:[
                    "C++", "JAVA", "Python", "C Programming", "Web Development", "Web Design", "Machine Learning"
                ]
            }
        },
        methods:{
            Changetag(item){
                console.log(item);
                this.SetTag(item);
            }
        },

    }
</script>

<style scoped>
.tags{
    margin-top: 40px;
    text-align:center;
}
.tagsitems{
    display:inline-block;
}
.active{
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%) !important;
    color: #fff !important;
}

</style>
