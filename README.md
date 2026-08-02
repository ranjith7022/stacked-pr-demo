# stacked-pr-demo

A tiny demo repository to try out **GitHub stacked pull requests** (public preview).

## The stack

| Layer | Branch | What it adds |
| ----- | ------ | ------------ |
| 1 | `quotes-data` | `src/quotes.js` — the quote data module |
| 2 | `quotes-formatter` | `src/formatter.js` — formats quotes (uses layer 1) |
| 3 | `quotes-cli` | `src/cli.js` — a CLI (uses layer 2) |

Each PR targets the branch below it: `quotes-cli` → `quotes-formatter` → `quotes-data` → `main`.

## Commands used

```sh
gh extension install github/gh-stack
gh stack init quotes-data quotes-formatter quotes-cli
# ... commit on each layer ...
gh stack submit
```
