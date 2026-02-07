// Narrowing
// the process of refining types to more specific types than declared is called narrowing.
const padLeft = (padding, input) => {
    // typeof type guard
    if (typeof padding === "number") {
        return "-".repeat(padding) + input;
    }
    return padding + input;
};
console.log(padLeft(10, "px"));
console.log(typeof null); // object
// Truthiness narrowing
function printAll(strs) {
    // as first condition is true if it's string or array of string and if it's null than else block hits as null is a falsy value in js/ts.
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
export {};
//# sourceMappingURL=index.js.map