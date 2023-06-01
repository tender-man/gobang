<script lang="ts" setup>
import {useStore} from "../store"
import Piece from "./board/Piece.vue"

const store = useStore()
</script>

<template>
    <div>
        <piece v-for="pos in Object.keys(store.pieces)" :pos="pos"/>
    </div>
</template>

<style lang="less" scoped>
@import "../style/mixin";

div {
    margin: 20px;
    padding-left: 1.5px;
    height: 455px;
    background-color: #f0f0f0;
	.radius();
    overflow: hidden;
}
</style>