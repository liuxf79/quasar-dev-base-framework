<template>
  <q-layout>
    <q-page-container>
      <q-page class=" row items-center justify-end">
        <q-card
          flat
          :class="$style.loginWindow"
          class="row col-12 justify-center items-center"
        >
          <q-card-section>
            <img
              class="full-width"
              src="https://yimg.yi23.net/webimg/web/images/2020/0602/main.jpg"
            />
          </q-card-section>
          <q-card-actions vertical class="justify-center items-center q-ml-sm">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="name"
                label="登录名 *"
                hint="由管理员处获取"
                lazy-rules
                :rules="[val => (val && val.length > 0) || '请输入用户名']"
              />

              <q-input
                filled
                type="password"
                v-model="pass"
                label="密码 *"
                hint="登录密码"
                lazy-rules
                :rules="[val => (val !== null && val !== '') || '请输入密码']"
              />

              <!-- <q-toggle v-model="accept" label="我同意后台使用相关管理规定" /> -->
              <q-card-section horizontal>
                <q-input
                  filled
                  type="tel"
                  v-model="verify"
                  label="图形验证码 *"
                  hint="右侧图片中数字"
                  lazy-rules
                  :rules="[
                    val => (val !== null && val !== '') || '请输入图形验证码'
                  ]"
                />
                <q-img
                  contain
                  src="https://yimg.yi23.net/collections/3968-20200317_173722-1584437842137-1.png"
                  style="width:100px;height:20%"
                  class="q-ml-sm"
                />
              </q-card-section>

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-md"
                />
              </div>
            </q-form>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
    <q-footer reveal elevated>
      <q-badge
        >Copyright © 2019 yi23.net All Rights Reserved. 京ICP证160617号</q-badge
      >
    </q-footer>
  </q-layout>
</template>

<script>
import { Cookies } from 'quasar';
export default {
  name: 'Login',
  data() {
    return {
      name: null,
      pass: null,
      verify: null
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '登录成功，正在跳转'
      });
      Cookies.set('token', `${this.name}${this.pass}${this.verify}`, {
        expires: 1,
        path: '/'
      });
      this.$store.commit('g/changeLogin', true);
      const { redirect = '/main' } = this.$route.query;
      setTimeout(() => {
        this.$router.push(redirect).catch(err => {
          console.log(err);
        });
      }, 2000);
    },
    onReset() {
      this.name = null;
      this.pass = null;
      this.verify = null;
    }
  }
};
</script>

<style lang="stylus" module>
.loginWindow
  width 50%
.pageBack
  background-image url('https://yimg.yi23.net/webimg/web/images/2020/0602/main.jpg')
  background-size cover
</style>
