export default class HashMap {
    constructor(){
        this.loadFactor = 0.75
        this.capacity = 16
        this.load = 0
        this.buckets = new Array(this.capacity)
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity ;
        }

        return hashCode;
    } 

    set(key){
        const keyHash = this.hash(key)

        if (keyHash < 0 || keyHash >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        this.buckets[keyHash] = {keyHash}
        this.load += 1/this.capacity
        this.checkLoad()
    }

    get(key){
        const keyHash = this.hash(key)
        if(this.buckets[keyHash] === undefined){
            return null
        } else {
            const value = this.buckets[keyHash].keyHash
            return value
        }
    }

    has(key){
        if(this.get(key) === null) return false
        return true;
    }

    remove(key){
        if(this.has(key)){
            const keyHash = this.hash(key)
            this.buckets[keyHash] = undefined
            this.load -= 1/this.capacity
            return true
        } else {
            return false
        }
    }

    length(){
        let count = 0
        for(b in this.buckets){
            if(b != undefined){
                count++
            }
        }

        return count
    }

    clear(){
        this.buckets = new Array(this.capacity)
    }

    keys(){
        let keys = []
        for(let i=0; i<=this.capacity; i++){
            if(this.buckets[i] != undefined){
                keys.push(this.buckets[i].keyHash)
            }
        }

        return keys
    }

    checkLoad(){
        if(this.load > this.loadFactor){
            this.grow()
            console.log('overflow')
        }
    }

    grow(){
        const tmp = this.buckets.slice()
        this.capacity *= 2
        this.load = 0

        this.clear()

        for(let i=0; i<=tmp.length; i++){
            if(tmp[i] != undefined){
                this.set(tmp[i].keyHash)
            }
        }
    }
}