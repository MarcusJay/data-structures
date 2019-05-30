
export default class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        return this.stack.pop()
    }

    get length() {
        return this.stack.length
    }

    isEmpty() {
        return this.length === 0
    }

    peek() {
        return this.stack.length > 0? this.stack[ this.stack.length - 1 ] : null
    }
}
``