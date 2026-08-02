// Layer 3 of the stack: the CLI, built on top of quotes-formatter.

import { formatAll } from "./formatter.js";

for (const line of formatAll()) {
  console.log(line);
}
