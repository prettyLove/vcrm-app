<template>
    <div class="add_user">
         <div  @click="jump" >
            <van-nav-bar 
                :title="this.ntitle" 
                left-text="返回" 
                left-arrow  right-text="保存" 
                right-arrow class="bg_h"
                @click-right="save"  
                @click-left="back">
                <!-- @click-right="save"从add_user子组件保存跳转到user父组件
                并携带参数obj，当点击返回的时候执行@click-left="back"返回到父组件页面

                 -->
                <!-- <van-icon name="search" slot="right" /> -->
            </van-nav-bar>
        </div>
        <van-row type="flex" justify="center" align="center">
            <van-col span="6">
                <img src="images/login/01.jpg" width="65%" class="img_f">
            </van-col>
            <van-col span='17'>
                <van-cell-group>
                    <van-field
                        v-model="uname"
                        type="textarea"
                        placeholder="客户姓名"
                        rows="1"
                        autosize
                        autofocus 
                    />
                    
                    <van-field
                        v-model="sex"
                        type="textarea"
                        placeholder="客户性别"
                        rows="1"
                        autosize
                    />
                    
                    <van-field
                        v-model="birthday"
                        type="textarea"
                        placeholder="客户生日"
                        rows="1"
                        autosize
                        @focus="showPick"
                        @blur="cancel"
                    />
                    <!-- 当获得焦点时就执行showPick,失去焦点时执行cancel关闭操作 -->
                </van-cell-group>
                
            </van-col> 
        </van-row>
        <van-cell-group class="group_pt" type="flex" justify="space-between">
            <van-field
           
                v-model="phone"
                clearable
                placeholder="添加电话"
                left-icon="plus"
            />

            <van-field
                v-model="email"
                type="email"
                placeholder="添加邮箱"
                left-icon="plus"
            />
            <van-field
                v-model="addr"
                type="addr"
                placeholder="添加地址"
                left-icon="plus"
            />
            <van-field
                v-model="group"
                type="group"
                placeholder="添加分组"
                left-icon="plus"
            />
            <van-field
                v-model="circle"
                type="circle"
                placeholder="添加联络周期"
                left-icon="plus"
                autofocus 
            />
        <!-- 获取时间对象，通过:min-date="minDate"设置时间最小值，使用从下往上
             弹出框的形式
         -->
            <van-popup v-model="pickShow" position="bottom" :overlay="false">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :min-date="minDate"
                    @confirm='getDate'  
                    @cancel='cancel'
                />
                <!-- 当确认时(confirm操作)时调用getDate方法获取时间 -->
            </van-popup>
        </van-cell-group>
        <!-- 弹出框在内存在默认不显示，当点击删除按钮时，用show_Dialog方法动态将弹出框更改为true 
        v-if="this.ispshow"用于判断删除按钮什么时候显示，添加的时候是不显示的，只有当修改用户的时候才显示出来的
        -->
        <van-button round type="danger" size="large" v-if="this.ispshow" @click="show_Dialog">删除用户</van-button>
        <!-- 点击删除按钮，弹出用户提示弹出框 -->
        <!-- 在弹出框内单项绑定beforeClose函数 -->
        <van-dialog
                v-model="show"
                title="是否删除？"
                show-cancel-button
                :beforeClose="beforeClose"
                >
            </van-dialog>
    </div>
