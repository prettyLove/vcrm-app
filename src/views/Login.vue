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
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
    import {Button, CellGroup, Field} from 'vant'

    export default {
        name: "login",
        components: {
            [Button.name]: Button,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field
        },
        data(){
            return{
                phone:'',
                sms:''
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
    }
</style>