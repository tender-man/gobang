import {defineStore} from "pinia"

let pieces: { [key: string]: number } = {}
for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 15; y++) {
        pieces[x + '-' + y] = 1
    }
}
let count = 1
let firster = 'red'
let winner = ''
export const useStore = defineStore('store', {
    state: () => ({
        pieces, count, firster, winner
    }), actions: {
        change(pos: string) {
            this.count++
            this.pieces[pos] = this.count
            const hasWinner = (pos: string): boolean => {
                const [x_s, y_s] = pos.split('-')
                const x = parseInt(x_s)
                const y = parseInt(y_s)

                let count = 0
                const decoration = (x: number, y: number) => {
                    this.pieces[x + '-' + y] !== 1 && this.pieces[x + '-' + y] % 2 === this.count % 2 ?
                        count++ : count = 0
                    return count >= 5
                }
                // →方向
                for (let y1 = 0; y1 <= 14; y1++) {
                    if (decoration(x, y1)) return true
                }
                // ↓方向
                count = 0
                for (let x2 = 0; x2 <= 14; x2++) {
                    if (decoration(x2, y)) return true
                }
                // ↘方向
                let x3 = x, y3 = y
                while (x3 > 0 && y3 > 0) {x3--;y3--}
                count = 0
                for (; x3 <= 14 && y3 <= 14; x3++, y3++) {
                    if (decoration(x3, y3)) return true
                }
                // ↙方向
                let x4 = x, y4 = y
                while (x4 > 0 && y4 < 14) {x4--;y4++}
                count = 0
                for (; x4 <= 14 && y4 >= 0; x4++, y4--) {
                    if (decoration(x4, y4)) return true
                }
                return false
            }
            if (hasWinner(pos)) {
                this.winner = this.count % 2 === 0 ?
                    this.firster : (this.firster === 'red' ? 'blue' : 'red')
            }
        },
        reset() {
            this.$reset()
            for (const pos in this.pieces) {
                this.pieces[pos] = 1
            }
        },
        undo() {
            for (const pos in this.pieces) {
                if (this.pieces[pos] === this.count) {
                    this.pieces[pos] = 0
                    this.count--
                    return
                }
            }
        },
        setFirster() {
            this.firster = this.firster === 'red' ? 'blue' : 'red'
        },
    }
})