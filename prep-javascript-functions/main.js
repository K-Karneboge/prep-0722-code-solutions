function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(22, 7));

function getCircumference(r) {
  return 2 * Math.PI * r;
}
console.log(getCircumference(5));

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}
console.log(getFullName('Juan', 'Ramirez'));

function cube(number) {
  return Math.pow(number, 3);
}
console.log(cube(5));
