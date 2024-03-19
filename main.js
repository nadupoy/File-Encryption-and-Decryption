"use strict";

import "./style.css";
import { encryptFile } from "./fileEncryption.js";

const app = document.getElementById("app");
const form = document.createElement("FORM");
const label = document.createElement("LABEL");
// const fileUpload = document.createElement("INPUT");
const inputText = document.createElement('INPUT');
const encryptButton = document.createElement("INPUT");
const lineBreak = document.createElement("BR");

label.innerHTML = "Select file to upload:";

// fileUpload.setAttribute("type", "file");
// fileUpload.setAttribute("required", "true");

inputText.setAttribute('type', 'text');
inputText.setAttribute('maxLength', '100');
inputText.setAttribute('placeholder', 'Type message here');
inputText.setAttribute('required', 'true');
inputText.setAttribute('size', '30');

encryptButton.setAttribute("type", "submit");
encryptButton.setAttribute("value", "ENCRYPT");

form.appendChild(label);
form.appendChild(lineBreak);
// form.appendChild(fileUpload);
form.appendChild(inputText);
form.appendChild(lineBreak.cloneNode(true));
form.appendChild(encryptButton);

app.appendChild(form);

const footer = document.createElement("FOOTER");
const attribution = document.createElement("P");
const anchor =
  '<a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>';

attribution.innerHTML = `Built by ${anchor}.`;

const body = document.getElementsByTagName('body')[0];
body.appendChild(footer);
footer.appendChild(attribution);

form.addEventListener("submit", encryptFile);
