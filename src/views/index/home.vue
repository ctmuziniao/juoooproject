<template>
    <div class="jc-home">
        <div class="cz-router">
            <router-view></router-view>
        </div>
        <div class="cz-footer">
            <ul>
                <li>
                    <router-link to="/home/index">
                        <img src="">
                        <span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link  to="cinama">
                        <img src="">
                        <span>剧场</span>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/city">
                        <img src="">
                        <span>票夹</span>
                    </router-link>
                </li>
                <li>
                    <router-link  to="/allList">
                        <img src="">
                        <span>我的</span>
                    </router-link>
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
.cz-footer {
    width: 100%;
    height: 0.98rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    ul {
        width: 100%;
        height: 0.98rem;
        display: flex;
        li {
            flex: 1;
            height: 0.98rem;
            line-height: 0.98rem;
            text-align: center;
        }
    }
}
</style>