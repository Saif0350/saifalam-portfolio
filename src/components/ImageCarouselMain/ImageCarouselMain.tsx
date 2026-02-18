import Link from "next/link";

type CSSVars = React.CSSProperties & {
  ["--no-of-slides"]?: number;
  ["--slide-width"]?: string;
  ["--slide-width-small"]?: string;
  ["--iteration-time"]?: string;
};

const ImageCarouselMain = () => {
  const slides = [
    "/assets/carousel/1.jpg",
    "/assets/carousel/2.jpg",
    "/assets/carousel/3.jpg",
  ];

  const trackSlides = [...slides, ...slides, ...slides];

  const styleVars: CSSVars = {
    "--no-of-slides": slides.length,
    "--slide-width": "270px",
    "--slide-width-small": "300px",
    "--iteration-time": "10s",
  };

  return (
    <section className="max-w-7xl px-8 mx-auto mt-6 md:mt-8">
      <Link href="#work" className="block">
        <div className="rounded-lg md:rounded-xl overflow-hidden">
          <div className="carousel" style={styleVars}>
            <div className="carousel-track">
              {trackSlides.map((src, index) => (
                <div key={index} className="carousel-slide">
                  <div className="relative w-full h-[277px]">
                    <img
                      src={src}
                      alt={`Slide ${(index % slides.length) + 1}`}
                      className="w-full h-full object-cover rounded-lg select-none"
                      width={270}
                      height={277}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ImageCarouselMain;
