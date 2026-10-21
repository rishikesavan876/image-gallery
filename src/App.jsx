import { Fragment } from "react";
import ImageCard from "./components/ImageCard.jsx";
import { images } from "./data/images.js";

export default function App() {
  return (
    <Fragment>
      <header className="site-header">
        <div className="header-inner">
          <div className="brand-mark" aria-hidden="true">▦</div>
          <div><p className="eyebrow">DISCOVER · EXPLORE · ENJOY</p><h1>Image Gallery</h1></div>
        </div>
      </header>
      <main className="page-container">
        <section className="intro">
          <p className="section-label">A LITTLE INSPIRATION</p>
          <h2>Beautiful places, one collection.</h2>
          <p>Explore the collection below. Each card is rendered from the image data array.</p>
        </section>
        <section className="gallery-grid" aria-label="Image gallery">
          {images.map((image) => (
            <ImageCard key={image.id} imageUrl={image.imageUrl} title={image.title} description={image.description} />
          ))}
        </section>
        <p className="gallery-count">Showing {images.length} images</p>
      </main>
      <footer>Built with React · Reusable components · Responsive CSS</footer>
    </Fragment>
  );
}