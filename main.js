"use strict";

import "./style.css";

const app = document.getElementById("app");
const appName = document.createElement("H2");
const form = document.createElement("FORM");
const label = document.createElement("LABEL");
const inputText = document.createElement("INPUT");
const encryptButton = document.createElement("INPUT");
const decryptButton = document.createElement("INPUT");
const resetButton = document.createElement("INPUT");
const lineBreak = document.createElement("BR");

appName.innerHTML = "ENCRYPTOR/DECRYPTOR:";

label.innerHTML = "Input message here:";

inputText.setAttribute("type", "text");
inputText.setAttribute("maxLength", "50");
inputText.setAttribute("required", "true");
// inputText.setAttribute("size", "30");
inputText.setAttribute("placeholder", "Use letters only, no spaces");

encryptButton.setAttribute("type", "button");
encryptButton.setAttribute("value", "ENCRYPT");

decryptButton.setAttribute("type", "button");
decryptButton.setAttribute("value", "DECRYPT");

resetButton.setAttribute("type", "button");
resetButton.setAttribute("value", "RESET");

form.appendChild(label);
form.appendChild(lineBreak);
form.appendChild(inputText);
form.appendChild(lineBreak.cloneNode(true));
form.appendChild(encryptButton);
form.appendChild(decryptButton);
form.appendChild(lineBreak.cloneNode(true));
form.appendChild(resetButton);

app.appendChild(appName);
app.appendChild(form);

const footer = document.getElementById("footer");
const attribution = document.createElement("P");
const anchor =
  '<a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>';

attribution.innerHTML = `Built by ${anchor}.`;

footer.appendChild(attribution);

encryptButton.addEventListener("click", encrypt);
decryptButton.addEventListener("click", decrypt);
resetButton.addEventListener("click", resetForm);

const cipher = document.createElement("P");

function encrypt() {
  let message = inputText.value;
  message = String(message).toUpperCase();
  let result = "";

  const charSet = {
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

  cipher.innerHTML = `${result}`;
  form.insertBefore(cipher, form.children[4]);
}

function decrypt() {
  let message = inputText.value;
  message = +message;
  let result = "";

  const charSet = {
    80: "A",
    96: "B",
    22: "C",
    32: "D",
    69: "E",
    92: "F",
    63: "G",
    31: "H",
    6: "I",
    24: "J",
    4: "K",
    17: "L",
    29: "M",
    5: "N",
    56: "O",
    16: "P",
    68: "Q",
    59: "R",
    72: "S",
    76: "T",
    60: "U",
    74: "V",
    57: "W",
    75: "X",
    13: "Y",
    64: "Z",
  };

  for (let char of message) {
    for (let key in charSet) {
      if (char == key) {
        char = charSet[key];
        result += char;
      }
    }
  }

  cipher.innerHTML = `${result}`;
  form.insertBefore(cipher, form.children[4]);
}

function resetForm() {
  form.reset();
  cipher.remove();
}
