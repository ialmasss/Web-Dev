//1st task
alert( null || 2 || undefined );

//2nd task
alert( alert(1) || 2 || alert(3) );

//3rd task
alert( 1 && null && 2 );

//4th task
alert( alert(1) && alert(2) );

//5th task
alert( null || 2 && 3 || 4 );

//6th task
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);

//7th task
if (age >= 14 && age <= 90);

//8th task
if (age < 14 || age > 90);

//9th task
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

//10th task
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}