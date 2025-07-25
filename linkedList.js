export default class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
        } else {
            this.tail.nextNode = node   
        }

        this.tail = node

        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(this.size === 0){
            this.tail = node
        }
        node.nextNode = this.head
        this.head = node

        this.size++
    }

    at(index){
        let n=0;
        let node = this.head
        while(n<index){
            n++
            node = node.nextNode
        }
        return node
    }

    pop(){
        let node = this.at(this.size-1)
        node.nextNode = null
        this.tail = node
        this.size--
    }

    contains(value){
        let node = this.head
        for(let i=0; i<this.size; i++){
            if(node.value == value){
                return true
            }
            node = node.nextNode
        }
        return false
    }

    find(value){
        let node = this.head
        for(let i=0; i<this.size; i++){
            if(node.value == value){
                return i
            }
            node = node.nextNode
        }
        return null
    }

    toString(){
        let node = this.head
        let string = ''
        for(let i=0; i<this.size; i++){
            string += `( ${node.value} ) -> `
            node = node.nextNode
        }
        string += 'null'
        
        return string
    }

    insertAt(value, index){
        let newNode = new Node(value)
        let prevNode = this.at(index-1)

        newNode.nextNode = prevNode.nextNode
        prevNode.nextNode = newNode

        this.size++;
    }

    removeAt(index){
        let prevNode = this.at(index-1)
        let currNode = prevNode.nextNode
        let replaceNode = currNode.nextNode

        currNode.nextNode = null
        prevNode.nextNode = replaceNode

        this.size--
    }
}

class Node {
    constructor(value){
        this.value = value
        this.nextNode = null
    }
}