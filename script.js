const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});
});

var typed = new Typed(".type", {
	strings: [
		"They don't do anything",
	],
	typeSpeed: 60,
	backSpedd: 60,
	loop: true
});
