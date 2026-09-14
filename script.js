const display = document.getElementById("display");

// adds a number or operator to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Remove last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculates the expression entered by the user.
function calculateResult() {
  try {
    if (display.value === "") {
      return;
    }

    if (display.value.includes("/0")) {
      display.value = "Cannot divide by 0";
      return;
    }

    display.value = eval(display.value);
  } catch (error) {
    display.value = "Invalid input";
  }
}
