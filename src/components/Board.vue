<script lang="ts" setup>
import {useStore} from "../store"
import Piece from "./board/Piece.vue"

const store = useStore()
</script>

<template>
    <div class="radius">
        <piece v-for="pos in Object.keys(store.pieces)" :pos="pos"/>
    </div>
</template>

<style lang="less" scoped>
div {
    margin: 20px;
    padding-left: 1.5px;
    height: 455px;
    background-color: #f0f0f0;
    overflow: hidden;
}
</style>