const add = (x, y) => x + y;

test('should add two numbers and return the sum', () => {
  const sum = add(10, 20);
  expect(sum).toBe(30);
});