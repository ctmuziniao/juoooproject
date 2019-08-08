<template>
    <div class="jc-home">
        <div class="cz-router">
            <router-view></router-view>
        </div>
        <div class="cz-footer">
            <ul>
                <li>
                    <router-link to="/home/index">
                        <span class="fa fa-home"></span>
                        <span>首页</span>
                    </router-link>
                </li>
                <li>
                    <div>
                        <span class="fa fa-cc-discover"></span>
                        <span>优惠券</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="fa fa-plane"></span>
                        <span>发布</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="fa fa-users"></span>
                        <span>分销</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="fa fa-user"></span>
                        <span>我的</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.jc-home{
    width: 100%;
    height: 100%;
    .cz-footer{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 0.98rem;
        overflow: hidden;
        ul{
            display: flex;
            height: 100%;
            li{
                width: 20%;
                div,a{
                    width: 100%;
                    height: 100%;
                    display: block;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    span{
                        text-align: center;
                        font-size: 0.26rem;
                        &:nth-of-type(1){
                            font-size: 0.45rem;
                        }
                    }
                }
            }
        }
    }
    .cz-router{
        height: 12.36rem;
        overflow: auto;
    }
}
</style>