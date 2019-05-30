// FIFO LL

class Node {
    constructor(value = null) {
        this.value = value
        this.next = null
    }
}

export default class QueueLL {
    constructor() {
        this.head = this.tail = null
    }

    enqueue(value) {
        const item = new Node(value)
        if (!this.tail) {
            this.tail = this.head = item
            return
        }

        this.tail.next = item
        this.tail = this.tail.next
    }

    dequeue() {
        if (!this.head) {
            return null
        }

        const value = this.head.value
        this.head = this.head.next
        if (!this.head)
            this.tail = null
        return value
    }

    get length() {
        if (!this.head)
            return 0

        let n = 0, node = this.head
        while (node) {
            node = node.next
            n++
        }
        return n
    }

    isEmpty() {
        return this.head === null
    }

    first() {
        return this.head? this.head.value : null
    }

    last() {
        return this.tail? this.tail.value : null
    }


}