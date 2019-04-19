<template>
    <div>
        <van-row  class=" pd_v" type="flex" justify="space-around">
            <van-col span="8">
                <i class="fa fa-square" aria-hidden="true"></i>
                <span class="font_com">线索总数</span>
                <div class="size_com p_left">183</div>
            </van-col>
            <van-col span="8">
                <i class="fa fa-square" aria-hidden="true"></i>
                <span class="font_com">本周新增</span>
                <div class="size_com padding_left">21</div>
            </van-col>
            <van-col span="8">
                <i class="fa fa-square" aria-hidden="true"></i>
                <span class="font_com">本月新增</span>
                <div class="size_com">67</div>
            </van-col>
        </van-row>
         <van-row class="bg_v pd_v" type="flex" justify="space-around">
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
    import {XHeader} from 'vux';
    import { Row,Col,Cell,CellGroup,Icon} from 'vant';
export default {
    components: {
            XHeader,
            [Row.name]: Row,
            [Col.name]: Col,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Icon.name]:Icon,

        },
}
</script>

<style scoped>
  .van-col{
   font-size: 14px!important;
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
       font-size: 12px;
   }
   .size_com{
       font-size:20px;
       padding-top:5px;
   }
   .padding_left{
       padding-left: 16px!important;
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
         padding:10px 0px 10px 0px ;
   }
   .bg_v{
       margin-top:0px;
   }
   .p_left{
     padding-left:12px;
   }
   .padding_left{
     padding-left:20px;
   }
 
</style>

