import ChainingHashMap from '../chainingHashMap.js';

const capacity = 5;
let hashMap = {};

describe('ChainingHashMap tests', () => {
  beforeEach(() => {
    hashMap = new ChainingHashMap(capacity);
    hashMap.set(1, 'A');
    hashMap.set(2, 'B');
    hashMap.set(3, 'C');
  });

  it('test ChainingHashMap get()', () => {
    expect(hashMap.get(1)).toBe('A');
    expect(hashMap.get(3)).toBe('C');

    hashMap.set(4, 'D');
    expect(hashMap.get(4)).toBe('D');

    hashMap.set(6, 'a');
    expect(hashMap.get(6)).toBe('a');

    expect(hashMap.get(7)).toBe(null);
  });
  
  it('test ChainingHashMap set()', () => {
    expect(hashMap.get(1)).toBe('A');
    expect(hashMap.get(3)).toBe('C');
    expect(hashMap._size).toBe(3);
    expect(hashMap._capacity).toBe(capacity);
    expect(hashMap.loadFactor()).toBe(3 / capacity);

    hashMap.set(4, 'D');
    expect(hashMap.get(4)).toBe('D');
    expect(hashMap._size).toBe(4);
    expect(hashMap._capacity).toBe(capacity);
    expect(hashMap.loadFactor()).toBe(4 / capacity);

    hashMap.set(5, 'E');
    expect(hashMap.get(5)).toBe('E');
    expect(hashMap._size).toBe(5);
    expect(hashMap._capacity).toBe(capacity * 2);
    expect(hashMap.loadFactor()).toBe(5 / (capacity * 2));

    hashMap.set(5, 'e');
    expect(hashMap.get(5)).toBe('e');
    expect(hashMap._size).toBe(5);
    expect(hashMap._capacity).toBe(capacity * 2);
    expect(hashMap.loadFactor()).toBe(5 / (capacity * 2));
  });

  it('test ChainingHashMap delete()', () => {
    expect(hashMap.get(1)).toBe('A');
    expect(hashMap.get(3)).toBe('C');
    expect(hashMap._size).toBe(3);
    expect(hashMap._capacity).toBe(capacity);

    hashMap.delete(0);
    expect(hashMap._size).toBe(3);
    expect(hashMap._capacity).toBe(capacity);

    hashMap.delete(1);
    expect(hashMap.get(1)).toBe(null);
    expect(hashMap._size).toBe(2);
    expect(hashMap.loadFactor()).toBe(2 / capacity);
  });

  it('test ChainingHashMap extend()', () => {
    expect(hashMap.get(1)).toBe('A');
    expect(hashMap.get(3)).toBe('C');
    expect(hashMap._size).toBe(3);
    expect(hashMap._capacity).toBe(capacity);
    expect(hashMap.loadFactor()).toBe(3 / capacity);

    hashMap.extend();

    expect(hashMap.get(1)).toBe('A');
    expect(hashMap.get(3)).toBe('C');
    expect(hashMap._size).toBe(3);
    expect(hashMap._capacity).toBe(capacity * 2);
    expect(hashMap.loadFactor()).toBe(3 / (capacity * 2));
  });

  it('test ChainingHashMap loadFactor()', () => {
    hashMap = new ChainingHashMap(capacity);
    expect(hashMap.loadFactor()).toBe(0 / capacity);

    hashMap.set(1, 'A');
    expect(hashMap.loadFactor()).toBe(1 / capacity);

    hashMap.set(2, 'B');
    expect(hashMap.loadFactor()).toBe(2 / capacity);
    hashMap.set(3, 'C');
    expect(hashMap.loadFactor()).toBe(3 / capacity);

    hashMap.set(4, 'D');
    expect(hashMap.loadFactor()).toBe(4 / capacity);
    hashMap.set(5, 'E');
    expect(hashMap.loadFactor()).toBe(5 / (capacity * 2));
    hashMap.set(6, 'F');
    expect(hashMap.loadFactor()).toBe(6 / (capacity * 2));
  });

  it('test ChainingHashMap hashFunc()', () => {
    hashMap = new ChainingHashMap(capacity);
    expect(hashMap.hashFunc(0)).toBe(0);
    expect(hashMap.hashFunc(2)).toBe(2);
    expect(hashMap.hashFunc(4)).toBe(4);
    expect(hashMap.hashFunc(5)).toBe(0);
    expect(hashMap.hashFunc(6)).toBe(1);
  });
});