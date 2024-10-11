const calculateScore = require("./calculate-score");
const dict = require("./dict");

describe("calculateScore", () => {
  test("calculates correct score", () => {
    expect(calculateScore("HELLO")).toEqual({word: "HELLO", score: 8 });
    expect(calculateScore("world")).toEqual({word: "world", score: 9 });
    expect(calculateScore("QUIZ")).toEqual({word: "QUIZ", score: 22 });
  });

  test("handles empty word", () => {
    expect(calculateScore("")).toEqual({ word: '', score: 0, err: dict.errNoEmpty });
  });

  test("handles invalid characters", () => {
    expect(calculateScore('hello world')).toEqual({word:'hello world', score: 0, err: `${dict.errBadChars}: [' ']`});
    expect(calculateScore('H3LL0')).toEqual({word: 'H3LL0', score: 0, err: `${dict.errBadChars}: ['3', '0']`});
    expect(calculateScore('!@#$%')).toEqual({word: '!@#$%', score: 0, err: `${dict.errBadChars}: ['!', '@', '#', '$', '%']`});
  });
});
