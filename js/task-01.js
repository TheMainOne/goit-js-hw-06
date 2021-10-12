const list = document.querySelector('ul#categories');
console.log(`Number of categories: ${list.childElementCount}`);



list.querySelectorAll('li.item').forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelector('ul').childElementCount}`);
});