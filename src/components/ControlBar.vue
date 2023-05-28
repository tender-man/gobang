<script lang="ts" setup>
import {useStore} from "../store"

const store = useStore()
const {reset, undo, setFirster} = store
</script>

<template>
    <div class="radius">
        <button :disabled="store.count<2" @click.stop="reset()">
            Reset
        </button>
        <button :disabled="store.count<2 || store.winner !== ''"
                class="undo" @click.stop="undo()"
        >
            Undo
        </button>
        <button :disabled="store.count>1" @click.stop="setFirster()">
            Firster:
            <span :style="`color:${store.firster}`">{{ store.firster }}</span>
        </button>
    </div>
</template>

<style lang="less" scoped>
div {
    background-color: transparent;
    margin: 20px;
    display: flex;
    justify-content: space-around;

    button {
        padding: 10px 0;
        flex: 1;

        &.undo {
            margin: 0 10px;
        }

        span {
            text-transform: capitalize
        }
    }
}
</style>