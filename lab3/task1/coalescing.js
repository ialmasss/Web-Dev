//1st task
alert(undefined ?? NaN ?? null ?? "" ?? " ");

//2nd task
let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);

//3rd task
let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;