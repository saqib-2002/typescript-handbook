// Type Annotations
// Function Types

const greet = (person: string, date: Date): string => {
  // parameter type annotations on the function parameters and return type annotations appear after the function parameters list.
  const msg = `Hello ${person}, today is ${date.toDateString()}`;
  return msg;
};

console.log(greet("Maddison", new Date()));

// function which returns promises
const timeout = async (): Promise<number> => {
  const time = setTimeout(() => {
    console.log("promise runs after 5sec");
  }, 5000);

  return time;
};

timeout();

const names = ["Alice", "Bob", "Eve"];
// contextual typing, parameter s is string as the forEach method informs the type annotation
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types and Union Types
// y property is optional by adding the ?.

// const printCoord = (pt: { x: number | string; y?: number }) => {

// Type alias

// type Point = {
//   x: number | string;
//   y?: number;
// };

// An interface declaration is another way to name an object type
// type cannot be re-opened to add new properties vs an interface which is always extendable.
interface Point {
  x: number | string;
  y?: number;
}

const printCoord = (pt: Point) => {
  typeof pt.x === "string" // narrowing the union
    ? console.log("The coordinate of x is in string and is " + pt.x)
    : console.log("The coordinate's x value is " + pt.x);

  console.log("The coordinate's y value is " + (pt.y || 0));
};
printCoord({ x: 3, y: 7 });
printCoord({ x: "two" });

const welcomePeople = (x: string[] | string) => {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
};

welcomePeople(["saqib", "saifi", "saqsa"]);

//Literal Types

let str: "Hello" = "Hello";

str = "Hello";
// str = "Bye"; // error, Type '"Bye"' is not assignable to type '"Hello"'

const obj = {
  counter: 2,
};

console.log((obj.counter = 10));

declare function handleRequest(url: string, method: "GET" | "POST"): void;

// const req = { url: "https://example.com", method: "GET" };
// const req = { url: "https://example.com", method: "GET" } as const;
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method);
// handleRequest(req.url, req.method as "GET");
