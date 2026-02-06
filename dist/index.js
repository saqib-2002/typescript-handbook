// Type Annotations
// Function Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const greet = (person, date) => {
    // parameter type annotations on the function parameters and return type annotations appear after the function parameters list.
    const msg = `Hello ${person}, today is ${date.toDateString()}`;
    return msg;
};
console.log(greet("Maddison", new Date()));
// function which returns promises
const timeout = () => __awaiter(void 0, void 0, void 0, function* () {
    const time = setTimeout(() => {
        console.log("promise runs after 5sec");
    }, 5000);
    return time;
});
timeout();
const names = ["Alice", "Bob", "Eve"];
// contextual typing, parameter s is string as the forEach method informs the type annotation
names.forEach((s) => {
    console.log(s.toUpperCase());
});
const printCoord = (pt) => {
    typeof pt.x === "string" // narrowing the union
        ? console.log("The coordinate of x is in string and is " + pt.x)
        : console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + (pt.y || 0));
};
printCoord({ x: 3, y: 7 });
printCoord({ x: "two" });
const welcomePeople = (x) => {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
};
welcomePeople(["saqib", "saifi", "saqsa"]);
//Literal Types
let str = "Hello";
str = "Hello";
// str = "Bye"; // error, Type '"Bye"' is not assignable to type '"Hello"'
const obj = {
    counter: 2,
};
console.log((obj.counter = 10));
// const req = { url: "https://example.com", method: "GET" };
// const req = { url: "https://example.com", method: "GET" } as const;
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
export {};
// handleRequest(req.url, req.method as "GET");
//# sourceMappingURL=index.js.map