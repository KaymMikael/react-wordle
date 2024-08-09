const fiveLetterWords = [
  "Apple",
  "Brave",
  "Chase",
  "Drive",
  "Eagle",
  "Frame",
  "Glaze",
  "Horse",
  "Index",
  "Jolly",
  "Knack",
  "Lemon",
  "Maple",
  "Noise",
  "Oasis",
  "Pearl",
  "Quick",
  "Realm",
  "Shape",
  "Trust",
];

export const getRandomWord = () => {
  const randomNumber = Math.round(Math.random() * (fiveLetterWords.length - 1));
  return fiveLetterWords[randomNumber];
};
