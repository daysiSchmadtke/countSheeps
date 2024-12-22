let count = 0;
let totalCount = 0;
let totalEl = document.getElementById("total-el");
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = `Previous count: ${count} sheeps`;
  saveEl.textContent = countStr;
  totalCount += count;
  totalEl.textContent = `Total count ${totalCount} sheeps`;
  countEl.textContent = 0;
  count = 0;
}
