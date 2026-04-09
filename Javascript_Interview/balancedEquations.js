function checkExpression(str) {
    // with regex
    // const stack = [];
    // const open = { '{': '}', '[': ']', '(': ')' };
    // const close = { '}': '{', ']': '[', ')': '(' };
    
    // // 1. Check Balance (Brackets)
    // let isBalanced = true;
    // for (let char of str) {
    //     if (open[char]) {
    //         stack.push(char);
    //     } else if (close[char]) {
    //         if (stack.pop() !== close[char]) {
    //             isBalanced = false;
    //             break;
    //         }
    //     }
    // }
    // if (stack.length > 0) isBalanced = false;

    // if (!isBalanced) return "Unbalanced";

    // // 2. Check Validity (Operators/Operands)
    // // Remove all whitespace and brackets for easy neighbor checking
    // const clean = str.replace(/\s+/g, "").replace(/[\{\}\[\]\(\)]/g, "");
    
    // // If it's just brackets (empty after cleaning), it's Balanced but Invalid
    // if (clean.length === 0) return "Balanced and Invalid";

    // const isOperand = (c) => /[0-9a-zA-Z]/.test(c);
    // const isBinary = (c) => /[+\-*/=]/.test(c);
    // const isUnary = (c) => /[@#]/.test(c);

    // let isValid = true;
    // for (let i = 0; i < clean.length; i++) {
    //     const curr = clean[i];

    //     if (isBinary(curr)) {
    //         // Binary needs something on BOTH sides
    //         if (i === 0 || i === clean.length - 1 || !isOperand(clean[i-1]) || !isOperand(clean[i+1])) {
    //             // Note: clean[i-1] could be a unary result like 'x@', so we check if previous is operand OR unary
    //             if (!isOperand(clean[i-1]) && !isUnary(clean[i-1])) isValid = false;
    //             if (!isOperand(clean[i+1])) isValid = false;
    //         }
    //     } else if (isUnary(curr)) {
    //         // Unary (@, #) needs something on the LEFT side only
    //         if (i === 0 || (!isOperand(clean[i-1]) && !isUnary(clean[i-1]))) {
    //             isValid = false;
    //         }
    //     }
    // }

    // return isValid ? "Balanced and Valid" : "Balanced and Invalid";

    // without regex
    const stack = [];
    const matching = { '}': '{', ']': '[', ')': '(' };
    const open = "{[(";
    const close = "}])";
    
    const binaryOps = "+-*/=";
    const unaryOps = "@#"; // Postfix unary based on your logic
    
    let hasOperand = false;
    let expectOperand = true; // Start by expecting an operand or a prefix (if any)

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === " ") continue;

        if (open.includes(char)) {
            stack.push(char);
            // After an open bracket, we still expect an operand
        } else if (close.includes(char)) {
            if (stack.pop() !== matching[char]) return "Unbalanced";
            // After a closing bracket, the "expectOperand" state doesn't change 
            // (it depends on what was inside)
        } else if ((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasOperand = true;
            expectOperand = false; // We got our operand
        } else if (binaryOps.includes(char)) {
            // Binary ops need something before them (not expecting operand) 
            // and must be followed by something (set expectOperand to true)
            if (expectOperand) return "Balanced and Invalid"; 
            expectOperand = true;
        } else if (unaryOps.includes(char)) {
            // Your logic treats @# as postfix (requires left neighbor)
            if (expectOperand) return "Balanced and Invalid";
            // Postfix doesn't reset expectOperand because we still don't want a binary op next
        } else {
            // Unknown characters
            return "Balanced and Invalid";
        }
    }

    // Final checks
    if (stack.length > 0) return "Unbalanced";
    if (!hasOperand || expectOperand) return "Balanced and Invalid";

    return "Balanced and Valid";
}

// Examples
console.log(checkExpression("{(1+2) *3}"));      // Balanced and Valid
console.log(checkExpression("{x+y / 2 @}"));     // Balanced and Valid
console.log(checkExpression("[(y #)/2+3"));      // Unbalanced
console.log(checkExpression("()"));               // Balanced and Invalid
