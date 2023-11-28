import Pair from './pair.js';

export default class ChainingHashMap {
  constructor(capacity) {
    // 哈希表元素数量
    this._size = 0;
    // 哈希表容量
    this._capacity = capacity;
    // 哈希表负载因子
    this._loadThreshold = 0.75;
    // 哈希表扩展比例
    this._extendRatio = 2;
    // 哈希表桶
    this._buckets = new Array(capacity).fill(0).map(() => []);
  }
  get(key) {
    const index = this.hashFunc(key);
    const bucket = this._buckets[index];
    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.val;
      }
    }
    return null;
  }
  set(key, val) {
    if (this.loadFactor() > this._loadThreshold) {
      this.extend();
    }
    const index = this.hashFunc(key);
    const bucket = this._buckets[index];
    for (const pair of bucket) {
      if (pair.key === key) {
        pair.val = val;
        return;
      }
    }
    bucket.push(new Pair(key, val));
    this._size++;
  }
  delete(key) {
    const index = this.hashFunc(key);
    const bucket = this._buckets[index];
    const findIndex = bucket.findIndex(pair => pair.key === key);
    if (findIndex !== -1) {
      bucket.splice(findIndex, 1);
      this._size--;
    }
  }
  extend() {
    const oldBuckets = this._buckets;
    this._capacity *= this._extendRatio;
    this._size = 0;
    this._buckets = new Array(this._capacity).fill(0).map(() => []);
    for (const bucket of oldBuckets) {
      for (const pair of bucket) {
        this.set(pair.key, pair.val);
      }
    }
  }
  loadFactor() {
    return this._size / this._capacity;
  }
  hashFunc(key) {
    return key % this._capacity;
  }
}