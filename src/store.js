import { reactive } from "vue";

const state = reactive({
    islogged: false,
    data:[],
});


export default{
    state:state,
};
