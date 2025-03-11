const mustUseResult = {
    meta: {
        type: "problem",
        docs: {
            description: "Ensure neverthrow results are used correctly",
            recommended: "error",
        },
        messages: {
            mustUse: "Result must be handled with match, unwrapOr, or _unsafeUnwrap.",
        },
        schema: [],
    },
    create(context) {
        return {
            CallExpression(node) {
                const sourceCode = context.getSourceCode();
                const text = sourceCode.getText(node);

                const isResultCall =
                    /\b(mapErr|map|andThen|orElse|match|unwrapOr)\b/.test(text);
                const isStandalone =
                    !node.parent || node.parent.type === "ExpressionStatement";

                if (isResultCall && isStandalone) {
                    context.report({ node, messageId: "mustUse" });
                }
            },
        };
    },
};

export default {
    "must-use-result": mustUseResult,
};
