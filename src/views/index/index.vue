<template>
    <div>
        <div class="wp_idx-head">
            <div>
                <span>全国</span>
                <span class="fa fa-search" aria-hidden="true"></span>
            </div>
            <span class="wp_idx-title">
                微票网
            </span>
        </div>
        <div class="wp_idx-scroll">
            <scroll />
        </div>
        <div class="wp_idx-class">
            <ul>
                <li v-for="item in classList" :key="item.ClassName">
                    <div class="wp_idx-class-img">
                        <img :src="'http://wwww.wpiao.cn'+item.Iconic" :alt="item.ClassName">
                    </div>
                    <span>{{item.ClassName}}</span>
                </li>
            </ul>
        </div>
        <div class="wp_idx-class-img3">
            <div class="wp_idx-class-img" v-for="item in imgList" :key='item.Link'>
                <img :src="'http://wwww.wpiao.cn'+item.PicUrl" :alt="item.Title">
            </div>
        </div>
        <div class="wp_idx-suggest">
            <p>全国热门推介</p>
            <div class="wp_idx-suggest-list">
                <div class="wp_idx-suggest-list-box">
                    <ul>
                        <li v-for="item in suggestBeforeList" :key="item.Id">
                            <div class="wp_idx-suggest-box-img">
                                <img :src="'http://wwww.wpiao.cn'+item.Pic" alt="" srcset="">
                            </div>
                            <div class="wp_idx-suggest-box-txt">
                                <span class="wp_idx-suggest-box-name">[{{item.CitySiteName}}]{{item.ItemName}}</span>
                                <span class="wp_idx-suggest-box-time">{{item.ShowTimeStr}}</span>
                                <span class="wp_idx-suggest-box-price"><b>{{item.PriceList.split(" - ")[0]}}</b>元起</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="wp_idx-suggest-list-box">
                    <ul>
                        <li v-for="item in suggestAfterList" :key="item.Id">
                            <div class="wp_idx-suggest-box-img">
                                <img :src="'http://wwww.wpiao.cn'+item.Pic" alt="" srcset="">
                            </div>
                            <div class="wp_idx-suggest-box-txt">
                                <span class="wp_idx-suggest-box-name">[{{item.CitySiteName}}]{{item.ItemName}}</span>
                                <span class="wp_idx-suggest-box-time"></span>
                                <span class="wp_idx-suggest-box-price"><b>{{item.PriceList.split(" - ")[0]}}</b>元起</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wp_idx-hot">
            <p class="wp_idx-hot-title">——— 热门演出 ——— <span>HORE...</span></p>
            <div class="wp_idx-hot-box" v-for="item in hot" :key="item.Id">
                <div class="wp_idx-hot-box-img">
                    <img :src="'http://wwww.wpiao.cn'+item.Pic" alt="" srcset="">
                </div>
                <div class="wp_idx-hot-box-txt">
                    <p class="wp_idx-hot-box-name">{{item.ItemName}}</p>
                    <p class="wp_idx-hot-box-time">
                        <span class="fa fa-clock-o"></span>{{item.ShowTimeStr}}
                    </p>
                    <p class="wp_idx-hot-box-address">
                        <span class="fa fa-map-marker"></span>{{item.StadiumName}}
                    </p>
                    <p class="wp_idx-hot-box-price">
                        <b>{{item.PriceList}}</b>
                        <span>{{item.StatusName}}</span>
                        <span v-if="item.IsSeat">座</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="wp_idx-hot">
            <p class="wp_idx-hot-title">——— 热门景点 ——— <span>HORE...</span></p>
            <div class="wp_idx-hot-box" v-for="item in views" :key="item.Id">
                <div class="wp_idx-hot-box-img">
                    <img :src="item.Pic" :alt="item.ItemName" srcset="">
                </div>
                <div class="wp_idx-hot-box-txt">
                    <p class="wp_idx-hot-box-name">{{item.ItemName}}</p>
                    <p class="wp_idx-hot-box-time">
                        <!-- <span class="fa fa-clock-o"></span>{{item.ShowTimeStr}} -->
                    </p>
                    <p class="wp_idx-hot-box-address">
                        <!-- <span class="fa fa-map-marker"></span>{{item.StadiumName}} -->
                    </p>
                    <p class="wp_idx-hot-views-price">
                        <span>{{item.FavorableLabel}}</span>
                        <b>{{item.PriceList}}</b>
                    </p>
                    <p class="wp_idx-hot-views-cont">
                        <span>{{item.Satisficing}}</span>
                    </p>
                    <p class="wp_idx-hot-views-cont">
                        <span>{{item.Lightspot}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { constants } from 'crypto';
import scroll from "./scroll.vue"
export default {
    components:{
        scroll
    },
    data(){
        return {
            classList: [],
            imgList: [],
            suggestBeforeList: [],
            suggestAfterList: [],
            hot: [],
            views: []
        }
    },
    created(){
        this.getClass()
        this.getSuggest()
        this.getHot()
    },
    methods:{
        getClass(){
            this.$axios.post("JsM/getCo",{
                'SiteId': 1
            }).then(res => {
                this.classList = res.data.ItemClass
                this.imgList = res.data.ad3L
            })
        },
        getSuggest(){
            this.$axios.post("JsItem/getItemHotRecommend",{
                'SiteId': 1
            }).then(res => {
                
                res.data.filter( (item,index) => {
                    if(index <10){
                        this.suggestBeforeList.push(item)
                    }else{
                        this.suggestAfterList.push(item)
                    }
                })
            })
        },
        getHot(){
            this.$axios.post("JsItem/getTravelList",{
                'SiteId': 1,
                'rows': 1000,
                'page': 1,
                'keyword': '',
                'ClassId': '',
                'hot': 1
            }).then(res => {
                console.log(res)
                res.data.filter( (item,index) => {
                    if(index <19){
                        this.hot.push(item)
                    }else{
                        this.views.push(item)
                    }
                })
            })
        }
    }
}
</script>

<style lang="scss">
.wp_idx-head{
    position: relative;
    height: 0.8rem;
    background-color: #eb0b3e;
    color: #fff;
    div{
        width: 100%;
        display: flex;
        position: absolute;
        top: 0;
        justify-content: space-between;
        span:nth-of-type(1){
            font-size: 0.24rem;
            line-height: 0.8rem;
            margin-left: 0.1rem;
        }
        span:nth-of-type(2){
            font-size: 0.4rem;
            line-height: 0.8rem;
            margin-right: 0.4rem;
        }
    }
    .wp_idx-title{
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.8rem;
    }
}
.wp_idx-class{
    padding-top: 0.225rem;
    height: 3.435rem;
    ul{
        width: 100%;
        height:100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        li{
            width: 25%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            .wp_idx-class-img{
                width: 1.05rem;
                height:1.05rem;
                img{
                    width: 100%;
                }
            }
            span{
                width: 100%;
                text-align: center;
                font-size: 0.26rem;
            }
        }
    }
}
.wp_idx-class-img3{
    height: 1.66rem;
    display: flex;
    .wp_idx-class-img{
        flex: 1;
        height: 1.4rem;
        margin-top: 0.13rem;
        img{
            width: 100%;
        }
    }
}
.wp_idx-suggest{
    height: 11.66rem;
    p{
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.26rem;
        padding-left: 0.2rem;
        background-color: #f5f5f5;
        color: #999999;
    }
    .wp_idx-suggest-list{
        height: 10.96rem;
        .wp_idx-suggest-list-box{
            height: 5.08rem;
            padding: 0.2rem 0;
            overflow: auto;
            ul{
                height: 100%;
                width: 26rem;
                display: flex;
                justify-content: flex-start;
                li{
                    width: 2.6rem;
                    height: 100%;
                    padding-left: 0.25rem;
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    align-items: flex-start;
                    .wp_idx-suggest-box-img{
                        height: 3.24rem;
                        width: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .wp_idx-suggest-box-txt{
                        height: 1.84rem;
                        span{
                            display: block;
                            &:nth-of-type(1){
                                    height: 0.76rem;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    word-break: break-all;
                                    line-height: 0.38rem;;
                                    padding-top: 5px;
                                    color: #444;
                            }
                            &:nth-of-type(2){
                                color: #9C9C9C;
                                font-size: 0.24rem;
                            }
                            &:nth-of-type(3){
                                color: #9C9C9C;
                                font-size: 0.24rem;
                                b{
                                    color: #DA0043;
                                    font-size: 0.28rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.wp_idx-hot{
    .wp_idx-hot-title{
        width: 100%;
        background-color: #f5f5f5;
        font-size: 0.32rem;
        padding: 0.06rem 0;
        text-align: center;
        position: relative;
        span{
            position: absolute;
            right: 0.2rem;
            font-size: 0.24rem;
            top: 0.2rem;
        }
    }
    .wp_idx-hot-box{
        box-sizing: border-box;
        width: 100%;
        height: 2.68rem;
        padding: 0.24rem;
        display: flex;
        justify-content: flex-start;
        .wp_idx-hot-box-img{
            width: 2rem;
            height: 100%;
            img{
                height:100%;
                width: 1.8rem;
            }
        }
        .wp_idx-hot-box-txt{
            height: 1.84rem;
            width: 5rem;
            p{
                padding-left: 0.1rem;
                margin-top: 0.1rem;
                &:nth-of-type(1){
                    height: 0.76rem;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    line-height: 0.38rem;
                    padding-top: 5px;
                    color: #444;
                    font-size: 0.30rem;
                }
                &:nth-of-type(2){
                    color: #9C9C9C;
                    font-size: 0.24rem;
                }
                &:nth-of-type(3){
                    color: #9C9C9C;
                    font-size: 0.24rem;
                    b{
                        color: #DA0043;
                        font-size: 0.28rem;
                    }
                }
                &:nth-of-type(4){
                    color: #fd482c;
                    font-size: 0.24rem;
                    b{
                        color: #fd482c;
                        font-size: 0.28rem;
                    }
                    span:nth-of-type(1){
                        padding: 0 0.1rem;
                        border: 0.02rem solid #fd482c;
                        border-radius: 0.2rem;
                        margin-left: 0.1rem;
                        display: inline-block;
                        height: 0.36rem;
                        line-height: 0.36rem;
                    }
                    span:nth-of-type(2){
                        padding: 0 0.1rem;
                        border: 0.02rem solid #fd482c;
                        margin-left: 0.1rem;
                        display: inline-block;
                        height: 0.36rem;
                    }
                }
            }
            .wp_idx-hot-views-price{
                display: flex;
                justify-content: space-between;
            }
            .wp_idx-hot-views-cont{
                color: #9C9C9C;
                font-size: 0.24rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
