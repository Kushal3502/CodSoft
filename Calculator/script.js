let result = "";
const buttons = document.querySelectorAll("input[type=button]");

Array.from(buttons).forEach((button) => {
  // console.log(button)
  button.addEventListener("click", (e) => {
    // console.log(e.target.value);
    if (e.target.value == "=") {
      result = eval(result);
      document.querySelector("#display").value = result;
    } else if (e.target.value == "DEL") {
      result = "";
      document.querySelector("#display").value = result;
    } else {
      result = result + e.target.value;
      document.querySelector("#display").value = result;
    }
  });
});
