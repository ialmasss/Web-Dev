//1st task
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

//2nd task
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

//3rd task
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//4th task
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}