<template>
    <div class="login">
        <div class="logo">
            <img src="../../public/images/login/logo2.png"/>
        </div>
        <div>
            <van-cell-group>
                <van-field
                        v-model="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                        error-message=""
                />
                <van-field
                        v-model="sms"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码">
                    <van-button @click="getAuthCode" slot="button" size="small" type="info">
                        <span v-show="sendAuthCode" class="auth_text auth_text_blue" style='cursor:pointer'>获取验证码(60)</span>
                        <span v-show="!sendAuthCode" class="auth_text" style='cursor:pointer'> <span class="auth_text_blue" style='cursor:pointer'>{{auth_time}} </span> 秒之重新发送验证码</span>
                    </van-button>
                </van-field>

                <van-button size="large" round  type="info" style="width: 90%">登录</van-button>
            </van-cell-group>
        </div>

        <div class="chooseLoginType">
            <span  @click="showPwd">切换登录</span>
        </div>
        <pwd v-model="isShowPwd"></pwd>
    </div>
</template>

<script>
    import {Button, CellGroup, Field} from 'vant'
    import pwd from '../components/pwd'
    export default {
        name: "login",
        components: {
            [Button.name]: Button,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field,
            pwd
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
        position: absolute;
        bottom: 5px;
        left: 5px;
        font-size: 13px;
    }

</style>