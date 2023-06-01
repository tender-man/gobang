<script lang="ts" setup>
import {useStore} from "./store";
import Board from "./components/Board.vue"
import ControlBar from "./components/ControlBar.vue"
import Message from "./components/Message.vue";
import {onBeforeMount, onBeforeUnmount} from "vue";

const store = useStore();
onBeforeMount(() => {
    const data = localStorage.getItem('store');
    if (data) {
        store.$state = JSON.parse(data)
    }
});
onBeforeUnmount(() => {
    const setLocal = (data) => {
        const data_s = JSON.stringify(data);
        localStorage.setItem('store', data_s)
    }
    for (let pos in store.pieces) {
        if (store.pieces[pos] > 1) {
            setLocal(store.$state)
            return
        }
    }
    setLocal('')
})
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
	.radius();
    position: relative;
    width: 500px;
    height: 560px;
    background-color: white;
    z-index: 200;
}
</style>
