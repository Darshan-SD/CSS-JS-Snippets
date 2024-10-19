# :art: Moving Gradient Background

## :star: Features
- **Moving Gradient Background**: The background moves in a smooth and continuous manner.
- **Responsive**: The background adapts to the size of the browser window.
- **Customizable**: The background can be easily customized by changing the colors and animation speed.

## :hammer: How to Use
### 1. **Add the Required Files**
Make sure the following files are in your project or copy it's content to your project files:
   - `index.html` - The HTML file you want to add the background to.
   - `style.css` - A CSS file that will contain the background styles.

### 2. **Customize the Background**
Replace the sections highlighted below in the `style.css` file with your desired colors and animation speed.

```css
body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(
        -45deg,  /* degree of gradient */
        #F9F3DF, /* color1 */
        #FFDEDE, /* color2 */
        #FFDEFA, /* color3 */ 
        #FFC898  /* color4 */
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite; /* change '15s' to whatever speed you want */
    text-align: center;
    color: white;
}
```

> N.B. Feel free to add more colors to the gradient if you want and adjust the different keyframes to your heart's content!

### 3. **(Optional) Use radial-gradient**
Want to try a circular gradient? Change the `background` property of `body` to be:
```css
background: radial-gradient(circle, #F9F3DF, #FFDEDE, #FFDEFA, #FFC898);
```

<br>

---
Happy Coding! :heart: