import MaxHeap from '../maxHeap.js';

const nums = [9, 8, 6, 6, 7, 5, 2, 1, 4, 3, 6, 2];
const numsLength = nums.length;
let heap;

describe('MaxHeap tests', () => {
  beforeEach(() => {
    heap = new MaxHeap([...nums]);
  });

  it('test MaxHeap push()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap._maxHeap).toEqual(nums);

    heap.push(7);
    expect(heap.size()).toBe(numsLength + 1);
    expect(heap._maxHeap).toEqual([9, 8, 7, 6, 7, 6, 2, 1, 4, 3, 6, 2, 5]);
  });

  it('test MaxHeap pop()', () => {
    heap = new MaxHeap();
    expect(heap.size()).toBe(0);
    expect(heap.isEmpty()).toBe(true);
    expect(heap._maxHeap).toEqual([]);

    expect(heap.pop()).toBe(undefined);
    expect(heap.size()).toBe(0);

    heap = new MaxHeap([...nums]);
    expect(heap.size()).toBe(numsLength);
    expect(heap._maxHeap).toEqual(nums);

    expect(heap.pop()).toBe(9);
    expect(heap.size()).toBe(numsLength - 1);
    expect(heap._maxHeap).toEqual([8, 7, 6, 6, 6, 5, 2, 1, 4, 3, 2]);
  });

  it('test MaxHeap peek()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap._maxHeap).toEqual(nums);
    expect(heap.peek()).toBe(9);

    expect(heap.pop()).toBe(9);
    expect(heap.size()).toBe(numsLength - 1);
    expect(heap._maxHeap).toEqual([8, 7, 6, 6, 6, 5, 2, 1, 4, 3, 2]);
    expect(heap.peek()).toBe(8);
  });

  it('test MaxHeap size()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap._maxHeap).toEqual(nums);

    expect(heap.pop()).toBe(9);
    expect(heap.size()).toBe(numsLength - 1);
    expect(heap._maxHeap).toEqual([8, 7, 6, 6, 6, 5, 2, 1, 4, 3, 2]);
  });

  it('test MaxHeap isEmpty()', () => {
    heap = new MaxHeap();
    expect(heap.size()).toBe(0);
    expect(heap.isEmpty()).toBe(true);
    expect(heap._maxHeap).toEqual([]);

    heap = new MaxHeap([...nums]);
    expect(heap.size()).toBe(numsLength);
    expect(heap.isEmpty()).toBe(false);
  });

  it('test MaxHeap left()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap.left(0)).toBe(1);
    expect(heap.left(1)).toBe(3);
    expect(heap.left(2)).toBe(5);
  });

  it('test MaxHeap right()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap.right(0)).toBe(2);
    expect(heap.right(1)).toBe(4);
    expect(heap.right(2)).toBe(6);
  });

  it('test MaxHeap parent()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap.parent(0)).toBe(-1);
    expect(heap.parent(1)).toBe(0);
    expect(heap.parent(2)).toBe(0);
    expect(heap.parent(3)).toBe(1);
    expect(heap.parent(4)).toBe(1);
  });

  it('test MaxHeap swap()', () => {
    expect(heap.size()).toBe(numsLength);
    expect(heap._maxHeap).toEqual(nums);

    heap.swap(0, numsLength - 1);
    expect(heap.peek()).toBe(2);
    expect(heap._maxHeap[numsLength - 1]).toBe(9);

    heap.swap(numsLength - 1, 0);
    expect(heap.peek()).toBe(9);
    expect(heap._maxHeap[numsLength - 1]).toBe(2);
  });
});