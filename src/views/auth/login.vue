<template>
  <div class="bg_div">
    <form @submit="onSubmit">
      <div class="login_div">
        <div class="login_form">
          <h2>会员登陆</h2>
          <CommonInput v-model="account"></CommonInput>
          <CommonErrorMsg :errors="accountErr"></CommonErrorMsg>

          <CommonInput v-model="password"></CommonInput>
          <CommonErrorMsg :errors="passwordErr"></CommonErrorMsg>
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
    </form>
  </div>
</template>

<script setup lang="ts">
import v from '@/plugins/validate/index'
import { user as userUtil } from '@/utils'
//创建路由

const { useField, yup, useForm } = v
const schema = {
  account: yup.string().required().email().label('用户名'),
  password: yup.string().required().min(3).label('密码'),
}

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    account: 'tttt',
    password: '321',
  },
})

const { errorMessage: accountErr, value: account } = useField<string>('account')
const { errorMessage: passwordErr, value: password } = useField<string>('password')

const onSubmit = handleSubmit((values) => {
  userUtil.login(values)
})
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
