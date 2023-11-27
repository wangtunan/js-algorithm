import ArrayHashMap from '../arrayHashMap.js';

const capacity = 100;
let hashMap = {};

describe('ArrayHashMap tests', () => {
  beforeEach(() => {
    hashMap = new ArrayHashMap(capacity);
    hashMap.set(1, 'A');
    hashMap.set(2, 'B');
    hashMap.set(3, 'C');
  });

  it('tests ArrayHashMap get()', () => {
    expect(hashMap.get(0)).toBe(null);
    expect(hashMap.get(1)).toBe('A');
    expect(hashMap.get(2)).toBe('B');
    expect(hashMap.get(4)).toBe(null);
  });

  it('tests ArrayHashMap set()', () => {
    hashMap.set(3, 'D');
    expect(hashMap.get(3, 'D'));

    hashMap.set(4, 'D');
    expect(hashMap.get(4, 'D'));
    hashMap.set('4', 'd');
    expect(hashMap.get('4', 'd'));

    hashMap.set(5, 'E');
    expect(hashMap.get(5, 'E'));
  });

  it('tests ArrayHashMap delete()', () => {
    expect(hashMap.get(3)).toBe('C');
    hashMap.delete(3);
    expect(hashMap.get(3)).toBe(null);

    hashMap.set(3, 'a');
    expect(hashMap.get(3)).toBe('a');
  });

  it('tests ArrayHashMap entries()', () => {
    const entries = hashMap.entries();
    expect(entries.length).toBe(3);
    expect(entries).toContainEqual({ key: 1, val: 'A' });
    expect(entries).toContainEqual({ key: 2, val: 'B' });
    expect(entries).toContainEqual({ key: 3, val: 'C' });
  });

  it('tests ArrayHashMap keys()', () => {
    const keys = hashMap.keys();
    expect(keys.length).toBe(3);
    expect(keys.join(',')).toBe('1,2,3');
    expect(keys).toContain(1);
    expect(keys).toContain(2);
    expect(keys).toContain(3);
  });

  it('tests ArrayHashMap values()', () => {
    const values = hashMap.values();
    expect(values.length).toBe(3);
    expect(values.join(',')).toBe('A,B,C');
    expect(values).toContain('A');
    expect(values).toContain('B');
    expect(values).toContain('C');
  });

  it('tests ArrayHashMap hashFunc()', () => {
    hashMap = new ArrayHashMap(capacity);
    expect(hashMap.hashFunc(0)).toBe(0);
    expect(hashMap.hashFunc(10)).toBe(10);
    expect(hashMap.hashFunc(50)).toBe(50);
    expect(hashMap.hashFunc(90)).toBe(90);
    expect(hashMap.hashFunc(100)).toBe(0);
    expect(hashMap.hashFunc(110)).toBe(10);
    expect(hashMap.hashFunc(150)).toBe(50);
  });
});