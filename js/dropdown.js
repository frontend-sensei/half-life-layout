const buttons = document.querySelectorAll(".dropdown__trigger");
let activeButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (activeButton && activeButton !== button) {
      activeButton.classList.remove("dropdown__trigger--active");
    }
    button.classList.toggle("dropdown__trigger--active");
    activeButton = button;
  });
});
