# SVG in JSX

> SVG in HTML is fine - it gets parsed and rendered once by the browser. <br>
> SVG in JSX requires the JS to download & execute first, generate VDOM for the SVG, render that to DOM...

---

## 1. Inline SVG (SVG as JSX)
- For small SVGs that need to be dynamic (e.g., `color`, `size`, or other properties).
- When you need direct manipulation of the SVG properties.

> **NOTE:**<br>
> Implementation like this is `NOT RECOMMENDED` and used very carefully if needed to be used like this

##### PROS
- You can easily bind SVG attributes like `fill` or `stroke` to React state and props.
- The SVG is part of the initial render, reducing external file requests.
- Easily manage accessibility attributes like `aria-label` or `role`.

##### CONS
- Large or complex SVGs can add a significant number of DOM elements, negatively affecting performance.
- Inline SVGs cannot be cached by the browser, so they will be re-rendered each time.
- Large SVGs embedded in JSX can clutter the component code

---

## 2. Reusable SVG Component
- For SVGs that are used frequently but may need different attributes or styles applied.
- When you want to encapsulate and reuse an SVG, similar to how you would use any other React component.

> **NOTE:**<br>
> This should be used when you want to make changes on SVG on the fly. If you want to keep static assets, then opt for option 3 or 4.

##### PROS
- Easily reuse the same component with different props (e.g., size, color).
- The SVG properties can change dynamically with state or props.
- Keeps SVG logic encapsulated and out of your main component files.

##### CONS
- Using an SVG as a component still adds all the SVG elements to the DOM, which can increase DOM size if many SVGs are used
- Each component instance creates new DOM nodes instead of leveraging the browser cache

---

## 3. Using `<img>` Tag
- For static, non-interactive SVGs where no styling changes are needed.
- When performance and caching are important, especially for large or complex SVGs.

> **NOTE:**<br>
> Make sure that svg files are optimized. [www.svgviewer.dev](https://www.svgviewer.dev/) provides a simple flow to do this and will take just few seconds for the whole flow.<br>
> If you are having similar images, and can be grouped, better to merge them into sprite image and load them like shown in option 4.

##### PROS
- SVGs loaded via `<img>` can be cached, improving performance when reused.
- Keeps your component's code simple and maintainable
- The SVG doesn't contribute directly to the DOM, only the `<img>` tag

##### CONS
- You cannot modify SVG properties like `fill` or `stroke` without manipulating the SVG file itself or using CSS filters
- Cannot style internal SVG elements directly from CSS or JSX

---

## 4. SVG Sprites
- When you need to reuse the same SVG multiple times across the application.
- For optimizing performance in applications that use many icons or SVGs.
- You can preload the sprite svg file (and then cache it) to improve performance
- Need to be mindful around the total size of svg sprite file

##### PROS
- Multiple SVGs are combined into a single sprite file, reducing requests.
- Individual SVGs from the sprite can be referenced by their ID, leveraging browser caching.
- Keeps the DOM cleaner by using <use> elements to refer to the sprite.

##### CONS
- Requires a build step to generate the sprite OR need to generate it via online tool everytime whenever any changes happends to those svg files
- Cannot easily manipulate individual SVG elements from the sprite file without adding CSS rules

---

#### Useful Reads
1. [Avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size)
2. [svgviewer.dev](https://www.svgviewer.dev/)
    - Optimize SVG File
    - Also helpful for - View, Modify, Rotate, Flip, Resize, Prettify
    - Provides code conversion from SVG to React and RN component, convert to PNG and base64 data strings
    - Search for free SVGs