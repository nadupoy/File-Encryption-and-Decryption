# File Encryption and Decryption:

## Introduction:

- This is a simple file encryption and decryption app that is a personal project of mine.

- Tools and technologies used are:

  - HTML
  - CSS
  - Vanilla JavaScript
  - [Vite](https://vitejs.dev/)
  - Visual Studio Code

- This is my first time using _[Vite](https://vitejs.dev/)_ on a vanilla JavaScript
  project. Setting things up has been simple and quick and I'm liking it thus far. 👍🏽👍🏽

<br>

## Things I Learnt:

### Duplicating Elements:

The default display of the child elements of the`<form>` element was inline block.
I wanted to insert a `<br>` element after very child element in the form.

My initial approach was to use duplicates of the `<br>` element as shown below:

```javascript
form.appendChild(label);
form.appendChild(lineBreak);
form.appendChild(fileUpload);
form.appendChild(lineBreak);
form.appendChild(encryptButton);
```

However, only one instance of the `<br>` element could only be rendered to HTML:

```HTML
    <form>
        <label>Select file to upload:</label>
        <input type="file" required="true">
        <br>
        <input type="submit" value="ENCRYPT">
    </form>
```

The [`cloneNode()`](https://www.w3schools.com/jsrEF/met_node_clonenode.asp)
method, used to create copies of elements, resolved this issue:

```javascript
form.appendChild(label);
form.appendChild(lineBreak);
form.appendChild(fileUpload);
form.appendChild(lineBreak.cloneNode(true));
form.appendChild(encryptButton);
```

```HTML
    <form>
        <label>Select file to upload:</label>
        <br>
        <input type="file" required="true">
        <br>
        <input type="submit" value="ENCRYPT">
    </form>
```

<br>

### File Input Type:

I initially wanted to use `<input type="file"/>` to encrypt `.txt` files but I
realised I would need a server to store, perform encryption/decryption and
download the result.

In the near future, I hope to program a small server for that using
[Nodejs](https://nodejs.org/en), which I have never worked with apart from
installing packages on the terminal. It seems this is about to change soon and
I am looking forward to add it to my resume. 😁

Consequently, for the time being, I opted to work with `<input type="text"`:

```javascript
    const inputText = document.createElement('INPUT');
    . . .
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('maxLength', '100');
    inputText.setAttribute('placeholder', 'Type message here');
    inputText.setAttribute('required', 'true');
    inputText.setAttribute('size', '30');
```

```HTML
    <input type="text" maxlength="100" placeholder="Type message here" required="true" size="30">
```

<br>

### Using an NPM Package:

To perform the encryption/decryption I downloaded a package called
[Encryptly](https://www.npmjs.com/package/encryptly?activeTab=readme)
from the [npm registry](https://www.npmjs.com/).

However, I encountered the following error when using it in my code:

```
    Uncaught ReferenceError: require is not defined
```

I discovered the cause of this was using `require` in a non-Node.js environment,
in this case the browser, hence it was not recognized. This was highlighted in
[this](https://rollbar.com/blog/referenceerror-require-is-not-defined-javascript/#)
article by the team at [Rollbar](https://rollbar.com/#).

Unfortunately, I was unable to resolve the above error. 😑

Since I am using vanilla JavaScript, I opted to write my own function for encryption
and decryption and not use any node packages. After watching [this](https://www.youtube.com/watch?v=NuyzuNBFWxQ)
overview of Cryptography by [Fireship](https://www.youtube.com/@Fireship),
I decided to use **Symmetric Encryption**.

<br>

### Encryption/Decryption Function (Algorithm? 🤔):

Below is a function I came up with for encrypting text into numbers:

```javascript
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
```

The function above produced straightforward results with one-word messages.

However, when the same function is inverted to decrypt numbers into text, I encountered the below error in the
browser console:

```
Uncaught TypeError: message is not iterable
```

The function is not effective for the purpose it is intended for. I'm going back to the drawing board to solve this issue.
