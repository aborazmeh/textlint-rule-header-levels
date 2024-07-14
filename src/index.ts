import type { TextlintRuleModule } from "@textlint/types";

export interface Options {
    min_header_level?: number;
    max_header_level?: number;
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const { Syntax, RuleError, report } = context;
    const minimumLevel = options.min_header_level ?? 1;
    const maximumLevel = options.max_header_level ?? 6;
    return {
        [Syntax.Header](node) {
            if (node.depth < minimumLevel || node.depth > maximumLevel) {
                const error = node.depth < minimumLevel ? "minimum" : "maximum";
                const ruleError = new RuleError(
                    `Found header level ${node.depth} while the ${error} allowed level is ${minimumLevel}.`,
                );
                report(node, ruleError);
            }
        },
    };
};

export default report;
