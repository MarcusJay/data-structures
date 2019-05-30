import BST from "../bst";

const randomIntBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


describe("BST suite", function() {
    it ("it starts empty", function () {
        const tree = new BST()
        expect(tree.isEmpty()).toBeTruthy()
    })

    it ("traversals", function () {
        const tree = new BST()
        let num = 0, node = null
        for (let i=0; i<200; i++) {
            num = randomIntBetween(1,500)
            node = tree.insert(num)
            expect(node).not.toBeNull()
            expect(node.value).toBe(num)
        }

        console.log('Preorder Traversal:')
        tree.preorderTraverse()

        console.log('Postorder Traversal:')
        tree.postorderTraverse()

        console.log('Inorder Traversal:')
        tree.inorderTraverse()

    })


})
