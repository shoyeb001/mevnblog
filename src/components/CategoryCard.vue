<template>
    <div>
     <div class="mt-4">
     <div class="row">
        <!-- <div class="col-md-3" v-for="item in cats">
            <CategoryItem/>
        </div> -->
        <CategoryItem v-for="item in cats" :name="item.name" :img="item.img"/>
     </div>
     </div>
    </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
    export default {
        name: "CategoryCard",
        components:{
            CategoryItem,
        },
        data(){
            return{
                cats:[
                    {
                        name:"Web Development",
                        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                    },
                    {
                        name:"Android",
                        img:"https://www.computerhope.com/jargon/a/android.png",
                    },
                    {
                        name:"DSA",
                        img:"https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png",
                    },
                    {
                        name:"Interview",
                        img:"data:image/png;base64,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"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
