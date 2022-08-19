# sha-demo

This is my own demo project for the SHA-256 algorithm,
this is my first time using the algorithm so it might not be perfect.

## Info

The normal index.html uses a QR Code for this website link with ?SHA-CODE at the end, which is then decrypted.

The old old-index.html uses 2 inputs and 2 outputs, 2 for the input text and input encrypted text, and 2 for the encrypted text and the decrypted text.

## Library used

This project uses the [cryptojs library](https://cryptojs.gitbook.io/docs/) for the encryption and decryption,
and the [qrcodejs library](https://github.com/davidshimjs/qrcodejs) for generatign the QR Code.

<details>
<summary>Notes</summary>
<hr>

_Note: the key used is "Very secret key" which is easy to see in the main.js file, which is really really bad practice and you should of course never expose your key. This implementation doesn't have salt or anything like that, so it's not really secure._

_Unrelated: If you are using any keys or tokens for an open source project, use a .env file. Please._

<hr>

</details>
