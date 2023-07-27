const mobileNav = document.querySelector(".mobilenav");
const header = document.querySelector(".header");


//Here we are making a toggle using classList property.
//when the button is clicked, the classList.toggle() method is called on the button element. 
// If the "active" class is already applied to the button, it will be removed. If it's not applied, it will be added.
toggle = () => {
    header.classList.toggle("active");
}
//when click on button it will call the toggle function.
mobileNav.addEventListener("click", () => {
    toggle()
});


//Moving text animation
var stArr = ["Developer.", "Thinker.", "Writer.", "Avid Reader."];

function movingText(stringArr) {
    const textSpace = document.getElementById("movingText");
    var stringIndex = 0; // Index of the current string in the array
    var charIndex = 0;// Index of the current character in the string
    var text = [];// Array to store the characters being displayed
    var deleting = false;// Flag to indicate if characters are being deleted

    setInterval(function () {
        // If we have reached the end of the string array, start from the beginning
        if (stringIndex === stringArr.length) {
            stringIndex = 0;
        }

        // If characters are still left in the current string and we are not deleting
        if (charIndex < stringArr[stringIndex].length && !deleting) {
            text.push(stringArr[stringIndex][charIndex]);// Add the next character to the array
            charIndex++;
        } else {
            // If we have reached the end of the string or we are deleting
            text.pop();// Remove the last character from the array
            charIndex--;
            deleting = true;

            // If all characters have been deleted from the array
            if (text.length === 0) {
                deleting = false;
                stringIndex++; // Move to the next string in the array

            }
        }

        textSpace.innerHTML = text.join("");// Set the HTML content of the element to the characters in the array

    }, 120)
}
movingText(stArr);

function openContact() {
    var url = "contact.html";
    window.open(url);
}

// //Moving Rays
// const mainImg = document.querySelector(".mainImg");
// const imgMe = document.querySelector(".img-container");

// //Here we Add the 'active' class to the box
// onHover = () => {
//     mainImg.classList.add("active1");
// }

// // Remove the 'active' class from the box
// offHover = () => {
//     mainImg.classList.remove("active1");
// }

