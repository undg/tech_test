
const calculateScore = require('./calculate-score');

describe('calculateScore', () => {
  test('calculates correct score', () => {
    expect(calculateScore('HELLO')).toEqual({score: 8});
    expect(calculateScore('world')).toEqual({score: 9});
    expect(calculateScore('QUIZ')).toEqual({score: 22});
  });

  test.skip('handles invalid characters', () => {
    expect(calculateScore('')).toEqual({score: 0, err: "word can't be empty"});
    expect(calculateScore('hello world')).toEqual({score: 0, err: "Invalid characters: [' ']"});
    expect(calculateScore('H3LL0')).toEqual({score: 0, err: "Invalid characters: ['3', '0']"});
    expect(calculateScore('!@#$%')).toEqual({score: 0, err: "Invalid characters: ['!', '@', '#', '$', '%']"});
  });
});
