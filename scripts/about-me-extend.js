let button = document.querySelector(".button-section__button");
let content = document.querySelectorAll(".content__extend");

button.addEventListener("click", function() {
	button.classList.toggle("button-click");
	content[0].classList.toggle("extend-content");
	content[1].classList.toggle("extend-content");
})