//1st task
let i = 3;

while (i) {
  alert( i-- );
}

//2nd task
let i2 = 0;
while (++i2 < 5) alert( i2 );

while (i2++ < 5) alert( i2 );

//3rd task
for (let i = 0; i < 5; i) alert( i );

for (let i = 0; i < 5; ++i) alert( i );

//4th task
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//5th task
let i5 = 0;
while (i5 < 3) {
  alert( `number ${i5}!` );
  i5++;
}

//6th task
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

//7th task
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}