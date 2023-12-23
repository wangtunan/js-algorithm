import TopKHeap from '../topKHeap.js';

const nums = [1, 7, 6, 3, 2];
describe('Top K Heap tests()', () => {
  it('test Top 0 in Heap', () => {
    const topKHeap = new TopKHeap([], 0);
    expect(topKHeap.getHeap()).toEqual([]);
  })
  
  it('test Top 1 in Heap', () => {
    const topKHeap = new TopKHeap([...nums], 1);
    expect(topKHeap.getHeap()).toEqual([7]);
  });

  it('test Top 2 in Heap', () => {
    const topKHeap = new TopKHeap([...nums], 2);
    expect(topKHeap.getHeap()).toEqual([6, 7]);
  });

  it('test Top 3 in Heap', () => {
    const topKHeap = new TopKHeap([...nums], 3);
    expect(topKHeap.getHeap()).toEqual([3, 7, 6]);
  });
});