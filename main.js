async function hash(string) {
	const utf8 = new TextEncoder().encode(string);
	const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray
		.map((bytes) => bytes.toString(16).padStart(2, "0"))
		.join("");
}

let url = window.location.href;
if (url.includes("?")) {
	url = url.split("?")[1];
	url = CryptoJS.AES.decrypt(url, "Very secret key").toString(
		CryptoJS.enc.Utf8
	);
	document.body.innerHTML += `<h1>You got sent:\n${url}</h1>`;
}

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("change", () => {
	let cleanURL = url.split("?")[0];
	let hashed = CryptoJS.AES.encrypt(input.value, "Very secret key");
	document.body.innerHTML += `<h1 Your QR Code:</h1>`;
	let qrcode = new QRCode("qrcode", {
		text: "test",
		width: 128,
		height: 128,
	});
	qrcode.makeCode(`${cleanURL + "?" + hashed}`);
});
