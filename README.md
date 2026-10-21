# React Image Gallery

## Run the project
1. Extract this ZIP and open the `react-image-gallery` folder in VS Code.
2. Open the terminal and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Requirements covered
- Reusable Image Card: `src/components/ImageCard.jsx`
- Array of objects with image URL, title, and description: `src/data/images.js`
- Dynamic rendering with `images.map()` in `src/App.jsx`
- Props passed from parent `App` to child `ImageCard`
- Components and data separated into different files
- Responsive CSS grid: 3 columns desktop, 2 tablet, 1 mobile
- React Fragment used in `App.jsx` to avoid an extra wrapper element

## Add an image
Add a new object to the `images` array in `src/data/images.js` with a unique `id`, `imageUrl`, `title`, and `description`. It will appear automatically without changing the JSX.
Images are hosted on Unsplash, so an internet connection is needed to load them.
