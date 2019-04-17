<template>
    <div class="login">
        <div class="logo">
            <img src="../../public/images/login/logo2.png"/>
        </div>
        <div>
            <van-cell-group>
                <van-field
                        v-model="phone"
                        center
                        clearable
                        label="手机号"
                        placeholder="请输入手机号"
                />
                <van-field
                        v-model="sms"
                        center
                        clearable
                        label="验证码"
                        placeholder="请输入短信验证码">
                    <van-button @click="getAuthCode" slot="button" size="small">
                        <span v-show="sendAuthCode" class="auth_text auth_text_blue " style='cursor:pointer'>获取验证码</span>
                        <span v-show="!sendAuthCode" class="auth_text" style='cursor:pointer'> <span class="auth_text_blue" style='cursor:pointer'>{{auth_time}} </span> 秒后重发</span>
                    </van-button>
                </van-field>

                <van-button class="loginbtn" round   style="width: 90%" @click="login">登录</van-button>
            </van-cell-group>
        </div>
        <!--<group>-->
            <!--<span>微信手机格式化</span>-->
            <!--<x-input title="手机号码格式化" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile"></x-input>-->
        <!--</group>-->
        <div class="chooseLoginType">
            <span  @click="showPwd">切换登录</span>
        </div>
        <pwd v-model="isShowPwd"></pwd>
    </div>
</template>

<script>
    import {Button, CellGroup, Field} from 'vant'
    import pwd from '../components/pwd'
    import {XInput,Group} from 'vux'
    export default {
        name: "login",
        components: {
            [Button.name]: Button,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            pwd,
            [XInput.name]:XInput,
            [Group.name]:Group
        },
        data(){
            return{
                phone:'',
                sms:'',
                isShowPwd:false,
                sendYZMdisabled: false,
                sendAuthCode: true, /*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
                auth_time: 60, /*倒计时 计数器*/
                auth_timetimer: ''
            }
        },
        methods:{
            showPwd(){
              this.isShowPwd=true;
            },
            //验证码计时器
            getAuthCode() {
                this.sendYZMdisabled=true;
                this.sendAuthCode = false;
                this.auth_time = 60;
                this.auth_timetimer = setInterval(() => {
                    this.auth_time--;
                    if (this.auth_time <= 0) {
                        this.sendAuthCode = true;
                        this.sendYZMdisabled=false;
                        clearInterval(this.auth_timetimer);
                    }
                }, 1000);
            },
            login(){
                //todo 进行验证码判断，正确就调转到主页面
                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>
    .login {
        /*background:url("../../public/images/login/login.jpg");*/
        /*background-size: cover;*/
        /*background-repeat:no-repeat;*/
        /*background-position:center;*/
        /*background-attachment:fixed;*/
        /*position: fixed;*/
        /*background-size: 100% 100%;*/
        padding-top: 10%;
        text-align: center;
        height: 100%;
        width: 100%
    }

    .logo {
        text-align: center;
        padding-bottom: 20px;
    }
    .chooseLoginType{
        /* position: absolute;
        bottom: 5px;
        left: 5px; */
        font-size: 13px;
        position: fixed;
        bottom:10px;
        left: 10px;
    }
    .login .loginbtn{
        background-color: #23ade3!important;
        color:#fff;
        margin-top:40px;
    }
    .van-button--default{
       background-color: #23ade3!important;
        color:#fff; 
    }
    .van-cell-group{
        margin-top:40px;
    }
    .van-cell__title div{
        display: flex;
        align-items: center
    }

</style>