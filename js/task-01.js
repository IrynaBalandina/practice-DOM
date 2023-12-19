const listEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listEl.length} `);

const ulEl = document.querySelectorAll('#categories>li');
ulEl.forEach(el => {

    console.log(
      `Category: ${el.firstElementChild.textContent},
       elements: ${el.lastElementChild.children.length}`,
    );
  });