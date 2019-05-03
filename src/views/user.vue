<template>
    <div class="user">
        <!-- 头部组件 -->
       <div  @click="jump" >
            <van-nav-bar title="添加客户" left-text="返回" left-arrow  right-text="保存" right-arrow class="bg_h">
                <van-icon name="user-o" slot="right" @click="showDialog"/>
            </van-nav-bar>
            <!-- 添加用户弹出框 -->
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
                v-model="phone"
            />
        </van-cell-group>
    
        <van-cell is-link >
            <div slot="title" border="1px solid">
                <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i> 
                <span class="custom-text">客户</span>
            </div>
        </van-cell>
        <van-cell is-link>
            <div slot="title" border="1px solid" >
                <i class="fa fa-users fa-2x " aria-hidden="true"></i>
                <span class="custom-text">分组</span>
            </div>
       </van-cell>
        <div class="cao_style">最近操作</div>
        <!-- 用户列表，动态创建 -->
        <van-cell-group  v-for="(item,i) of list" :key="i">
            <div @click="editor(item)">
                <van-cell class="d_flex">
                <div slot="title" border="1px solid" class="bf">
                    <img :src="item.img" style="width:20%" class="img">
                    <span class="custom-text" v-html="item.uname"></span>
                </div>
                <div>{{item.birthday}}</div>
            <!-- <van-button type="primary" @click="updateUser(item)">修改</van-button> -->
                </van-cell>
            </div>
        </van-cell-group>

        <van-popup v-if="pshow" v-model="pshow" position="top" :overlay="false">
        <add_user @add='add' @deleteUser="deleteUser" @updateSave='updateSave' @back='back' :user="this.user" :ptitle="this.ptitle"></add_user>
        </van-popup>
       
    </div>
</template>
<script>
import { Row,Cell,CellGroup,Col,Field,Icon,NavBar,Search,Popup,DatetimePicker,Button} from 'vant';
import add_user from './add_user';
export default {
     components:{
        [Row.name]:Row,[Cell.name]:Cell,[CellGroup.name]:CellGroup,[Col.name]:Col,
        [Field.name]:Field,[Icon .name]:Icon,[NavBar.name]:NavBar,[Search.name]:Search,
        [Popup.name]:Popup,[DatetimePicker.name]:DatetimePicker,[Button.name]:Button,
        add_user

    },
    data(){
       return{
        show:false,
        pshow:false,
        list:[{id:'1',img:'images/login/01.jpg',uname:'张三',birthday:'2018/1/10'},
              {id:'2',img:'images/login/01.jpg',uname:'李四',birthday:'2017/8/07'},
              {id:'3',img:'images/login/01.jpg',uname:'王武',birthday:'2017/5/06'},
        ],
        phone:'',
        user:{},
        ptitle:''
        
       }
    },
    watch:{
        phone(){
          
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
            this.ptitle="添加用户";
            this.user={};
            this.show=false;
            this.pshow=true;
            
        }
        done()},
        //添加用户方法
        add(obj){
            this.pshow=false;
            obj.img='images/login/01.jpg' ;
            this.list.push(obj);
            console.log(this.list);
            console.log("add==="+obj);
        },
        //修改用户方法
        updateSave(obj){
            console.info("修改保存");
            //修改List集合里面配置的值
            for(var i=0;i<this.list.length;i++){
                 var tuser=this.list[i];
                 if(tuser.id==obj.id){
                     console.info("匹配用户成功");
                     this.list[i]=obj;
                 }
            }
            console.log(obj);
        this.pshow=false;
        },
        //删除用户方法
        deleteUser(id){
            console.log("父组件删除用户");
            for(var i=0;i<this.list.length;i++){
                var old_id=this.list[i];
              if(old_id.id==id){
               console.log("ID相同，执行删除");
               this.list.splice(i, 1);
               this.pshow=false;
            }
            }
            
        },
        back(){
            this.pshow=false;
        },
        editor(user){
            this.user=user;
            console.log(this.user);
            this.ptitle="修改用户";
            this.show=false;
            this.pshow=true;
            console.log("用户名"+user);
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
.bg_h {background-color: #23ade3 !important;}
  .margin_lr{
      margin-left: 15px;
      margin-right: 15px
  }
  /* 受van-popup影响，样式需重新设置覆盖，如下 */
  .van-cell__value{
      display: flex;
  }
  .van-cell__title{
      display: flex;
  }
  .cao_style{
      text-align: left;
      /* padding-left: 15px; */
      font-size: 14px;
      padding: 10px 0px 10px 16px;
      border-top:0.8px solid #e8e8e8;
      border-bottom:0.8px solid #e8e8e8;
  }
  .img{
       border-radius: 50%;
       padding-right: 10px;
       height: 20px;
   }
   .bf{
    display: flex!important;
    align-items: space-between!important;
   }
   .vant-icon{
       color:#fff;
   }
   .van-cell__value{
       justify-content: flex-end;
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
      display: flex；   
  }
  .van-cell[data-v-98090446] {
    padding-top: 0.34667rem!important;
    padding-bottom: 0.34667rem!important;
}
.van-field__left-icon{
    margin-left: 10px!important;
}
.van-field__left-icon{
       background-color: #fff;
       border-radius: 15%!important;
       color:#666;  
   }
   .van-cell__value--alone{
       display: flex;
   }
   .d_flex{
       display: flex!important;
       justify-content: space-between!important;
   }
   .fa-2x{
       font-size: 20px;
       padding-right:8px;
       color:#ff976a;
   }

</style>



