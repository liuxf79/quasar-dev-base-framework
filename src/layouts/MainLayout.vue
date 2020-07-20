<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          衣二三管理后台
        </q-toolbar-title>
        <div>Y-Console <q-badge color="accent">v2.0.0</q-badge></div>
      </q-toolbar>
      <AssignedTabs :tabs="tabs" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          <div>
            <img
              src="https://yimg.yi23.net/avatar/yi23_logo.png"
              style="width:100px;"
              class="q-ma-md"
              spinner-color="white"
            />
          </div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          :item="link"
          :currentId="currentId"
          @itemHandler="itemHandler"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated>
      <q-badge
        >Copyright © 2019 yi23.net All Rights Reserved. 京ICP证160617号</q-badge
      >
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';
import AssignedTabs from 'components/AssignedTabs';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    AssignedTabs
  },

  data() {
    return {
      leftDrawerOpen: false,
      currentId: 0,
      tabs: [],
      essentialLinks: [
        {
          id: 0,
          title: '首页',
          caption: '基本信息展示',
          icon: 'home',
          link: '/main',
          tabs: [
            {
              title: '登录信息查看',
              link: '/main/info'
            },
            {
              title:'新增会员商品',
              link:'/main/yshop'
            }
          ]
        },
        {
          id: 1,
          title: '商品管理',
          caption: '商品',
          icon: 'add_shopping_cart',
          link: '/product',
          tabs: [
            {
              title: '客服商品列表',
              link: '/product/custom'
            },
            {
              title: '买手商品列表',
              link: '/product/buyer'
            }
          ]
        }
      ]
    };
  },
  created() {
    this.findItemBypath();
  },
  methods: {
    itemHandler(item, link) {
      this.currentId = item.id;
      this.tabs = item.tabs;
      let jumpLink = link ? link : item.link;
      if (this.tabs && this.tabs.length > 0 && jumpLink == item.link) {
        jumpLink = this.tabs[0].link;
      }
      this.$router.push(jumpLink).catch();
    },
    findItemBypath() {
      const path = this.$route.path.replace(/\//g, '');
      let tempItem = this.essentialLinks[0];
      let link = this.essentialLinks[0].link;
      this.essentialLinks.map(item => {
        if (item.link.replace(/\//g, '') == path) {
          tempItem = item;
          link = item.link;
        } else if (item.tabs && item.tabs.length > 0) {
          item.tabs.map(sub => {
            if (sub.link.replace(/\//g, '') == path) {
              tempItem = item;
              link = sub.link;
            }
          });
        }
      });
      this.itemHandler(tempItem, link);
    }
  }
};
</script>
