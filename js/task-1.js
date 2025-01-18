const categoriesElem = document.querySelectorAll("#categories .item");
console.log(`Numbers of categories: ${categoriesElem.length}`);

categoriesElem.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const item = category.querySelectorAll("li").length;
  console.log(`Elements: ${item}`);
});
