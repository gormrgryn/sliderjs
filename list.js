class Node {
    constructor (element, dot) {
        this.element = element
        this.dot = dot
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor () {
        this.length = 0
        this.head = null
        this.tail = null
    }
    add (element, dot) {
        let node = new Node(element, dot)
        if(this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
            node.prev = currentNode
            this.tail = node
        }
        this.length++
    }
}