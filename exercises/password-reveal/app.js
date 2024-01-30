// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.querySelector("#password");
const revealButton = document.querySelector("#toggle-password");

// 🤖: Create an Event Listener on the password reveal button
revealButton.addEventListener("click", function () {
	// Toggle the password field attribute between `password` and `text` to change visibility
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		revealButton.classList.remove("bi-eye-slash");
		revealButton.classList.add("bi-eye");
	} else {
		passwordInput.type = "password";
		revealButton.classList.remove("bi-eye");
		revealButton.classList.add("bi-eye-slash");
	}
});