</template>
<script>
import { Cell, CellGroup,Row, Col,Field,Icon,NavBar,DatetimePicker,Popup,Button } from 'vant';
import { constants } from 'crypto';
export default {
    components:{
        [Cell.name]:Cell,[CellGroup.name]:CellGroup,[Row.name]:Row,[Col.name]:Col,
        [Field.name]:Field,[Icon .name]:Icon,[NavBar.name]:NavBar,[DatetimePicker.name]:DatetimePicker 
        ,[Popup.name]:Popup ,[Button.name]:Button,
   },
    data(){
        //通过v-model双向绑定将数据存到内存中
       return{
            id:'1',
            uname:'',
            sex:'',
            birthday:'',
            phone:'',
            email:'',
            addr:'',
            group:'',
            circle:'',
            currentDate:'',
            ntitle:"",
            minDate:new Date(2018,2,1),
            pickShow:false, //默认不弹出,
            ispshow:false,
            img:'',
            show:false
       }
    },
    props:{
         user:{
           type:Object
         },
        ptitle:{
            type:String
        }  
       },
    methods:{
        jump(){

        },
        //点击删除按钮，弹出确认框
        show_Dialog(){
        this.show=true;
        console.log("删除用户请确认");
        },
        //当点击保存按钮时，通过对象传参，this.$emit("add,obj")传给父组件
        //其中add是传到父组件的方法，obj为参数
        save(){
            let obj={   
                        id:this.id, 
                        uname:this.uname,
                        sex:this.sex,
                        birthday:this.birthday,
                        phone:this.phone,
                        email:this.email,
                        addr:this.addr,
                        group:this.group,
                        circle:this.circle,
                        currentDate:this.currentDate,
                        img:this.img
            };
            
            if(this.ntitle=='添加用户'){
               obj.id=this.uuid();
               console.log("save ==="+JSON.stringify(obj));
               this.$emit('add',obj);
            }
            else if(this.ntitle=="修改用户")
            this.$emit('updateSave',obj)
        },
        back(){
            this.$emit('back');
        },
        //当生日栏获得焦点时执行弹出框操作
        showPick(){
            this.pickShow=true;
        },
        // 获取时间对象，当已获得时间对象时将弹出框关闭
        getDate(val){
            this.birthday=val.toLocaleDateString();
            this.pickShow=false; 
        },
        cancel(){
            this.pickShow=false;
        },
        // 随机生成一个用户的ID
        uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";
        
            var uuid = s.join("");
            return uuid;
       },
           // 点击确认时，弹出框关闭
        beforeClose(action,done){
            console.log("删除用户");
            // 删除用户弹出确认框     
            if(action=='confirm'){
                //  this.$router.push('/add_user')
                this.show=false;
                //todo 传当前用户ID 给父组件delete方法
                this.$emit("deleteUser",this.id);
            }     
    }
    },

     beforeCreate(){
        console.log("beforeCreate=======");
     },
    //  created声明周期只执行一次，用于接收第一次值，比如用户进来未添加就直接修改，当created执行完一次
    // 之后将会隐藏不会再执行，所以之后的值监控需要用watch完成
    // created一般是DOM树还没创建完成就执行，一般获取数据，处理数据，或者在加载等待过程
     created(){
          console.log("add_user created:"+this.user);
          this.id=this.user.id;
          this.uname=this.user.uname;
          this.sex=this.user.sex;
          this.birthday=this.user.birthday;
          this.phone=this.user.phone,
          this.email=this.user.email,
          this.addr=this.user.addr;
          this.circle=this.user.circle;
          this.currentDate=this.user.currentDate;
          this.ntitle=this.ptitle;
          this.img=this.user.img;
        //   判断标题状态，来决定删除按钮是否显示或者隐藏
          if(this.ntitle =='修改用户'){
             this.ispshow=true;
          }
    },
    // mounted是在DOM树加载完成后
    mounted:function(){
      console.log("000000000000000");
    },
    watch:{
       user:function(newValue,oldVlaue){
          console.log("监听方法："+JSON.stringify(newValue));
          this.id=newValue.id;
          this.uname=newValue.uname;
          this.sex=newValue.sex;
          this.birthday=newValue.birthday;
          this.phone=newValue.phone,
          this.email=newValue.email,
          this.addr=newValue.addr;
          this.circle=newValue.circle;
          this.currentDate=newValue.currentDate;
          this.img=newValue.img;
       },
       ptitle:function(newValue,oldVlaue){
           console.log("监听方法："+JSON.stringify(newValue));
         this.ntitle=newValue;
         if(this.ntitle =='修改用户'){
             this.ispshow=true;
         }
       }
    }

}
</script>
<style scoped>
  .group_pt{
    padding-top:30px;
 }
  .img_f{
      border-radius: 50%;
  }
  .van-cell{
     padding-top:13px;
     padding-bottom: 13px;
  }
  .group_pt>.van-cell~.van-cell{
     padding-top:18px;
     padding-bottom: 18px;
  }
 
</style>

<style>
   .van-cell__value{
       display: flex;
   }
    .van-field__left-icon{
    border-radius: 50%;
    background-color: #26a2ff;
    color: #fff;
    margin-right: 10px
  }
   .bg_h{
       background-color: #26a2ff!important; 
  
    }
    .van-nav-bar__arrow,.van-nav-bar__title,.van-nav-bar__text,.van-icon-search{
        color:#fff!important;
    }
  
</style>


