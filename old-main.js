let textInput = document.getElementById("input");
let shaInput = document.getElementById("shaInput");
let textOutput = document.getElementById("output");
let shaOutput = document.getElementById("shaOutput");

textInput.addEventListener("change", () => {
	textOutput.innerHTML = CryptoJS.AES.encrypt(
		textInput.value,
		"Very secret key"
	);
	console.log("test");
});

shaInput.addEventListener("change", () => {
	shaOutput.innerHTML = CryptoJS.AES.decrypt(
		output.innerHTML,
		"Very secret key"
	).toString(CryptoJS.enc.Utf8);
});
