Customizing using CSS styling is Possible for cursor images 🎨

This set of cursor styles can actually be applied on your site relatively quite easily with the use of CSS and appropriate image files. The cursors are triggered dynamically depending on the elements present which could be texts, links, buttons, objects that you can even drag, in addition to other complex interactions that can be implemented on your site.

🛠️ Features

    Custom Pointer Cursor: A default cursor style that can be used for every other part of your webpage apart from the page itself.

    -Cursor Type Text: In any area which contains text including paragraphs and headings.

    - **Cursor Type Clickable: In the case of buttons and links, for example.

    -Cursor Type Move: To show what is movable.

    -Special Cursors: Censor, pointer help, and many other interaction-specific cursor styles.

    -Cursors Resize: Cursors are for resizing in the north and south, east and west, and diagonal positions.

    -Hover Effects: Allows providing feedback to user the action that is likely to be performed to those interactive boxes and buttons.

    -Dark Light Modes: Make it possible to choose the tone of the arrow cursor from either dark (black) or light (white) depending on your design specifications.

⚙️Setting Up
1. Copy The CSS file

    Firstly, you will need to copy the cursor.css file given below  that has all your desired custom cursors replicable.

2. Adding and Import Cursor Images

    To further enhance these cursor styles import the various cursor    images available (.cur, .ani etc) in your project umbrella.    Please do the following

Dark Theme: Cursor's images are optimally dark for use, are best suited against light backgrounds

Light Theme: Images of cursor preferably light; visibility is optimized against dark backgrounds

🗺️ The project structure should look as follows:

project-directory/
│
├── image/
│   ├── dark/
│   │   └── cursor/
│   └── light/
│       └── cursor/
└── cursor.css

Make sure the urls to the images used in the css are accurate.

3. Edit the Image Paths for the Cursor ✏️
    The supplied CSS documents have replaced image file paths with placeholders, like:

    css
        Copy code
        url('./image/dark/cursor/pointer.cur')

If required, ensure that you make the necessary changes to the paths to correspond with the actual positioning of the cursor files.

4. Modifying The Cursors 🛠️
Different cursor types can be modified according to one’s specifications. The following cursor classes are available:

* (default cursor)
p, h1, h2, input, textarea (cursor for text)
a, button (cursor for links or button pointers)
.draggable (cursor for movable items)
.crosshair (when crosshairs are needed)
.help (for hint actions)
.wait (for the busy state)
.not-allowed (when performing disabled actions)
.zoom-in, .zoom-out (cursors for zooming in and out)
.resize-north-south, .resize-east-west, .resize-north-east-south-west, .resize-north-west-south-east (cursors for adjusting the dimensions)
.grab (the cursor associated with dragging items)
All it takes is to add class names to appropriate html elements.

HTML
🖨️Copy code
    <div class=”draggable’>drag me!</div>

5. Sample HTML Configuration 👨‍💻
    And here is one simple illustration how to work with custom cursors in your html file:

html
Copy code
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