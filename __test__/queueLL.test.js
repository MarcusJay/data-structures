import QueueLL from "../queueLL";

describe("Queue LL suite", function() {
    it ("it starts empty", function () {
        const queue = new QueueLL()
        expect(queue.isEmpty()).toBeTruthy()
    })

    it ("enqueue", function () {
        const queue = new QueueLL()
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        expect(queue.length).toBe(3)
        expect(queue.first()).toBe('a')
        expect(queue.last()).toBe('c')
    })

    it ("dequeue", function () {
        const queue = new QueueLL()
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')
        const item = queue.dequeue()
        expect(item).toBe('a')
        expect(queue.length).toBe(2)
    })

})
