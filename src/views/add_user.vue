<template>
    <div class="add_user">
         <div  @click="jump" >
            <van-nav-bar 
                title="添加客户" 
                left-text="返回" 
                left-arrow  right-text="保存" 
                right-arrow class="bg_h"
                @click-right="save"  
                @click-left="back">
                <!-- @click-right="save"从add_user子组件保存跳转到user父组件
                并携带参数obj，
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
    
            <van-popup v-model="pickShow" position="bottom" :overlay="false">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :min-date="minDate"
                    @confirm='getDate'
                    @cancel='cancel'
                />
            </van-popup>
          
          
            
        </van-cell-group> 
    </div>
</template>
<script>
import { Cell, CellGroup,Row, Col,Field,Icon,NavBar,DatetimePicker,Popup } from 'vant';
import { constants } from 'crypto';
export default {
    components:{
        [Cell.name]:Cell,[CellGroup.name]:CellGroup,[Row.name]:Row,[Col.name]:Col,
        [Field.name]:Field,[Icon .name]:Icon,[NavBar.name]:NavBar,[DatetimePicker.name]:DatetimePicker 
        ,[Popup.name]:Popup ,
   },
    data(){
       return{
           uname:'',
            sex:'',
            birthday:'',
            phone:'',
            email:'',
            addr:'',
            group:'',
            circle:'',
            currentDate:'',
            minDate:new Date(2018,2,1),
            pickShow:false
       }
    },
    methods:{
        jump(){

        },
        save(){
            let obj={   uname:this.uname,
                        sex:this.sex,
                        birthday:this.birthday,
                        phone:this.phone,
                        email:this.email,
                        addr:this.addr,
                        group:this.group,
                        circle:this.circle,
                        currentDate:this.currentDate,
            };
            // console.log(this.uname);
            this.$emit('add',obj);
        },
        back(){
            this.$emit('back');
        },
        showPick(){
            this.pickShow=true;
        },
        getDate(val){
            this.birthday=val.toLocaleDateString();
            this.pickShow=false;
        },
        cancel(){
            this.pickShow=false;
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


