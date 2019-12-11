


const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two arguments', () => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('should generate greeting form name', () => {
  const name = 'kimet'
  const greeting = generateGreeting(name);
  expect(greeting).toBe(`Hello ${name}`)
})