<script setup lang="ts">
import {useStore} from "../store";

const store = useStore();
</script>

<template>
    <div :class="store.winner ? 'show' : ''">
        <section>
            Winner is
            <span :style="`color:${store.winner};`">{{ store.winner.toUpperCase() }}</span>
            ,Do you want to reset?
        </section>
        <button :disabled="store.count<2" @click.stop="store.reset()">
            Reset
        </button>
    </div>
</template>

<style scoped lang="less">
@import "../style/mixin";

div {
    position: absolute;
    top: 9px;
    left: -1px;
    z-index: -100;
    width: 500px;
    padding: 10px 20px;
    background-color: white;
	.radius();
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s linear;

    &.show {
        top: -75px;
    }

    button {
        padding: 10px;
    }
}
</style>