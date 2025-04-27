import type { Historia } from "@/types/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Carrousel({ items = [] }: { items: Historia[] }) {
  return (
    <section
      className="w-full h-full md:w-2/3 m-auto flex justify-center items-center overflow-hidden relative select-none"
      aria-label="Historias destacadas"
    >
      {/* Background gradient */}
      <span
        aria-hidden="true"
        className="pointer-events-none h-full w-1/12 md:w-1/5 absolute left-0 z-10 bg-linear-to-r from-burning-orange-400 to-transparent"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none h-full w-1/12 md:w-1/5 absolute z-10 right-0 bg-linear-to-l from-burning-orange-400 to-transparent"
      />

      {/* Carrousel */}
      <Swiper
        effect={"coverflow"}
        spaceBetween={
          typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 90
        }
        grabCursor
        centeredSlides
        loop
        slidesPerView={
          typeof window !== "undefined" && window.innerWidth < 768 ? 1.4 : 3
        }
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 30,
          modifier: 4.5,
        }}
        modules={[EffectCoverflow]}
        className="w-full h-full"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="rounded-xl md:rounded-4xl overflow-hidden"
          >
            <img src={item.image} alt={item.alt} className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carrousel;
