//1st task

if ("0") {
  alert( 'Hello' );
}

//2nd task

let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }

//3rd task

let value3 = prompt('Enter number', 0);

if (value3 > 0) {
  alert( 1 );
} else if (value3 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//4th task

result = (a + b < 4) ? 'Below' : 'Over';

//5th task

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';