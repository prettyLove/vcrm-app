<template>
    <div class="app_index">
        <!-- <mt-header fixed title="CRM"></mt-header> -->
        <mt-header title="CRM">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
            <!-- <img src="../../public/images/login/timg.jpg" style="width:100%;height:160px"/> -->
            <van-swipe  :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="(item,index) of imageList" :key="index">
                    <img v-lazy="item"/> 
                </van-swipe-item>
                <!-- <van-swipe-item><img src="images/login/timg.jpg"></van-swipe-item>
                <van-swipe-item><img src="images/login/t.jpg"></van-swipe-item>
                <van-swipe-item><img src="images/login/ti.jpg"></van-swipe-item>
                <van-swipe-item><img src="images/login/tim.jpg"></van-swipe-item> -->
            </van-swipe>

        
        <van-cell-group>
            <van-cell is-link >
            <div slot="title" border="1px solid" @click="jump">
                <i class="fa fa-eercast fa-2x xiansuo_f" aria-hidden="true"></i>
                <span class="custom-text">线索</span>
            </div>
            </van-cell>
            <van-cell is-link >
            <div slot="title" border="1px solid" @click="jump2">
                <i class="fa fa-address-card fa-2x coment_f" aria-hidden="true"></i>
                <span class="custom-text">联系人</span>
            </div>
            </van-cell>
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-search-minus fa-2x xscha_f" aria-hidden="true"></i>
                <span class="custom-text">线索查重</span>
            </div>
            </van-cell>
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-gg-circle fa-2x gongshang_f" aria-hidden="true"></i>
                <span class="custom-text">工商查询</span>
            </div>
            </van-cell>
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-meetup fa-2x shangji_f" aria-hidden="true"></i> 
                <span class="custom-text">商机</span>
            </div>
            </van-cell>
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-address-book-o fa-2x hetong_f" aria-hidden="true"></i>
                <span class="custom-text">合同</span>
            </div>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="second">
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-grav fa-2x shangji_f" aria-hidden="true"></i>
                <span class="custom-text">市场活动</span>
            </div>
            </van-cell>
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-users fa-2x coment_f" aria-hidden="true"></i>
                <span class="custom-text">我的团队</span>
            </div>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="second">
            <van-cell is-link>
                <div slot="title" border="1px solid">
                    <i class="fa fa-file-image-o fa-2x ziliao_f" aria-hidden="true"></i>
                    <span class="custom-text">产品资料</span>
                </div>
            </van-cell>
        </van-cell-group>

        <!-- <van-cell-group class="second">
            <van-cell is-link>
                <div slot="title" border="1px solid">
                    <i class="fa fa-file-image-o fa-2x ziliao_f" aria-hidden="true"></i>
                    <span class="custom-text">产品资料111</span>
                </div>
            </van-cell>
        </van-cell-group> -->
    </div>
</template>
<script>
    import {
        Row,Col,Cell, CellGroup,Icon, Swipe,SwipeItem
    } from 'vant';
    import  {Header,Button } from 'mint-ui'
    export default {
        components: {
            [Row.name]:Row,
            [Col.name]:Col,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Icon.name]:Icon,
            [Header.name]:Header,
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem,
            [Button.name]:Button ,

        },
        data() {
            return {
              imageList:[
                  'images/login/timg.jpg',
                  'images/login/ti.jpg',
                  'images/login/t.jpg',
                  'images/login/tim.jpg',
              ]
            }
        },
        methods:{
            jump(){
                this.$router.push("clue")
            },
            jump2(){
                this.$router.push("user")
            }
        }
    }
</script>
<style lang='scss' scoped>
    .mint-header {
        background-color: #23ade3 !important;
        padding-bottom:20px;
        padding-top:20px;
    }
    .app_index{
        background-color: #eee;
    }
    .van-cell-group{
        margin-top: 15px;
    }
    .van-cell{
       padding-top: 6px;
       padding-bottom: 6px;
    }
    .second{
        margin-top:8px;
    }
    .app-index {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .vux-header{
        background-color: #23ade3!important;
    }
    .vux-header>.vux-header-left>.vux-header-back{
        color:#fff!important;
    }
    .van-cell__title .xiansuo_f{
        text-align: left;
        color:#23ade3;
    }
    .van-cell__title .xscha_f{
        color:#ff946a;
    }
    .van-cell__title .gongshang_f{
        color:#42b983;
    }
    .van-cell__title .shangji_f{
        color:#f44;
    }
    .van-cell__title .hetong_f{
        color:#1989fa;
    }
    .van-cell__title .coment_f{
        color:#42b983;
    }
    .van-cell__title .ziliao_f{
        color:#ffe06a;
    }
    .van-cell__title .custom-text{
        text-align: center;
        color:#333;
        line-height: 33px;
        /* font-weight: bold; */
        /* font-size: 16px; */
        
    }
    .van-cell__title div{
        display: flex;
        align-items: center
    }
    .van-cell__title>div>span{
        margin-left: 15px;
    }
    .van-swipe{height:5.2rem}
    // .van-swipe-item img{width:100%};
</style>
<style>
.vux-header .vux-header-left a{
    color: white !important;
    font-size: 16px;
}

.van-swipe-item .van-swipe__indicators{bottom:0.3rem!important}
</style>
