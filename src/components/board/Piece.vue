<script lang="ts" setup>
import {computed} from "vue"
import {pieceColor, useStore} from "../../store"

const {pos} = defineProps<{ pos: string }>()
const store = useStore()
const next = computed(() =>
		store.count % 2 === 0 ?
				(store.firster === pieceColor.red ? pieceColor.blue : pieceColor.red) : store.firster
)
const cla = computed(() => {
	if (store.pieces[pos] <= 1) {
		return 'normal'
	} else {
		return store.pieces[pos] % 2 === 0 ?
				store.firster : (store.firster === pieceColor.red ? pieceColor.blue : pieceColor.red)
	}
})
</script>

<template>
    <span :class="cla"
          @click.stop="!store.winner && store.pieces[pos] === 1 && store.change(pos)"
          :next="next" :has-winner="store.winner || 'undefined'"
          :black="['3-3','7-7','3-11','11-3','11-11'].includes(pos)"
    ></span>
</template>

<style lang="less" scoped>
span {
	float: left;
	width: 30px;
	height: 30px;
	background-color: white;

	&[black=true] {
		background-color: grey;
	}

	border-radius: 50%;
	box-sizing: border-box;
	transform: scale(0.5);
	transition: all 0.2s linear;


	&.normal {
		transition: all 0.1s linear;

		&[has-winner=undefined]:hover {
			background-color: transparent;
			transform: scale(0.9);
			cursor: pointer;

			&[next=red] {
				border: 5px solid rgba(255, 0, 0, 50%);
			}

			&[next=blue] {
				border: 5px solid rgba(0, 0, 255, 50%);
			}
		}

		&:not([has-winner=undefined]) {
			cursor: not-allowed;
		}
	}

	&:not(&.normal) {
		transform: scale(0.8);

		.decoration(@color) {
			background-color: @color;
			box-shadow: 0 0 5px @color;
		}

		&.red {
			.decoration(red)
		}

		&.blue {
			.decoration(blue)
		}
	}
}
</style>