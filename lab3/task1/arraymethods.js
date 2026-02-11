//1
function camelize(str) {
  return str
    .split('-') 
    .map(
      
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}

//2
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 

alert( arr ); // 5,3,8,1 

//3
function filterRangeInPlace(arr2, a, b) {

  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4);

alert( arr ); // [3, 1]


//4
let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => b - a);

alert( arr4 );

//5
function copySorted(arr5) {
  return arr5.slice().sort();
}

let arr5 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr5);

alert( sorted );
alert( arr5 );

//6
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result );

//7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); 

//8
let vasya8 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya8 = { name: "Петя", surname: "Иванов", id: 2 };
let masha8 = { name: "Маша", surname: "Петрова", id: 3 };

let users8 = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));


alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName );

//9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya9 = { name: "Вася", age: 25 };
let petya9 = { name: "Петя", age: 30 };
let masha9 = { name: "Маша", age: 28 };

let arr9 = [ vasya, petya, masha ];

sortByAge(arr9);

alert(arr9[0].name); 
alert(arr9[1].name); 
alert(arr9[2].name);

//10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

//11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya11 = { name: "Вася", age: 25 };
let petya11 = { name: "Петя", age: 30 };
let masha11 = { name: "Маша", age: 29 };

let arr11 = [ vasya11, petya11, masha11 ];

alert( getAverageAge(arr11));

//12
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

//13
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}