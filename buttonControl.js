// external.js
document.addEventListener("DOMContentLoaded", function () {
    
  const buttons = document.querySelectorAll(".selectorButton");
  let selectedButton = document.querySelector(".selectorButton.selected");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (selectedButton) {
        selectedButton.classList.remove("selected");
      }
      button.classList.add("selected");
      selectedButton = button;

      selectedTimeInterval = selectedButton.textContent;

      switch (selectedTimeInterval) {
        case "D":
          viewD();
          break;
        case "W":
          viewW();
          break;
        case "M":
          console.log("m");
          break;
        case "6 M":
          console.log("6m");
          break;
        case "Y":
          console.log("y");
          break;
        default:
      }
    });
  });
});
