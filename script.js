let num1 = 0,
  num2 = 0,
  result = 0,
  operation = "";

function reset_all() {
  num1 = 0;
  num2 = 0;
  result = 0;
  operation = "";
}

function calculator(input_value) {
  console.log(typeof input_value);
  if (typeof input_value === "string") {
    if (input_value !== "equal") {
      operation = input_value;
    } else if (input_value === "equal") {
      if (operation === "addition") {
        result = num1 + num2;
      } else if (operation === "subtraction") {
        result = num1 - num2;
      } else if (operation === "multiplication") {
        result = num1 * num2;
      } else if (operation === "division") {
        result = num1 / num2;
      } else if (operation === "modulus") {
        result = num1 % num2;
      }
      document.getElementById("calculator-display").value = result;
      reset_all();
    }
  } else if (typeof input_value === "number" && !operation) {
    num1 = num1 * 10 + input_value;
    document.getElementById("calculator-display").value = num1;
  } else if (typeof input_value === "number" && operation) {
    num2 = num2 * 10 + input_value;
    document.getElementById("calculator-display").value = num2;
  }
}
