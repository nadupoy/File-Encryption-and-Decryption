"use strict";

import "./style.css";

const app = document.getElementById("app");
const appName = document.createElement('H2');
const form = document.createElement("FORM");
const label = document.createElement("LABEL");
const inputText = document.createElement("INPUT");
const encryptButton = document.createElement("INPUT");
const decryptButton = document.createElement('INPUT');
const resetButton = document.createElement("INPUT");
const lineBreak = document.createElement("BR");

const header = document.getElementById('header');

appName.innerHTML = 'ENCRYPTOR/DECRYPTOR:';

header.appendChild(appName);

label.innerHTML = "Type message here:";

inputText.setAttribute("type", "text");
inputText.setAttribute("maxLength", "100");
inputText.setAttribute("required", "true");
inputText.setAttribute("size", "30");
inputText.setAttribute("placeholder", "Use letters only, no spaces");

encryptButton.setAttribute("type", "submit");
encryptButton.setAttribute("value", "ENCRYPT");

decryptButton.setAttribute('type', 'submit');
decryptButton.setAttribute('value', 'DECRYPT');

resetButton.setAttribute("type", "reset");
resetButton.setAttribute("value", "RESET");

form.appendChild(label);
form.appendChild(lineBreak);
form.appendChild(inputText);
form.appendChild(lineBreak.cloneNode(true));
form.appendChild(encryptButton);
form.appendChild(decryptButton);
form.appendChild(lineBreak.cloneNode(true));
form.appendChild(resetButton);

app.appendChild(form);

const footer = document.getElementById("footer");
const attribution = document.createElement("P");
const anchor =
  '<a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>';

attribution.innerHTML = `Built by ${anchor}.`;

footer.appendChild(attribution);

form.addEventListener("submit", encrypt);
form.addEventListener("reset", resetForm);

function encrypt(event) {
  let message = inputText.value;
  message = String(message).toUpperCase();
  let result = "";

  let charSet = {
    A: "80",
    B: "96",
    C: "22",
    D: "32",
    E: "69",
    F: "92",
    G: "63",
    H: "31",
    I: "6",
    J: "24",
    K: "4",
    L: "17",
    M: "29",
    N: "5",
    O: "56",
    P: "16",
    Q: "68",
    R: "59",
    S: "72",
    T: "76",
    U: "60",
    V: "74",
    W: "57",
    X: "75",
    Y: "13",
    Z: "64",
  };

  for (let char of message) {
    for (let key in charSet) {
      if (char == key) {
        char = charSet[key];
        result += char;
      }
    }
  }

  const cipher = document.createElement("P");
  cipher.innerHTML = `${result}`;
  app.appendChild(cipher);

  event.preventDefault();
}

function resetForm() {
  app.removeChild(cipher);
}
