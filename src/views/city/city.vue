<template>
    <div>city</div>
</template>

<script>
export default {
    data(){
        return {
            list: []
        }
    },
    methods: {
        getData () {
            this.$axios.post("/JsCommon/GetCitySiteList").then((res)=>{
                
            })
        }
    }

}
</script>

<style lang="scss">

</style>