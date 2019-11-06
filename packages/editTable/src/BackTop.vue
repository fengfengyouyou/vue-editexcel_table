<template>
  <div class="back-top" @click="backTop" v-show="showBtn">
    <i class="fa fa-chevron-up"></i>
  </div>
</template>

<script>
// import { getStyle, startMove } from '@/utils/move'
export default {
  components: {},
  data() {
    return {
      timer: null,
      autoScroll: true,
      showBtn: false
    }
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
      if (!this.autoScroll) {
        clearInterval(this.timer)
      }
      this.autoScroll = false
    }
  },
  methods: {
    backTop() {
      this.timer = setInterval(() => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        var iSpeed = Math.floor(-scrollTop / 8)
        if (scrollTop === 0) {
          clearInterval(this.timer)
        }
        this.autoScroll = true
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop + iSpeed
      }, 30)
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 20px;
  bottom: 70px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4971f1;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 400;
}
</style>

