import Pair from './pair.js';

export default class ArrayHashMap {
  constructor(capacity) {
    this._capacity = capacity;
    this._buckets = new Array(capacity).fill(null);
  }
  get(key) {
    const index = this.hashFunc(key);
    const pair = this._buckets[index];
    return pair ? pair.val : null;
  }
  set(key, val) {
    const index = this.hashFunc(key);
    this._buckets[index] = new Pair(key, val);
  }
  delete(key) {
    const index = this.hashFunc(key);
    this._buckets[index] = null;
  }
  entries() {
    let entries = [];
    for (let i = 0; i < this._buckets.length; i++) {
      const pair = this._buckets[i];
      if (pair) {
        entries.push(pair);
      }
    }
    return entries;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this._buckets.length; i++) {
      const pair = this._buckets[i];
      if (pair) {
        keys.push(pair.key);
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (let i = 0; i < this._buckets.length; i++) {
      const pair = this._buckets[i];
      if (pair) {
        values.push(pair.val);
      }
    }
    return values;
  }
  hashFunc(key) {
    return key % this._capacity;
  }
}