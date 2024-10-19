# 🎨 Custom Cursors with Images

This set of cursor styles can be applied on your site relatively easily with the use of CSS and appropriate image files. The cursors are triggered dynamically depending on the elements present which could be texts, links, buttons, or other complex interactions that can be implemented on your site!


## 🛠️ Features

- **Custom Pointer Cursor**: A default cursor style that can be used for every other part of your webpage apart from the page itself.

- **Cursor Type Text**: In any area which contains text including paragraphs and headings.

- **Cursor Type Clickable**: In the case of buttons and links, for example.

- **Cursor Type Move**: To show what is movable.

- **Special Cursors**: Censor, pointer help, and many other interaction-specific cursor styles.

- **Cursors Resize**: Cursors are for resizing in the north and south, east and west, and diagonal positions.

- **Hover Effects**: Allows providing feedback to user the action that is likely to be performed to those interactive boxes and buttons.

- **Dark Light Modes**: Make it possible to choose the tone of the arrow cursor from either dark (black) or light (white) depending on your design specifications.


## ⚙️ Setting Up
### 🖱️ 1. **Copy The CSS file**
Firstly, you will need to copy the `cursor.css` file given below that has all your desired custom cursors replicable.

### 🖼️ 2. **Adding and Import Cursor Images**
To further enhance these cursor styles import the various cursor images available (`.cur, .ani, etc`) in your project umbrella. Please note the following:

1. **Dark Theme**: Cursor images are optimally dark and best suited for use against light backgrounds.

2. **Light Theme**: Cursor images are preferably light, optimized for visibility against dark backgrounds.

### 🗺️ 3. **The project structure should look as follows**:
> *Make sure the urls to the images used in the css are accurate.*
```
project-directory/
│
├── image/
│   ├── dark/
│   │   └── cursor/
│   └── light/
│       └── cursor/
└── cursor.css
```

### ✏️ 4. **Edit the Image Paths for the Cursor**
The supplied CSS documents have replaced image file paths with placeholders, like:
```css
url('./image/dark/cursor/pointer.cur')
```

If required, ensure that you make the necessary changes to the paths to correspond with the actual positioning of the cursor files.

### 🛠️ 5. **Modifying The Cursors**
Different cursor types can be modified according to one’s specifications. The following cursor classes are available:

| Cursor Class                                 | Description                                        |
|----------------------------------------------|----------------------------------------------------|
| (default cursor)                             | Default cursor                                     |
| `p`, `h1`, `h2`, `input`, `textarea`         | Cursor for text                                    |
| `a`, `button`                                | Cursor for links or button pointers                |
| `.draggable`                                 | Cursor for movable items                           |
| `.crosshair`                                 | When crosshairs are needed                         |
| `.help`                                      | For hint actions                                   |
| `.wait`                                      | For the busy state                                 |
| `.not-allowed`                               | When performing disabled actions                   |
| `.zoom-in`, `.zoom-out`                      | Cursors for zooming in and out                     |
| `.resize-north-south`, `.resize-east-west`, <br> `.resize-north-east-south-west`, `.resize-north-west-south-east` | Cursors for adjusting the dimensions              |
| `.grab`                                      | Cursor associated with dragging items              |

**All it takes is to add class names to appropriate html elements e.g.**
```html
<div class=”draggable’>drag me!</div>
```

### 5. 👨‍💻 **Sample HTML Configuration**
And here is one simple illustration how to work with custom cursors in your html file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Website for Custom Cursors</title>
    <link href="style.css" rel="stylesheet">
    <link href="cursor.css" rel="stylesheet">
</head>

<body>

    <h1>Using Custom Cursors</h1>
    <p>This is a text. And here you can see the text cursor upon resting your mouse pointer over this area.</p>

    <a href="#">Go over this link to see a pointer cursor.</a>
    <button>Get a custom pointer when hovering on this button.</button>

    <div class="draggable">Drag me! (Cursor Hand)</div>

</body>
</html>
```