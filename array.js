const country = "Bangladesh";
const age = 19;
const isIndependent = true;
const student = { id: 1, name: "Alamin", age: 12, class: 11 };
const friends = [12, 21, 24, 67, 89];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(24));
console.log(friends.includes(8));

const newFriends = [56, 78, 29, 41];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
