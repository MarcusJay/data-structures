// FIFO
export default class QueueA {
    constructor() {
        this.queue = []
    }

    enqueue(item) {
        this.queue.push(item)
    }

    dequeue() {
        return this.queue.shift()
    }

    get length() {
        return this.queue.length
    }

    isEmpty() {
        return this.length === 0
    }

    first() {
        return this.queue.length >0? this.queue[ 0 ] : null
    }

    last() {
        return this.queue.length >0? this.queue[ this.queue.length -1 ] : null
    }


}