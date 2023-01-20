// Business Logic
function createList(num) {
  let list = [];
  for (let i = 0; i <= num; i++) {
    if (i.toString().includes("3")) {
      list.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      list.push("Boop!");
    } else if (i.toString().includes("1")) {
      list.push("Beep!");
    } else {
      list.push(i);
    }
  }
  return list;
}


// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const 
}

const Roger = createList(passage);
  document.getElementById("response").innerText = passage;
  document.getElementById("Roger's-response").innerText = Roger;


window.addEventListener("load", function() {
  document.querySelector("form#interpret").addEventListener("submit", handleFormSubmission);
});