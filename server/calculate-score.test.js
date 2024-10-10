const calculateScore = require("./calculate-score");
const dict = require("./dict");

describe("calculateScore", () => {
  test("calculates correct score", () => {
    expect(calculateScore("HELLO")).toEqual({ score: 8 });
    expect(calculateScore("world")).toEqual({ score: 9 });
    expect(calculateScore("QUIZ")).toEqual({ score: 22 });
  });

  test("handles empty word", () => {
    expect(calculateScore("")).toEqual({ score: 0, err: dict.errNoEmpty });
  });

  test("handles invalid characters", () => {
    expect(calculateScore('hello world')).toEqual({score: 0, err: `${dict.errBadChars}: [' ']`});
    expect(calculateScore('H3LL0')).toEqual({score: 0, err: `${dict.errBadChars}: ['3', '0']`});
    expect(calculateScore('!@#$%')).toEqual({score: 0, err: `${dict.errBadChars}: ['!', '@', '#', '$', '%']`});
  });
});
