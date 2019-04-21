<template>
    <div class="user">
        <!-- 头部组件 -->
       <div  @click="jump" >
            <van-nav-bar title="添加客户" left-text="返回" left-arrow  right-text="保存" right-arrow class="bg_h">
                <van-icon name="user-o" slot="right" @click="showDialog"/>
            </van-nav-bar>
            <van-dialog
                v-model="show"
                title="添加用户？"
                show-cancel-button
                :beforeClose="beforeClose"
                >
            </van-dialog>
        </div>
        <van-cell-group class="margin_lr">
            <van-field
                placeholder="请输入要搜索的关键字"
                left-icon="search"
            />
        </van-cell-group>
        <van-cell-group >
             <van-cell is-link>
                <div slot="title" border="1px solid" @click="jump">
                    <i class="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
                    <span class="custom-text">线索</span>
                </div>
            </van-cell>
        </van-cell-group>
     <van-popup v-model="pshow" position="top" :overlay="false">
       <add_user></add_user>
     </van-popup>
    </div>
</template>
<script>
import { Cell, CellGroup,Row, Col,Field,Icon,NavBar,Search,Popup} from 'vant';
import add_user from './add_user.vue';
export default {
     components:{
        [Cell.name]:Cell,[CellGroup.name]:CellGroup,[Row.name]:Row,[Col.name]:Col,
        [Field.name]:Field,[Icon .name]:Icon,[NavBar.name]:NavBar,[Search.name]:Search,
        [Popup.name]:Popup,
        add_user

    },
    data(){
       return{
        show:false,
        pshow:false
       }
    },
    methods:{
        jump(){},
        showDialog(){
            this.show=true;
        },
         beforeClose(action,done) {
            if(action=='confirm'){
              //  this.$router.push('/add_user')
               this.show=false;
               this.pshow=true;
              
            }else{
                done();
            }
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
  .margin_lr{
      margin-left: 15px;
      margin-right: 15px
  }
  .van-cell__value{
      display: flex;
  }
  
</style>
<style>
.bg_h{
       background-color: #26a2ff!important; 
  
    }
    .van-nav-bar__arrow,.van-nav-bar__title,.van-nav-bar__text,.van-icon-user-o{
        color:#fff!important;
        font-size: 16px;
    }
    .van-field{
      padding:0px!important;
      margin-top: 10px;
      margin-bottom: 10px
  }
  .van-cell__value--alone{
      display: flex
  }

</style>



