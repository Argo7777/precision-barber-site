import galleryFade from "@/assets/gallery-fade.jpg";
import galleryBeard from "@/assets/gallery-beard.jpg";
import galleryCut from "@/assets/gallery-cut.jpg";
import galleryTowel from "@/assets/gallery-towel.jpg";
import galleryShave from "@/assets/gallery-shave.jpg";

const images = [
  { src: galleryFade, alt: "Sharp skin fade haircut" },
  { src: galleryBeard, alt: "Precision beard sculpting" },
  { src: galleryCut, alt: "Clean modern men's haircut" },
  { src: galleryTowel, alt: "Hot towel barber service" },
  { src: galleryShave, alt: "Professional head shave" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold text-primary tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">The Precision Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
