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



$$$$$$$

# _{Mr Roboger's Neighborhood}_

#### By _**{Owen Brown}**_

#### _{This is a web application that takes numerical user input and returns a pattern based on the given number.}_

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_{The application takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:
* _For numbers that contain a 1, all digits are replaced with "Beep!"_
* _For numbers that contain a 2, all digits are replaced with "Boop!"_
* _For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"}_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Open a new tab, drag the HTML document into the blank search bar and hit enter._ 


## Known Bugs

* None

## License

Copyright (c) _January 20th, 2023_ _Owen Brown_