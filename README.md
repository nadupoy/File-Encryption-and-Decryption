# File Encryption and Decryption:

## Introduction:

- This is a simple file encryption and decryption app that is a personal project
  of mine.

- Tools and technologies used are:

  - HTML
  - CSS
  - Vanilla JavaScript
  - [Vite](https://vitejs.dev/)
  - Visual Studio Code

- This is my first time using _[Vite](https://vitejs.dev/)_ on a vanilla
  JavaScript project. <br>
  Setting things up has been simple and quick and I'm liking it thus far.

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

The [`cloneNode()`](https://www.w3schools.com/jsrEF/met_node_clonenode.asp),
used to create copies of elements, resolved this issue:

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
