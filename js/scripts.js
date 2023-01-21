// Business Logic
function robogerInterpret(num) {
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
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let num = document.getElementById("numInput").value;
    let output = document.getElementById("output");
    let list = robogerInterpret(num);
    output.innerHTML = list.join(", ");
  });
});