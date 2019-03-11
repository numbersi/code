<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="24">
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
          >
            <div
              slot="action"
              @click="onSearch"
            >搜索</div>
          </van-search>
        </van-col>
      </van-row>

    </div>
    <!-- swiper area -->

    <div class="swiper-area">
      <van-swipe
        @change="swipeChange"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          @click="sss"
          data-s="ssss"
          v-for="(banner,index) in banner"
          :key="index"
        >
          <img
            v-lazy="banner.imageUrl"
            width="100%"
            height="220rem"
          />
        </van-swipe-item>
      </van-swipe>
    </div>

    <icons />

  </div>

</template>

<script>
import Icons from '@/components/component/Icons'

import { Search } from 'vant'
// import axios from 'axios'
export default {
  name: 'shoppingMail',
  data () {
    return {
      swipeIndex: '',
      value: '',
      banner: [
        { title: '',
          vid: '',
          imageUrl: 'http://ww1.sinaimg.cn/large/6485c65ely1g0gjs3jc2aj20u00deacd.jpg'
        },
        { title: '',
          vid: '',
          imageUrl: 'http://ww1.sinaimg.cn/large/6485c65ely1g0gjvfvrtxj20f006fmxo.jpg' },
        { title: '',
          vid: '',
          imageUrl: 'http://ww1.sinaimg.cn/large/6485c65ely1g0gjwe7yktj20u00cu75s.jpg' }
      ]

    }
  },

  components: {
    Search, Icons
  },

  created () {
    this.$axios.get('/kuyun?ac=videolist&h').then(res => {
      console.log(res)
    })
  },
  methods: {
    onSearch () {
      console.log(this.value)
      this.value = 'ss'
    },
    sss (e) {
      console.log(this.swipeIndex)
      this.$router.push('/voddetail')
    },
    swipeChange (index) {
      console.log(index)
      this.swipeIndex = index
    }
  }
}
</script>
<style scoped>
.swiper-area {
  clear: both;
}
</style>
