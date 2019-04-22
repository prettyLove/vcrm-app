<template class="bg">
    <div class="app_clue">
        <div  @click="jump" >
            <van-nav-bar title="线索" left-text="返回" left-arrow class="bg_h">
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </div>
        <van-row type="flex" justify="space-around">
            <van-col span="4" >
                <div class="bg font_tuandui" @click="gjump">
                    <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div class="font_d" @click="gjump">团队线索</div>
            </van-col>
            <van-col span="4">
                <div class="bg bg_sp">
                    <span class="fa">7</span>
                </div>
                <div class="font_d">7天未跟</div>
            </van-col>
            <van-col span="4">
                <div class="bg bg_p">
                    <span class="fa">14</span>
                </div>
                <div class="font_d">14天未跟</div>
            </van-col>
            <van-col span="4">
                <div class="bg bg_fd">
                    <span class="fa">
                        <i class="fa fa-hourglass-end" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="font_d">即将超时</div>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
            <van-col span="4">
                <div class="bg bg_first">
                    <i class="fa fa-ils" aria-hidden="true"></i>
                </div>
                <div class="font_d">我的线索</div>
            </van-col>
            <van-col span="4">
                <div class="bg bg_sb">
                    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                </div>
                <div class="font_d">我上报的</div>
            </van-col>
            <van-col span="4">
                <div class="bg bg_chongcha">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <div class="font_d">重查</div>
            </van-col>
            <van-col span="4">
                <div class="bg bg_first">
                    <span class="fa">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="font_d">录入线索</div>
            </van-col>
        </van-row>
        <!-- 调用已封装好的组件 -->
         <clueg></clueg>
    </div>
</template>
<script>
    import {
        Row,
        Col,
        NavBar,
        Icon
    } from 'vant';
   import clueg from '../components/clue_g.vue'
    export default {
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [NavBar.name]: NavBar,
            [Icon.name]: Icon,
            clueg, 
        },
        data() {
            return {}
        },
        methods:{
            jump(){
               //this.$router.push("/index");
                //这里不能写死，应该根据路由的历史记录进行回退
                this.$router ? this.$router.back() : window.history.back()
            },
            gjump(){
                this.$router.push("/clue_group")
            }
        },
        mounted() {//动态设置单个组件页面的背景颜色
            document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
        },
        beforeDestroy() {
            document.querySelector('body').removeAttribute('style')
        },

    }
</script>
<style scoped>
    .bg {
        background-color: #eee;
    }

    .app_clue {
        /* padding-top: 20px; */
        /* padding-bottom: 20px; */
    }

    .vux-header {
        background-color: #23ade3 !important;
    }

    .vux-header > .vux-header-left > .vux-header-back {
        color: #fff !important;
    }

    .van-row {
        padding-top: 40px;
    }

    .bg {
        width: 60px;
        height: 60px;
        /*margin-left: 16px;*/
        border-radius: 40%;
        text-align: center;
    }

    .bg_first {
        background-color: #23ade3;
    }

    .bg_sp {
        background-color: #ff976a;
    }

    .bg_p {
        background-color: #f44;
    }

    .bg_fd {
        background-color: #ffe06a;
    }

    .bg_sb {
        background-color: #6b6aff;
    }

    .font_tuandui {
        background-color: #07c160;
    }

    .bg_chongcha {
        background-color: #07c18b;
    }

    .bg .fa {
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 25px
    }

    .font_d, .font_shangbao {
        padding-top: 7px;
        font-size: 14px
    }

    .fa-square {
        padding-right: 5px;
        color: #23ade3;

    }

    .font_com {
        font-size: 16px;
    }

    .size_com {
        font-size: 20px;
        padding-top: 5px;
    }

    .padding_left {
        padding-left: 20px !important;
    }

    .padding_l {
        padding-left: 18px !important;

    }

    .font_qi {
        color: #ff976a !important;
    }

    .font_shisi {
        color: #f44 !important;
    }

    .font_ji {
        color: #ffe06a !important;
    }

    /* .bg_v{background-color: rgb(242,244,247);} */
    .pd_v {
        margin-top: 30px;
        background-color: #fff;
    }

    .bg_v {
        margin-top: 0px;
    }
  

</style>
<style>
    .vux-header .vux-header-left a {
        color: white !important;
        font-size: 16px;
    }

    .app_clue .vux-header {
        color: #fff !important;
        font-size: 16px;
        font-weight: 400;
    }

    .vux-header .vux-header-left {
        color: #fff !important;
    }
    .bg_h{
       background-color: #26a2ff!important; 
  
    }
    .van-nav-bar__arrow,.van-nav-bar__title,.van-nav-bar__text,.van-icon-search{
        color:#fff!important;
    }
</style>