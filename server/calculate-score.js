const dict = require("./dict");
/**
 * Calculates the Scrabble score for a given word.
 * @param {string} word - The word to calculate the score for.
 * @returns {Object} An object containing the score and any error message.
 * @returns {number} score - The Scrabble score of the word.
 * @returns {string} [err] - Error message if the word is empty.
 */
function calculateScore(word) {
  // prettier-ignore
  const letterScores = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  let score = 0;
  const badChar = [];

  const letters = word.toUpperCase().split("");
  if (!letters.length) {
    return { score: score, err: dict.errNoEmpty };
  }

  letters.forEach((letter) => {
    const letterScore = letterScores[letter];
    if (letterScore === undefined) {
      badChar.push(letter);
      return;
    }
    score += letterScores[letter];
  });

  if (badChar.length) {
    return {
      score: 0,
      err: `${dict.errBadChars}: ['${badChar.join("', '")}']`,
    };
  }

  return { score: score };
}

module.exports = calculateScore;
