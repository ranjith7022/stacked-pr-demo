// Layer 1 of the stack: the data module.

export const quotes = [
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Small PRs get reviewed. Large PRs get approved.", author: "Every reviewer, ever" },
];

export function getAll() {
  return quotes;
}

export function getRandom() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
