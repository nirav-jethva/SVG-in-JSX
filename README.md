# SVG in JSX

> SVG in HTML is fine — it gets parsed and rendered once by the browser. <br>
> SVG in JSX requires the JS to download & execute first, generate VDOM for the SVG, and render that to the DOM...

---

## 1. Inline SVG (SVG as JSX)

- For small SVGs that need to be dynamic (e.g., `color`, `size`, or other properties).
- When you need direct manipulation of the SVG properties.

> [!NOTE]
> Implementation like this is **NOT RECOMMENDED** and should be used very carefully if needed.

https://github.com/nirav-jethva/SVG-in-JSX/blob/b5d130779ed4fed780bc3b31ea65bba99e5cb306/src/app/1-inline/page.tsx#L3-L46

#### PROS

- You can easily bind SVG attributes like `fill` or `stroke` to React state and props.
- The SVG is part of the initial render, reducing external file requests.
- Easily manage accessibility attributes like `aria-label` or `role`.

#### CONS

- Large or complex SVGs can add a significant number of DOM elements, negatively affecting performance.
- Inline SVGs cannot be cached by the browser, so they will be re-rendered each time.
- Large SVGs embedded in JSX can clutter the component code.

---

## 2. Reusable SVG Component

- For SVGs that are used frequently but may need different attributes or styles applied.
- When you want to encapsulate and reuse an SVG, similar to how you would use any other React component.

> [!NOTE]
> This should be used when you need to make changes to the SVG dynamically. If you want to keep static assets, opt for option 3 or 4.

https://github.com/nirav-jethva/SVG-in-JSX/blob/b5d130779ed4fed780bc3b31ea65bba99e5cb306/src/app/2-reusable/page.tsx#L6-L14

#### PROS

- Easily reuse the same component with different props (e.g., size, color).
- The SVG properties can change dynamically with state or props.
- Keeps SVG logic encapsulated and out of your main component files.

#### CONS

- Using an SVG as a component still adds all the SVG elements to the DOM, which can increase DOM size if many SVGs are used.
- Each component instance creates new DOM nodes instead of leveraging the browser cache.

---

## 3. Using `<img>` Tag

- For static, non-interactive SVGs where no styling changes are needed.
- When performance and caching are important, especially for large or complex SVGs.

> [!NOTE]
> Make sure that SVG files are optimized. [svgviewer.dev](https://www.svgviewer.dev/) provides a simple flow to do this, taking just a few seconds for the whole process.
> If you have similar images that can be grouped, it's better to merge them into a sprite image and load them as shown in option 4.

https://github.com/nirav-jethva/SVG-in-JSX/blob/b5d130779ed4fed780bc3b31ea65bba99e5cb306/src/app/3-with-img/page.tsx#L4-L19

#### PROS

- SVGs loaded via `<img>` can be cached, improving performance when reused.
- Keeps your component's code simple and maintainable.
- The SVG doesn't contribute directly to the DOM, only the `<img>` tag.

#### CONS

- You cannot modify SVG properties like `fill` or `stroke` without manipulating the SVG file itself or using CSS filters.
- Cannot style internal SVG elements directly from CSS or JSX.

---

## 4. SVG Sprites

- When you need to reuse the same SVG multiple times across the application.
- For optimizing performance in applications that use many icons or SVGs.
- You can preload the sprite SVG file (and then cache it) to improve performance.
- Be mindful of the total size of the SVG sprite file.

https://github.com/nirav-jethva/SVG-in-JSX/blob/b5d130779ed4fed780bc3b31ea65bba99e5cb306/src/app/4-sprite/page.tsx#L3-L17

#### PROS

- Multiple SVGs are combined into a single sprite file, reducing requests.
- Individual SVGs from the sprite can be referenced by their ID, leveraging browser caching.
- Keeps the DOM cleaner by using `<use>` elements to refer to the sprite.

#### CONS

- Requires a build step to generate the sprite OR needs to be regenerated using an online tool whenever any changes happen to the SVG files.
- Cannot easily manipulate individual SVG elements from the sprite file without adding CSS rules.

---

#### Useful Links

1. [Avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size)
2. [svgviewer.dev](https://www.svgviewer.dev/)
   - Optimize SVG files
   - Also helpful for: View, Modify, Rotate, Flip, Resize, Prettify
   - Provides code conversion from SVG to React and React Native components, as well as conversion to PNG and base64 data strings.
   - Search for free SVGs
3. [svgsprit.es](https://svgsprit.es/)
   - To create SVG Sprite image online
   - It also has a POST endpoint to generate SVG Sprite image
