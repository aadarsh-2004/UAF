import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      column: 1,
      images: [
        { src: "/images/bird.jpg", alt: "Migratory birds at Menar Lake" },
        { src: "/images/bird1.JPG", alt: "Scenic view of Menar Lake" },
        { src: "/images/bird2.jpg", alt: "Wildlife at Menar" },
      ],
    },
    {
      column: 2,
      images: [
        { src: "/images/BirdGroup2.jpg", alt: "Local birds of Menar" },
        { src: "/images/birdsGroup.JPG", alt: "Sunset at Menar Lake" },
        { src: "/images/FlyingCap.jpg", alt: "Local culture of Menar" },
      ],
    },
    {
      column: 3,
      images: [
        { src: "/images/HelloBird.jpg", alt: "Conservation efforts at Menar" },
        { src: "/images/bird3.jpg", alt: "Rare bird species" },
        { src: "/images/menar.jpg", alt: "Morning at Menar Lake" },
      ],
    },
    {
      column: 4,
      images: [
        { src: "/images/NoPlasticMenar.jpg", alt: "Village life at Menar" },
        { src: "/images/whiteBird.JPG", alt: "Community conservation" },
        { src: "/images/BlackBird.JPG", alt: "Local wildlife" },
      ],
    },
  ];

  return (
    <section className="bg-amber-50">
      <div className="mx-auto px-6">
        {/* Gallery Header */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-5xl py-20">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-amber-900">
                Explore Our Wildlife Gallery
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-amber-600 sm:text-xl/8">
                A hidden gem where nature thrives and birds find sanctuary
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16">
          {galleryImages.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="grid gap-6">
              {column.images.map((image, imageIndex) => (
                <div
                  key={`image-${columnIndex}-${imageIndex}`}
                  className="relative overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;