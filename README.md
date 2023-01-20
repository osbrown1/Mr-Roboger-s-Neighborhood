Describe: robogerInterpretation()

Test: "It should return an empty array"
Code: 
function robogerInterpretation(5);
let list = [];
Expected Output: []

Test: "It should return 'Yay'"
Code: 
 RI(num) {
  let list = [];
  for (let i = 0; i <= num; i++) {
    if (i.toString().includes("3")) {
      list.push("Yay");
    }
  }
  return list;
}
Expected Output: "Yay"

Test:  