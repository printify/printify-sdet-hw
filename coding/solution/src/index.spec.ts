import { getVendingResult } from './index';

describe('getVendingResult', () => {
  it('should return product B and 14 cents for 1.40 USD with product B selected', () => {
    expect(getVendingResult('50 50 20 20 B')).toEqual({
      change: '10 2 2',
      product: 'B',
    });
  });

  it('should return product C and no change for 2.33 USD with product C selected', () => {
    expect(getVendingResult('50 50 50 50 20 10 2 1 C')).toEqual({
      change: null,
      product: 'C',
    });
  });

  it('should fail for 70 cents with product A selected', () => {
    expect(getVendingResult('50 10 10 A')).toEqual({
      change: '50 10 10',
      product: null,
    });
  });

  // TODO
  // Any other cases?
});
