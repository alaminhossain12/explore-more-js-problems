const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "128gb",
    color: "silver",
    price: 56000,
  },
  {
    name: "apple",
    camera: 48,
    storage: "128gb",
    color: "golden",
    price: 156000,
  },
  { name: "oppo", camera: 32, storage: "128gb", color: "black", price: 36000 },
  { name: "Nokia", camera: 8, storage: "128gb", color: "white", price: 26000 },
  { name: "xomai", camera: 22, storage: "128gb", color: "blue", price: 16000 },
  { name: "vivo", camera: 108, storage: "128gb", color: "green", price: 76000 },
];

// console.log(phones);

function cheapestPhones(phones) {
  let cheapest = [0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    // console.log(phone);
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhones(phones);
console.log(mySelection);
