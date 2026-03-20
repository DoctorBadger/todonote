import useEmblaCarousel from "embla-carousel-react";

const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
];
const extendedLogos = [...logos, ,...logos, ,...logos];

function LogosCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });


  return (
    <div className="overflow-hidden mt-16" ref={emblaRef}>
      <div className="flex gap-20 items-center">
        {extendedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-[0_0_auto] flex justify-center items-center"
          >
            <img
              src={logo}
              className="h-10 md:h-12 lg:h-14 object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogosCarousel;
