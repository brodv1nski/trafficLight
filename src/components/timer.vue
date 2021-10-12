<template>
  <div class="timer">{{ currentTime }}</div>
</template>

<script>
export default {
  name: "timer",
  props: ["currentTime"]
};
</script>

<style>
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
.timer {
  position: relative;
  margin-top: 40px;
  width: 20vh;
  height: 4vh;
  color: orangered;
  background: rgb(0, 0, 0);
  border: 2px solid #000;
  border-radius: 3px;
  line-height: 35px;
  font-size: 40px;
  text-align: center;
}
</style>
