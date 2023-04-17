function fib(number) {
  if (number < 2) return 0;
  if (number == 2) return [0, 1];
  let sequence = [];
  sequence.push(0, 1);
  for (let i = 1; i < number - 1; i++) {
    sequence.push(sequence[i - 1] + sequence[i]);
  }

  return sequence;
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(7));
console.log(fib(30923));
