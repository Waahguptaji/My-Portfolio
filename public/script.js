const mobileNav = document.querySelector(".mobilenav");
const header = document.querySelector(".header");

//Here we are making a toggle using classList property.
//when the button is clicked, the classList.toggle() method is called on the button element.
// If the "active" class is already applied to the button, it will be removed. If it's not applied, it will be added.
toggle = () => {
  header.classList.toggle("active");
};
//when click on button it will call the toggle function.
mobileNav.addEventListener("click", () => {
  toggle();
});

function openContact() {
  var url = "contact.html";
  window.open(url);
}
