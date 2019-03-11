<template>
  <div class="video-area">
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
// require videojs style
export default {
  data () {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'zh',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          // type: 'application/x-mpegURL',
          type: 'application/x-mpegURL',
          src: 'https://acfun.iqiyi-kuyun.com/20190223/ObqzXnCp/index.m3u8' // 你的m3u8地址（必填）
        }],
        poster: '/static/images/author.jpg',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        },
        width: document.body.clientWidth
      }
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style scoped>
.video-area {
  width: 100%;
  height: 33rem;
}
</style>
