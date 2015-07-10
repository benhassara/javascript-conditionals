var phone = prompt("Enter your phone number (XXX-XXX-XXXX)");

if (phone[3] !== "-" || phone[7] !== "-") {
  alert("The phone number you entered is invalid.");
}
else {
  alert("Congrats! The phone number you entered is valid.");
}

var bday = prompt("Enter your birthdate (XX/XX/XX)");

if (bday[2] !== "/" || bday[5] !== "/") {
  alert("The birthdate you entered is invalid.");
}
else {
  alert("Congrats! The birthday you entered is valid.");
}

var postal = prompt("Enter your ZIP (XXXXX or XXXXX-XXXX)");

// if (postal.length !== 5 || postal.length !== 10) {
//   alert("The ZIP you entered is invalid.");
// }
// else if (postal.length === 10) {
//   if (postal[5] !== "-") {
//     alert("The ZIP you entered is invalid.");
//   }
// }
// else {
//   alert("Congrats! The ZIP you entered is valid.");
// }

if (postal.length === 5 || postal.length === 10) {
  if (postal.length === 10 && postal[5] !== "-")
    alert("Invalid ZIP.")
  else {
    alert("Congrats! Your ZIP is valid.")
  }
}
else {
  alert ("Invalid ZIP.")
}

var state = prompt("Enter your state abbreviation:");

if (state.length !== 2) {
  alert("Your state abbreviation is invalid.");
}
else {
  alert("Congrats! Your state abbreviation is valid.");
}

var married = prompt("Are you married? (Yes/No)");
if (married === "yes" || married === "no" || married === "YES" || married === "NO" || married === "Yes" || married === "No") {
  alert("Congrats! Your marital status is valid.");
}
else {
  alert("Your marital status is invalid.");
}
