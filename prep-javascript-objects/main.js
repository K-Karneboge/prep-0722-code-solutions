var person = {
  firstname: 'Kevin',
  lastname: 'Karneboge',
  hobby: 'Painting'
};

console.log(person);

var fullname = person.firstname + ' ' + person.lastname;

person.job = 'tax verifier';
person.previousJob = 'insurance biller';

console.log("This person's full name is " + fullname + '.');
console.log("This person's job is " + person.job + '.');
console.log("This person's previous job was " + person.previousJob + '.');

console.log(person);
