import QueueA from "../queue";

describe("Queue suite", function() {
    it ("it starts empty", function () {
        const queue = new QueueA()
        expect(queue.isEmpty()).toBeTruthy()
    })

    it ("enqueue", function () {
        const queue = new QueueA()
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.length).toBe(3)
        expect(queue.first()).toBe('a')
        expect(queue.last()).toBe('c')
    })

    it ("dequeue", function () {
        const queue = new QueueA()
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        const item = queue.dequeue()
        expect(item).toBe('a')
        expect(queue.length).toBe(2)
    })

})
