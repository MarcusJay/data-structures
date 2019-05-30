import Stack from "../stack";

describe("Stack suite", function() {
    it ("it starts empty", function () {
        const stack = new Stack()
        expect(stack.isEmpty()).toBeTruthy()
    })

    it ("push", function () {
        const stack = new Stack()
        stack.push(1)
        stack.push('a')
        expect(stack.length).toBe(2)
        expect(stack.peek()).toBe('a')
    })

    it ("pop", function () {
        const stack = new Stack()
        stack.push(1)
        stack.push('a')
        expect(stack.length).toBe(2)
        const item = stack.pop()
        expect(item).toBe('a')
    })

})
