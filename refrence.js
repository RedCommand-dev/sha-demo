async function hash(string) {
	const utf8 = new TextEncoder().encode(string);
	const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray
		.map((bytes) => bytes.toString(16).padStart(2, "0"))
		.join("");
}

let textInput = document.getElementById("input");
let shaInput = document.getElementById("shaInput");
let textOutput = document.getElementById("output");
let shaOutput = document.getElementById("shaOutput");

textInput.addEventListener("change", () => {
	textOutput.innerHTML = CryptoJS.AES.encrypt(
		textInput.value,
		"Very secret key"
	);
});

shaInput.addEventListener("change", () => {
	shaOutput.innerHTML = CryptoJS.AES.decrypt(
		output.innerHTML,
		"Very secret key"
	).toString(CryptoJS.enc.Utf8);
});
