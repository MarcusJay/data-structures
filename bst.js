// Binary tree

class Node {
    constructor(value = null) {
        this.value = value
        this.childL = null
        this.childR = null
    }
}

export default class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node (value)
            console.log(`Insert: created root: ${value}`)
            return this.root
        }

        const parent = this.search(this.root, value)
        if (parent.value === value) {
            console.log(`Insert: tree already contains ${value}. Skipping`)
            return parent
        }

        if (value < parent.value) {
            parent.childL = new Node(value)
            console.log(`Insert: ${value} is now left child of ${parent.value}`)
            return parent.childL
        } else {
            parent.childR = new Node(value)
            console.log(`Insert: ${value} is now right child of ${parent.value}`)
            return parent.childR
        }
    }

    // depth first search. return node with matching value. If no matching value, return closest parent, beneath which we would insert value.
    search(node = this.root, value) {
        if (!node) {
            return null
        }

        if (node.value === value) {
            return node
        }

        if (value < node.value)
            return node.childL? this.search (node.childL, value) : node
        else
            return node.childR? this.search (node.childR, value) : node
    }

    isEmpty() {
        return this.root === null
    }

    visit(node) {
        if (!node)
            return
        console.log (`${node.value} `)
    }

    // parent before children
    preorderTraverse(node = this.root) {
        if (!node) {
            return null
        }

        this.visit (node)
        if (node.childL)
            this.preorderTraverse(node.childL)
        if (node.childR)
            this.preorderTraverse(node.childR)
    }

    // left, parent, right
    inorderTraverse(node = this.root) {
        if (!node) {
            return null
        }

        if (node.childL)
            this.inorderTraverse(node.childL)
        this.visit (node)
        if (node.childR)
            this.inorderTraverse(node.childR)
    }

    // children before parent
    postorderTraverse(node = this.root) {
        if (!node) {
            return null
        }

        if (node.childL)
            this.postorderTraverse(node.childL)
        if (node.childR)
            this.postorderTraverse(node.childR)
        this.visit (node)
    }

}