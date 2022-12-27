const ulEl = document.getElementById("categories");
console.log(ulEl);
const itemsEl = ulEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length} `);
console.log(itemsEl);
const rrr = itemsEl.map((e) => console.log(e));
