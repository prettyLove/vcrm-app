<template>
    <div class="clue_group">
        <XHeader>团队线索</XHeader>
         <van-cell-group class="has_bordert">
            <van-cell is-link class="no_padding">
            <div slot="title" border="1px solid">
                <span class="custom-text">上海AK-战狼队</span>
            </div>
            </van-cell>
        </van-cell-group>
        <!-- 已封装好的组件 -->
        <clueg></clueg>
        <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
                
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
         <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
         <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
         <van-cell-group>
            <van-cell is-link class="text_l">
            <div slot="title" border="1px solid" class="bf">
                <img src="../../public/images/login/01.jpg" style="width:20%" class="img">
                <span class="custom-text">崔大梦</span>
            </div>
            <div>555</div>
            </van-cell>
        </van-cell-group>
          <van-cell-group class="has_bordert">
            <van-cell is-link class="no_padding">
            <div slot="title" border="1px solid">
                <span class="custom-text">上海AK-猛虎队</span>
            </div>
            </van-cell>
        </van-cell-group>

    </div>
</template>
<script>
 import {XHeader} from 'vux';
 import { Row,Col,Cell,CellGroup,Icon} from 'vant';
 import clueg from '../components/clue_g.vue'
export default {
        components: {
            XHeader,
            [Row.name]: Row,
            [Col.name]: Col,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Icon.name]:Icon,
            clueg, 
        },
    data(){
        return{}
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
    .vux-header {
        background-color: #23ade3 !important;
    }

    .vux-header>.vux-header-left>.vux-header-back {
        color: #fff !important;
    }
    .no_padding{
        padding-top: 3px;
        padding-bottom: 3px;
        text-align: left
    }
    .has_bordert{
        border-top: 2px solid #23ade3;
        margin-top: 8px;
        box-sizing: border-box
    }
    .custom-text{
     font-size: 14px!important;
     font-weight: 400!important;  
   }
   .text_l{
       text-align: left;
   }
   .bf{
    display: flex;
    align-items: center
   }
   .img{
       border-radius: 50%;
       padding-right: 10px;
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


