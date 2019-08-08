<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='item in list' :key='item.Link'>
                <img :src="'http://wwww.wpiao.cn'+item.PicUrl" :alt="item.Title">
                </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        this.getData()
    },
    watch:{
        list:{
            handler(){
                this.$nextTick(()=> {
                    this.autoplay()
                })
            },
            deep:true,
            immediate:true
        }
    },
    methods:{
        getData(){
            this.$axios.post("JsM/getCo",{
                'SiteId': 1
            }).then(res => {
                this.list = res.data.ad6L
            })
        },
        autoplay(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        }
    }
}
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 3.05rem;
    .swiper-wrapper{
        width: 100%;
        height: 100%;
        .swiper-slide{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}  
</style>
