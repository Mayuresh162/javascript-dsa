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
    const open = "{[(";
    const close = "}])";
    const matching = { '}': '{', ']': '[', ')': '(' };
    
    const binaryOps = "+-*/=";
    const unaryOps = "@#";

    let hasOperand = false;
    let lastToken = null; // Tracks the last non-space, non-bracket character

    // 1. Balance Check (Stack)
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (open.includes(char)) {
            stack.push(char);
        } else if (close.includes(char)) {
            if (stack.pop() !== matching[char]) return "Unbalanced";
        }
    }
    if (stack.length > 0) return "Unbalanced";

    // 2. Validity Check (Manual Scan)
    // We create a "clean" version without spaces or brackets to check neighbors
    let clean = "";
    for (let char of str) {
        if (char !== " " && !open.includes(char) && !close.includes(char)) {
            clean += char;
        }
    }

    if (clean.length === 0) return "Balanced and Invalid";

    const isOpnd = (c) => (c >= '0' && c <= '9') || (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');

    for (let i = 0; i < clean.length; i++) {
        const curr = clean[i];
        
        if (isOpnd(curr)) {
            hasOperand = true;
        } else if (binaryOps.includes(curr)) {
            // Check left and right
            const left = clean[i - 1];
            const right = clean[i + 1];
            
            const leftValid = left && (isOpnd(left) || unaryOps.includes(left));
            const rightValid = right && isOpnd(right);
            
            if (!leftValid || !rightValid) return "Balanced and Invalid";
        } else if (unaryOps.includes(curr)) {
            // Check left only
            const left = clean[i - 1];
            if (!left || (!isOpnd(left) && !unaryOps.includes(left))) {
                return "Balanced and Invalid";
            }
        }
    }

    return hasOperand ? "Balanced and Valid" : "Balanced and Invalid";
}

// Examples
console.log(checkExpression("{(1+2) *3}"));      // Balanced and Valid
console.log(checkExpression("{x+y / 2 @}"));     // Balanced and Valid
console.log(checkExpression("[(y #)/2+3"));      // Unbalanced
console.log(checkExpression("()"));               // Balanced and Invalid
