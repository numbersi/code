<template>

  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    >
      <van-icon
        name="search"
        slot="right"
      />
      <div slot="title">titlesss</div>
    </van-nav-bar>
    <div class="body">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft: function () {
      this.$router.go(-1)
    },
    onClickRight: function () {

    }
  }
}
</script>

<style scoped>
.body {
  margin-top: 46px;
}
</style>
