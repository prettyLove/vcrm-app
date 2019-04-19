<template>
    <div class="app_index">
        <mt-header fixed title="CRM"></mt-header>
        <!--<XHeader>CRM</XHeader>-->
        <div class="bg" style="margin-top: 1.0667rem">
            <img src="../../public/images/login/timg.jpg" style="width:100%;height:120px"/>
        </div>
        <van-cell-group>
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-eercast fa-2x xiansuo_f" aria-hidden="true"></i>
                <span class="custom-text">线索</span>
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
            <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-address-card fa-2x coment_f" aria-hidden="true"></i>
                <span class="custom-text">联系人</span>
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

        <van-cell-group class="second">
            <van-cell is-link>
                <div slot="title" border="1px solid">
                    <i class="fa fa-file-image-o fa-2x ziliao_f" aria-hidden="true"></i>
                    <span class="custom-text">产品资料111</span>
                </div>
            </van-cell>
        </van-cell-group>
    </div>
</template>
<script>
    import {
        Row,Col,Cell, CellGroup,Icon
    } from 'vant';
    import  {Header} from 'mint-ui'
    export default {
        components: {
            [Row.name]:Row,
            [Col.name]:Col,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Icon.name]:Icon,
            [Header.name]:Header

        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
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
    

</style>
<style>
.vux-header .vux-header-left a{
    color: white !important;
    font-size: 16px;
}
</style>
