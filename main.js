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

	let youGotSent = document.createElement("h1");
	youGotSent.innerHTML = "You got sent:\n" + url;
	youGotSent.setAttribute("id", "youGotSent");
	document.body.appendChild(youGotSent);
}

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("change", () => {
	let youGotSent = document.getElementById("youGotSent");

	if (youGotSent) {
		document.body.removeChild(youGotSent);
	}
	let cleanURL = url.split("?")[0];
	let hashed = CryptoJS.AES.encrypt(input.value, "Very secret key");

	let qrdiv = document.getElementById("qrcode");
	if (qrdiv) {
		document.body.removeChild(qrdiv);
		let div = document.createElement("div");
		div.id = "qrcode";
		document.body.appendChild(div);
	}

	let info = document.getElementById("info");
	info.setAttribute("style", "display: block;");

	let qrcode = new QRCode("qrcode", {
		text: "test",
		width: 128,
		height: 128,
	});
	qrcode.makeCode(`${cleanURL + "?" + hashed}`);

	input.value = "";
});
