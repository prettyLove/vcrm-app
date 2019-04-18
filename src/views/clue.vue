<template class=""bg>
    <div class="app_clue">
        <XHeader>线索</XHeader>
        <van-row>
            <van-col span="6">
                <div class="bg bg_first">
                    <i class="fa fa-ils" aria-hidden="true"></i>
                </div>
                <div class="font_d">我的线索</div>
            </van-col>
            <van-col span="6">
                <div class="bg bg_sp">
                    <span class="fa">7</span>
                </div>
                <div class="font_d">7天未跟</div>
            </van-col>
            <van-col span="6">
                <div class="bg bg_p">
                    <span class="fa">14</span>
                </div>
                <div class="font_d">14天未跟</div>
            </van-col>
            <van-col span="6">
                <div class="bg bg_fd">
                    <span class="fa">
                        <i class="fa fa-hourglass-end" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="font_d">即将超时</div>
            </van-col>
        </van-row>
         <van-row>
            <van-col span="6">
                <div class="bg font_tuandui">
                    <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div class="font_d">团队线索</div>
            </van-col>
            <van-col span="6">
                <div class="bg bg_sb">
                    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                </div>
                <div class="font_d">我上报的</div>
            </van-col>
            <van-col span="6">
                <div class="bg bg_chongcha">
                    <i class="fa fa-search" aria-hidden="true"></i> 
                </div>
                <div class="font_d">重查</div>
            </van-col>
            <van-col span="6">
                <div class="bg bg_first">
                    <span class="fa">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="font_d">录入线索</div>
            </van-col>
        </van-row>
        <van-row gutter="20" class=" pd_v">
            <van-col span="8">
                <i class="fa fa-square" aria-hidden="true"></i>
                <span class="font_com">线索总数</span>
                <div class="size_com">183</div>
            </van-col>
            <van-col span="8">
                <i class="fa fa-square" aria-hidden="true"></i>
                <span class="font_com">本周新增</span>
                <div class="size_com">21</div>
            </van-col>
            <van-col span="8">
                <i class="fa fa-square" aria-hidden="true"></i>
                <span class="font_com">本月新增</span>
                <div class="size_com">67</div>
            </van-col>
        </van-row>
         <van-row gutter="20" class="bg_v pd_v">
            <van-col span="8" class="padding_left">
                <i class="fa fa-square font_qi" aria-hidden="true"></i>
                <span class="font_com ">七天未跟进</span>
                <div class="size_com">9</div>
            </van-col>
            <van-col span="8" class="padding_l">
                <i class="fa fa-square font_shisi" aria-hidden="true"></i>
                <span class="font_com ">14天未跟进</span>
                <div class="size_com">5</div>
            </van-col>
            <van-col span="8">
                <i class="fa fa-square font_ji" aria-hidden="true"></i>
                <span class="font_com ">即将超时</span>
                <div class="size_com">3</div>
            </van-col>
        </van-row>
    </div>
</template>
<script>
    import {
        XHeader
    } from 'vux';
    import {
        Row,
        Col
    } from 'vant';
    export default {
        components: {
            XHeader,
            [Row.name]: Row,
            [Col.name]: Col,
        },
        data() {
            return {}
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
    .bg{ background-color: #eee;}
    .app_clue {
        /* padding-top: 20px; */
        /* padding-bottom: 20px; */
    }

    .vux-header {
        background-color: #23ade3 !important;
    }

    .vux-header>.vux-header-left>.vux-header-back {
        color: #fff !important;
    }

    .van-row {
        padding-top: 40px;
    }
    .bg{
        width: 60px;
        height: 60px;
        margin-left: 16px;
        border-radius: 40%;
        text-align: center;
    }
    .bg_first{
       background-color: #23ade3;
    }
    .bg_sp{
        background-color:#ff976a;
    }
    .bg_p{
        background-color:#f44 ;
    }
    .bg_fd{
        background-color: #ffe06a;
    }
    .bg_sb{
        background-color:#6b6aff;
    }
    .font_tuandui{
        background-color: #07c160;
    }
    .bg_chongcha{
        background-color: #07c18b;
    }
    .bg .fa{
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 25px
    }
   .font_d,.font_shangbao{
        padding-top: 7px;
        font-size: 14px
   }
   .fa-square{
       padding-right: 5px;
       color: #23ade3;

   }
   .font_com{
       font-size: 16px;
   }
   .size_com{
       font-size:20px;
       padding-top:5px;
   }
   .padding_left{
       padding-left: 20px!important;
   }
   .padding_l{
       padding-left: 18px!important;

   }
   .font_qi{color:#ff976a!important;}
   .font_shisi{color:#f44!important;}
   .font_ji{color:#ffe06a!important;}
   /* .bg_v{background-color: rgb(242,244,247);} */
   .pd_v{margin-top: 30px;
         background-color: #fff;
   }
   .bg_v{
       margin-top:0px;
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
</style>