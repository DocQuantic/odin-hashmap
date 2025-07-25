import {default as LinkedList} from "./linkedList.js"

export default class HashMap {
    static loadFactor = 0.5
    constructor(){
        this.capacity = 24
        this.buckets = this.createEmptyBuckets(this.capacity)
    }

    createEmptyBuckets(size){
        let tmp = []
        for(let i=0; i<=this.capacity; i++){
            tmp.push(new LinkedList())
        }

        return tmp
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode ;
    } 
}