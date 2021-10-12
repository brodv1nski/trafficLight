<template>
  <div class="traffic-light">
    <lights :currentTime="timeChange" path="/red" class="red"></lights>
    <lights :currentTime="timeChange" path="/yellow" class="yellow"></lights>
    <lights :currentTime="timeChange" path="/green" class="green"></lights>
    <timer :currentTime="timeChange"></timer>
  </div>
</template>

<script>
import lights from "./components/lights.vue";
class State {
  constructor(path, duration, next) {
    this.path = path;
    this.duration = duration;
    this.next = next;
  }
}
export default {
  name: "App",

  data: function () {
    return {
      timeChange: 0,
      interval: null,
    };
  },
  methods: {
    trigger(state, callback) {
      callback(state);

      this.timeChange = state.duration;

      setTimeout(() => {
        this.trigger(state.next, callback);
      }, state.duration * 1000);

      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.timeChange--;
      }, 1000);
    },
  },
  mounted() {
    const red = new State("/red", 10);
    const yellowFromRed = new State("/yellow", 3);
    const yellowFromGreen = new State("/yellow", 3);
    const green = new State("/green", 15);

    red.next = yellowFromRed;
    yellowFromRed.next = green;
    green.next = yellowFromGreen;
    yellowFromGreen.next = red;

    let beginState = red;
    if (this.$route.path === "/yellow") beginState = yellowFromRed;
    else if (this.$route.path === "/green") beginState = green;

    this.trigger(beginState, (state) => {
      this.$router.push({ path: state.path, component: lights })
    });
  },
};
</script>

<style>
body {
  background-color: rgb(196, 196, 196);
  height: 90vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
}

.traffic-light {
  background: rgb(46, 46, 46);
  border: 5px solid black;
  border-radius: 30px;
  padding: 15px;
}

.red {
  background: red;
}
.yellow {
  background: yellow;
}
.green {
  background: rgb(2, 180, 2);
}
</style>
