export default function ImageCard({ imageUrl, title, description }) {
  return (
    <article className="image-card">
      <div className="image-wrap">
        <img src={imageUrl} alt={title} loading="lazy"
          onError={(event) => {
            event.currentTarget.src = "https://placehold.co/800x600/e2e8f0/334155?text=Image+Unavailable";
          }}
        />
      </div>
      <div className="card-content"><h3>{title}</h3><p>{description}</p></div>
    </article>
  );
}