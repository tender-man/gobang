<script lang="ts" setup>
import Board from "./components/Board.vue"
import ControlBar from "./components/ControlBar.vue"
import Message from "./components/Message.vue";
</script>

<template>
  <message/>
  <board/>
  <control-bar/>
</template>

<style lang="less">
* {
  margin: 0;
  font-family: Microsoft YaHei UI, sans-serif;
  font-weight: bold;
}

.radius {
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 0.5em;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;

  #app {
    .radius();
    position: relative;
    width: 500px;
    height: 560px;
    background-color: white;
    z-index: 200;
  }

  button {
    .radius();
    border: 1px solid gainsboro;

    &:enabled {
      &:hover {
        cursor: pointer;
        border: 1px solid #b0b0b0;
      }

      &:active {
        background-color: gainsboro;
      }
    }

    &:disabled {
      &:hover {
        cursor: not-allowed;
      }
    }
  }
}
</style>
