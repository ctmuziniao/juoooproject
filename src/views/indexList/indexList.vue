<template>
    <div>
        <div class="wp_idl-head">
            <div>
                <span class="fa fa-chevron-left" @click="back()"></span>
                <span>全部</span>
            </div>
            <span class="wp_idl-title">
                {{type.item}}
            </span>
        </div>
        <div class="wp_idl-search">
            <div class="wp_idl-search-box">
                <span class="fa fa-search"></span>
                <span>{{type.item}}</span>
                <span @click="search()">搜索内容</span>
                <span @click="searchOk(type.id)">搜索</span>
            </div>
        </div>
        <div class="wp_idl-search-list" v-show="flag">
            <ul>
                <li @click="change(0,'全部')">全部</li>
                <li v-for="item in typeList" :key="item.Id"
                    @click="change(item.Id,item.ClassName)">
                    {{item.ClassName}}
                    </li>
            </ul>
        </div>
        <div class="wp_idl-list">
            <ul v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li v-for="item in list" :key="item.Id" @click="goToDetail(item.Id)">
                    <div class="wp_idx-hot">
                        <div class="wp_idx-hot-box" >
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
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            type: {
                item: "演唱会",
                id:8
            },
            typeList: [],
            list: [],
            flag: false,
            page:1,
            loading:false
        }
    },
    created(){
        this.getTypeList()
        this.getData(this.type.id,this.page)
    },
    methods:{
        getTypeList(){
            this.$axios.get("JsItem/getItemClass?_=1565245469553")
                    .then((res) => {
                        this.typeList = res.data
                    })
        },
        getData(id,page){
            this.$axios.get("JsItem/getSearchList?page="+page+"&ClassID="+id+"&keyword=&_=1565245469552")
                    .then( (res) => {
                        this.list = this.list.concat(res.data)
                    })
        },
        search(){
            this.flag = true
        },
        change(id,item){
            this.type = {
                item:item,
                id:id
            }
            this.flag = false
        },
        searchOk(id){
            this.reset()
            this.getData(id,this.page)
        },
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                this.page++
                this.getData(this.type.id,this.page)
                this.loading = false;
            }, 2500);
        },
        reset(){
            this.page = 1
            this.loading = false
            this.list = []
        },
        goToDetail(id){
            this.$router.push({"name":'detail',query:{id}})
        },
        back(){
            this.$router.back(-1)
        }
    }
}
</script>

<style lang="scss">
.wp_idl-head{
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.8rem;
    background-color: #eb0b3e;
    color: #fff;
    z-index: 10;
    div{
        width: 100%;
        display: flex;
        position: absolute;
        top: 0;
        justify-content: space-between;
        span:nth-of-type(1){
            font-size: 0.4rem;
            line-height: 0.8rem;
            margin-left: 0.1rem;
        }
        span:nth-of-type(2){
            font-size: 0.24rem;
            line-height: 0.8rem;
            margin-right: 0.4rem;
        }
    }
    .wp_idl-title{
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.8rem;
    }
}
.wp_idl-search{
    height: 1rem;
    margin-top: 0.8rem;
    box-sizing: border-box;
    padding: 0.2rem 0;
    .wp_idl-search-box{
        width: 6.75rem;
        height: 0.6rem;
        line-height: 0.6rem;
        margin: 0 auto;
        border: 0.02rem solid #dedede;
        border-radius: 0.3rem;
        background-color: #eee;
        display: flex;
        span{
            width: 0.5rem;
            font-size: 0.24rem;
            display: inline-block;
            &:nth-of-type(1){
                font-size: 0.28rem;
                margin-left: 0.2rem;
                line-height: 0.6rem;
            }
            &:nth-of-type(2){
                margin-left: 0.1rem;
                width: 1.16rem;
            }
            &:nth-of-type(3){
                width: 3.63rem;
            }
            &:nth-of-type(4){
                flex: 1;
                text-align: center;
                background-color: rgba(0, 0, 0, .3);
                border-top-right-radius: 0.3rem;
                border-bottom-right-radius: 0.3rem;
            }
        }
    }
}
.wp_idl-search-list{
    position: fixed;
    top: 1.8rem;
    left: 1rem;
    width: 2rem;
    height: 10rem;
    overflow: auto;
    border: 0.02rem solid #999999;
    background-color: #ffffff;
    ul{
        li{
            line-height: 0.4rem;
            font-size: 0.24rem;
            color: #666666;
        }
    }
}
</style>