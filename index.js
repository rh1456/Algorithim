 


function fizzBuzz(num) {
for (var i = 1; 1 <= num; i++){
  if (i % 15 === 0) console.log('FizzBuzz');
  if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
  }
}
fizzBuzz(30); 