<script lang="ts" setup>
import Board from "./components/Board.vue"
import ControlBar from "./components/ControlBar.vue"
import Message from "./components/Message.vue";
import {useStore} from "./store";
import {watch} from "vue";

// 存在本局数据到本地
const store = useStore();
watch(store.$state, () => {
    const data_s = JSON.stringify(store.$state);
    localStorage.setItem('store', data_s)
}, {deep: true});
</script>

<template>
    <div class="app">
        <message/>
        <board/>
        <control-bar/>
    </div>
</template>

<style lang="less">
@import "style/mixin";

#app {
    position: relative;
    width: 500px;
    height: 560px;
    z-index: 200;
    .radius();
    background-color: white;
    box-shadow: 0 0 5px gainsboro;
}
</style>
