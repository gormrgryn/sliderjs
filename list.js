class Node {
    constructor (element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.length = 0
        this.head = null
    }
    add (element) {
        let node = new Node(element)
        if(this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.length++
    }
}