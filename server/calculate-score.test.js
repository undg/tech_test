
const calculateScore = require('./calculate-score');

describe('calculateScore', () => {
  test('calculates correct score', () => {
    expect(calculateScore('HELLO')).toBe({score: 8});
    expect(calculateScore('world')).toBe({score: 9});
    expect(calculateScore('QUIZ')).toBe({score: 22});
  });

  test.skip('handles invalid characters', () => {
    expect(calculateScore('')).toBe({score: 0, err: "word can't be empty"});
    expect(calculateScore('hello world')).toBe({score: 0, err: "Invalid characters: [' ']"});
    expect(calculateScore('H3LL0')).toBe({score: 0, err: "Invalid characters: ['3', '0']"});
    expect(calculateScore('!@#$%')).toBe({score: 0, err: "Invalid characters: ['!', '@', '#', '$', '%']"});
  });
});
