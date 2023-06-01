<script lang="ts" setup>
import {useStore} from "../store"

const store = useStore()
const {reset, undo, setFirster} = store
</script>

<template>
    <div>
        <button @click.stop="reset()" :disabled="store.count<2">
            Reset
        </button>
        <button class="undo" @click.stop="undo()"
                :disabled="store.count<2 || store.winner !== ''"
        >
            Undo
        </button>
        <button @click.stop="setFirster()" :disabled="store.count>1">
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