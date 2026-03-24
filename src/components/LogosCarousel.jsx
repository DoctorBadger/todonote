import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
];

const loopedLogos = [...logos, ...logos];

function LogosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 0.5,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative mt-16 group px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-20 items-center">
          {loopedLogos.map((logo, index) => (
            <div key={index} className="flex-[0_0_auto] min-w-0">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="h-10 md:h-12 lg:h-14 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default LogosCarousel;
