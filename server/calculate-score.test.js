
const calculateScore = require('./calculate-score');

describe('calculateScore', () => {
  test('calculates correct score', () => {
    expect(calculateScore('HELLO')).toBe(8);
    expect(calculateScore('world')).toBe(9);
    expect(calculateScore('QUIZ')).toBe(22);
  });

  test.skip('handles invalid characters', () => {
    expect(calculateScore('')).toBe(undefined);
    expect(calculateScore('hello world')).toBe(undefined);
    expect(calculateScore('H3LL0')).toBe(undefined);
    expect(calculateScore('!@#$%')).toBe(undefined);
  });
});
