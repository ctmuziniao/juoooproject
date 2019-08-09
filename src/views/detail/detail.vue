<template>
    <div>
        <div class="wp_idl-head">
            <div>
                <span class="fa fa-chevron-left" @click="back()"></span>
                <span class="fa fa-star-o" style="font-size:0.4rem;"></span>
            </div>
            <span class="wp_idl-title">
                项目介绍
            </span>
        </div>
        <div class="wp_dt-header">
            <div class="wp_dt-header-detail">
                <!-- <div class="wp_dt-header-detail-img" >
                    <img src="" alt="" srcset="">
                </div>
                <div class="wp_dt-header-detail-txt">
                    <p>{{list.ItemName}}</p>
                    <p>{{list.ShowTimeStr}}</p>
                    <p>{{list.PriceList}} <span>{{list.StatusName}}</span></p>
                </div> -->
                 <div class="wp_idx-suggest-box-img">
                    <img :src="'http://wwww.wpiao.cn'+list.PicM" alt="" srcset="">
                </div>
                <div class="wp_idx-suggest-box-txt">
                    <span class="wp_idx-suggest-box-name">{{list.ItemName}}</span>
                    <span class="wp_idx-suggest-box-time">时间{{list.ShowTimeStr}}</span>
                    <span class="wp_idx-suggest-box-price">{{list.PriceList}}
                        <b>{{list.StatusName}}</b></span>
                    <span v-show='list.IsSeat'>座</span>
                </div>
            </div>
        </div>
        <div class="wp_dt-header-time">
            选择场次
            <span>{{price.SceneName}}</span>
        </div>
        <div class="wp_dt-header-price">
            选择票价
            <div>
                <p v-for="item in price.PriceList" :key="item.Id" @click="choose(item.Price,item.Id)" :class="item.Id===chooseId?'active':''"><span>{{item.Price}}</span><span>{{item.PriceInfo}}</span></p>
            </div>
        </div>
        <div class="wp_dt-footer">
            <button @click="addToCart()">加入购物车</button>
        </div>
        <div v-html="list.ItemInfo" class="wp_dt-header-detail-suggest">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [],
            id: 0,
            price: [],
            type: 0,
            chooseId: 0
        }
    },
    created(){
        this.id = this.$route.query.id
        this.getData()
    },
    computed:{
    },
    methods:{
        getData(){
            console.log(this.id)
            this.$axios.get("JsM/getItemInfo?id="+this.id+"&_=1565256595137")
                .then((res) => {
                    
                    this.list = res.data.ItemM
                    this.price = res.data.SceneL[0]
                })
        },
        choose(price,id){
            this.type = price
            this.chooseId = id
        },
        addToCart(){
            var list = {...this.list,price:this.type}
            this.$store.commit("addToCart",list)
        }
    }
}
</script>

<style lang="scss">
.wp_dt-header{
    height: 3rem;
    width: 100%;
    padding-top: 0.9rem; 
    background-color: rgba(0, 0, 0, .3);
    .wp_dt-header-detail{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .wp_idx-suggest-box-img{
            width: 2.32rem;
            height:3rem;
            img{
                width: 1.92rem;
                height: 3rem;
                margin-left: 0.2rem;
            } 
        }
        .wp_idx-suggest-box-txt{
            box-sizing: border-box;
            flex: 1;
            padding-left: 0.2rem;
            span{
                color: #ffffff;
                display: block;
                &:nth-of-type(1){
                    font-size: 0.36rem;
                    height: 0.9rem;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    line-height: 0.45rem;
                }
                &:nth-of-type(2){
                    margin-top: 0.3rem;
                }
                &:nth-of-type(3){
                    margin-top: 0.3rem;
                    b{
                        padding: 0 0.1rem;
                        border: 0.02rem solid #fff;
                    }
                }
                &:nth-of-type(4){
                    margin-top: 0.1rem;
                    padding: 0 0.1rem;
                    border: 0.02rem solid #fff;
                }
            }
        }
    }
}
.wp_dt-header-time{
    span{
        display: block;
        width: 2.04rem;
        height: 0.6rem;
        padding: 0.1rem;
        border: 0.02rem solid #999;
        border-radius: 0.4rem;
        text-align: center;
        margin-top: 0.1rem;
        margin-left: 0.2rem;
    }
}
.wp_dt-header-price{
    div{
        margin-top: 0.1rem;
        display: flex;
        flex-wrap: wrap;
        p{
            display: block;
            width: 2.04rem;
            height: 0.6rem;
            padding: 0.1rem;
            border: 0.02rem solid #999;
            border-radius: 0.4rem;
            text-align: center;
            margin-top: 0.1rem;
            margin-left: 0.1rem; 
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
        }
    }
}
.wp_dt-footer{
    position: fixed;
    bottom: 0;
    right: 0;
    width: 3.75rem;
    height: 0.72rem;
    button{
        width: 100%;
        height: 100%;
        background-color: yellow;
        color: #fff;
        border: none;
    }
}
.wp_dt-header-detail-suggest{
    padding-top: 0.5rem;
}
.active{
    border: 0.02rem solid red;
    color: red;
}
</style>