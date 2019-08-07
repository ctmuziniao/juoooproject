<template>
    <div>dafsd</div>
</template>

<script>
export default {
    data () {
        return {
            list: []
        }
    },
    created () {
        this.getData()
    },
    methods: {
        getData(){
            this.$axios.post("/JsCommon/GetCitySiteList").then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang="scss">

</style>