const names = [
  "alamin",
  "sajib",
  "saiful",
  "torikul",
  "samim",
  "asadul",
  "alamin",
  "sajib",
  "saiful",
  "samin",
];
function removeName(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueName = removeName(names);
console.log(uniqueName);
