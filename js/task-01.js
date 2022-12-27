const ulEl = document.getElementById("categories");
const itemsEl = ulEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length} `);
itemsEl.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const numberOfEl = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${numberOfEl}`);
});
