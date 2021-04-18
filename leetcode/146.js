/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.keys = [];
    this.cache = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const idx = this.keys.indexOf(key);

    if (idx == -1) {
        return -1;
    }

    // 改变 key 排序
    this.keys.push(this.keys.splice(idx, 1)[0]);

    return this.cache[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const idx = this.keys.indexOf(key);
    
    if (idx != -1) {
        this.keys.push(this.keys.splice(idx, 1)[0])
    } else {
        if (this.keys.length == this.capacity) {
            this.cache[this.keys.shift()] = null;
        }

        this.keys.push(key);
    }

    this.cache[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */