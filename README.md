# textlint-rule-header-levels

Specify the least and most allowed header levels

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-header-levels

## Example

If the minimum header level was set to 2, this will yield an error:

    # Title
    ## Subtitle

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "header-levels": {
            "min_header_level": 1,
            "max_header_level": 6
        }
    }
}
```

Via CLI

```
textlint --rule header-levels README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## TODO

- fix: by demoting and promoting headers, unless the maximum / minimum level reached
- report an error if the document start at a level higher than the minimum allowed (starts with h3 while h1 allowed), and demote levels accordingly
- report an error if a child header increased the level by more than one

## License

MIT © aborazmeh
