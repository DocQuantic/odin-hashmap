export default class HashMap {
    static loadFactor = 0.5
    constructor(){
        this.capacity = 24
        this.load = 0
        this.buckets = new Array(this.capacity)
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode ;
    } 

    set(key, value){
        const keyHash = this.hash(key)

        if (keyHash < 0 || keyHash >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        this.buckets[keyHash] = {keyHash, value}
        /*Check load and grow if needed*/
    }

    get(key){
        const keyHash = this.hash(key)
        if(this.buckets[keyHash] === undefined){
            return null
        } else {
            const value = this.buckets[keyHash].value
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

    values(){
        let values = []
        for(let i=0; i<=this.capacity; i++){
            if(this.buckets[i] != undefined){
                values.push(this.buckets[i].value)
            }
        }

        return values
    }

    entries(){
        let entries = []
        for(let i=0; i<=this.capacity; i++){
            if(this.buckets[i] != undefined){
                entries.push([this.buckets[i].keyHash, this.buckets[i].value])
            }
        }

        return entries
    }
}