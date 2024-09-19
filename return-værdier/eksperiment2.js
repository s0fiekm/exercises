function greeting(firstName = "guest") {
  return `Hello, ${firstName}`;
}

console.log(greeting("any name"));

greeting();

const txt = `Greeting is ${greeting("a name")}`;
console.log(txt);

console.log(greeting("klaus"));
