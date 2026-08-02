// Layer 1 (keep): search over the quote data.

import { getAll } from "./quotes.js";

export function search(term) {
  const q = term.toLowerCase();
  return getAll().filter(
    ({ text, author }) =>
      text.toLowerCase().includes(q) || author.toLowerCase().includes(q)
  );
}
