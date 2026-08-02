// Layer 2 of the stack: formatting, built on top of quotes-data.

import { getAll } from "./quotes.js";

export function formatQuote({ text, author }) {
  return `"${text}" — ${author}`;
}

export function formatAll() {
  return getAll().map(formatQuote);
}
