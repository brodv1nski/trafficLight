<template>
  <div class="light" :class="{active: isActive, blink}" >
  </div>
</template>

<script>
export default {
  props: ['path', 'currentTime'],
  computed: {
    isActive: function () {
      return this.$route.path === this.path
    },
    blink: function () {
      return this.isActive && this.currentTime < 3;
    }
  }
}
</script>

<style scoped>  
  .light {
    display: block;
    border-radius: 100%;
    width: 20vh;
    height: 20vh;
    margin-bottom: 8px;
    opacity: 0.2;
  }
  .active {
    opacity: 1;
  }
  .blink {
    animation: blink-animation 1s steps(5, start) infinite;
  }

  @keyframes blink-animation {
    to {
      opacity: 0.2;
    }
  }
</style>
