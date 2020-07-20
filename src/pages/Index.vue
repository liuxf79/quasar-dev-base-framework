<template>
  <q-page class="column full-width">
    <div class="q-mt-xs q-ml-sm q-mr-sm self-center full-width q-pa-md" >
      <q-card class="shadow-12" >
        <q-card-section class="bg-white text-dark">
          <div class="text-h7">登录用户信息</div>
        </q-card-section>
        <div
          horizontal
        >
          <q-field
            v-for="item in todos"
            :key="item.id"
            standout
            class="col-6 q-pa-xs full-width"
          >
            <template v-slot:prepend>
              <q-icon :name="item.icon" />
            </template>

            <template v-slot:control>
              <div class="self-center full-width no-outline">
                {{ item.title }}
              </div>
            </template>
          </q-field>
        </div>
      </q-card>
    </div>
    <div class="q-mt-xs q-ml-sm q-mr-sm self-center full-width q-pa-md">
      <q-card class="shadow-12 col-8">
        <q-card-section class="bg-white text-dark col-12">
          <div class="text-h7">登录日志</div>
        </q-card-section>
        <q-list class="col-10">
          <q-item v-for="item in meta" :key="item.id" class="col-5">
            <q-item-section avatar>
              <q-icon color="primary" name="cloud_done" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.title }}</q-item-label>
              <q-item-label caption>时间：{{ item.time }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import { Todo, Meta } from 'components/models';

export default Vue.extend({
  name: 'PageIndex',
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        title: '大怪',
        icon: 'account_box'
      },
      {
        id: 2,
        title: 'simon.liu@yi23.net',
        icon: 'email'
      },
      {
        id: 3,
        title: '13641189117',
        icon: 'phone_iphone'
      },
      {
        id: 4,
        title: '2020-02-13 11:40:13',
        icon: 'date_range'
      },
      {
        id: 5,
        title: '技术部',
        icon: 'contacts'
      }
    ];
    const meta: Meta[] = [
      {
        id: 1,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 2,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 3,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 4,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 5,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 6,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 7,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 8,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 9,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      },
      {
        id: 10,
        title: '101.254.208.218',
        time: '2020-06-04 09:27:14'
      }
    ];
    return { todos, meta, pagenum: 3 };
  },
  methods: {
    showLoading() {
      this.$axios
        .get(
          'https://yimg.yi23.net/collections/3968-20200317_173722-1584437842137-1.png'
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(this.$store.state.g.isLogin, 'this is is login');
    }
  }
});
</script>
<style lang="stylus" module>
.showColor
  background $primary
</style>
