# File Encryption and Decryption:

## Introduction:

- This is a simple file encryption and decryption app that is a personal project <br>
  of mine.

- Tools and technologies used are:

  - HTML
  - CSS
  - Vanilla JavaScript
  - [Vite](https://vitejs.dev/)
  - Visual Studio Code

- This is my first time using _[Vite](https://vitejs.dev/)_ on a vanilla <br>
  JavaScript project. <br>
  Setting things up has been simple and quick and I'm liking it thus far. 👍🏽👍🏽

## Things I Learnt:

### Duplicating Elements:

The default display of the child elements of the`<form>` element was inline <br>
block. I wanted to insert a `<br>` element after very child element in the form. <br>
My initial approach was to use duplicates of the `<br>` element as shown below:

```javascript
    form.appendChild(label);
    form.appendChild(lineBreak);
    form.appendChild(fileUpload);
    form.appendChild(lineBreak);
    form.appendChild(encryptButton);
```

<br>

However, only one instance of the `<br>` element could only be rendered to HTML:

```HTML
    <form>
        <label>Select file to upload:</label>
        <input type="file" required="true">
        <br>
        <input type="submit" value="ENCRYPT">
    </form>
```

<br><br>

The [`cloneNode()`](https://www.w3schools.com/jsrEF/met_node_clonenode.asp) <br>
method, used to create copies of elements, resolved this issue:

```javascript
    form.appendChild(label);
    form.appendChild(lineBreak);
    form.appendChild(fileUpload);
    form.appendChild(lineBreak.cloneNode(true));
    form.appendChild(encryptButton);
```

<br>

```HTML
    <form>
        <label>Select file to upload:</label>
        <br>
        <input type="file" required="true">
        <br>
        <input type="submit" value="ENCRYPT">
    </form>
```

### File Input Type:

I initially wanted to use `<input type="file"/>` to encrypt `.txt` files but I <br>
realised I would need a server to store, perform encryption/decryption and <br>
download the result. <br>

In the near future, I hope to program a small server for that using <br>
[Nodejs](https://nodejs.org/en), which I have never worked with apart from <br>
installing packages on the terminal. It seems this is about to change soon and <br>
I am looking forward to add it to my resume. 😁 <br>

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

<br>

```HTML
    <input type="text" maxlength="100" placeholder="Type message here" required="true" size="30">
```