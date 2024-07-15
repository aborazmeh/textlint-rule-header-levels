import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        `
# Book
## Part
### Chapter
#### Section
`,
        {
            text: `
## Chapter
### Section
            `,
            options: {
                min_header_level: 2,
                max_header_level: 3,
            },
        },
    ],
    invalid: [
        {
            text: `
# Title
## Subtitle
content
`,
            options: {
                min_header_level: 2,
                max_header_level: 3,
            },
            errors: [
                {
                    message: "Found header level 1 while the minimum allowed level is 2.",
                },
            ],
        },
    ],
});
