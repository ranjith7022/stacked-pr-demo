// The CLI, built on top of quotes-formatter.

import { formatQuote } from "./formatter.js";
import { search } from "./search.js";

const term = process.argv[2];

if (term) {
  for (const quote of search(term)) {
    console.log(formatQuote(quote));
  }
} else {
  const { formatAll } = await import("./formatter.js");
  for (const line of formatAll()) {
    console.log(line);
  }
}
