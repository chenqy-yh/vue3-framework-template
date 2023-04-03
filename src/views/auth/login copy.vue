<template>
  <div class="bg_div">
    <Form @submit="userUtil.login" :validation-schema="schema2" #default="{ errors }">
      <div class="login_div">
        <div class="login_form">
          <h2>会员登陆</h2>
          <Field class="global_login_input" name="account" value="test@qq.com" :validate-on-input="true"></Field>
          <div v-if="errors.account" class="global_input_error_msg">请输入正确的邮箱账号</div>

          <Field
            name="password"
            type="password"
            value="321"
            class="global_login_input"
            :validate-on-input="true"></Field>
          <div v-if="errors.password" class="global_input_error_msg">请输入正确的密码</div>
          <CommonButtom></CommonButtom>
          <div class="font_link">
            <i-wechat
              theme="two-tone"
              size="24"
              :fill="['#04BE02', '#fff']"
              class="bg-[#04BE02] p-[3px] rounded-full hover:scale-110 duration-200" />
          </div>
          <div class="linkList">
            <common-link></common-link>
            <common-link></common-link>
            <common-link></common-link>
          </div>
        </div>
        <div class="img_div">
          <img src="/images/login.jpg" />
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import v from '@/plugins/validate/index'
import { user as userUtil } from '@/utils'
//创建路由

const { ErrorMessage, Field, Form, yup } = v
const schema = yup.object({
  account: yup.string().required().email().label('用户名'),
  password: yup.string().required().min(3).label('密码'),
})
const schema2 = {
  account: {
    required: true,
    email: true,
  },
  password: {
    required: true,
    min: 3,
  },
}
</script>
<script lang="ts">
export default {
  route: {
    meta: {
      guest: true,
    },
  },
}
</script>

<style lang="scss">
.bg_div {
  @apply bg-gray-400 w-full h-screen flex justify-center items-center;

  .login_div {
    @apply w-full md:w-[45rem] h-96 bg-white grid md:grid-cols-2 min-w-[22rem] rounded-md overflow-hidden min-h-[24rem];

    .login_form {
      @apply flex flex-col justify-between items-center p-8;

      h2 {
        @apply text-2xl font-semibold tracking-widest;
      }

      .font_link {
        @apply w-full px-5 pt-3 flex justify-center;
      }

      .linkList {
        @apply mt-3 flex justify-center gap-4;
      }
    }

    .img_div {
      @apply hidden md:block relative;

      img {
        @apply absolute object-cover w-full h-full;
      }
    }
  }
}
</style>
