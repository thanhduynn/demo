"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slideshowData = [
  {
    backgroundImage: "/images/banyan-tree-more-to-discovery.webp",
  },
  {
    backgroundImage: "/images/banyan-tree-more-to-discovery.webp",
  },
  {
    backgroundImage: "/images/banyan-tree-more-to-discovery.webp",
  },
  {
    backgroundImage: "/images/banyan-tree-more-to-discovery.webp",
  },
];

export default function Slideshow() {
  return (
    <div className="w-full flex justify-center items-center px-4 h-[80vh] bg-black">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50, // Angle of the slides
          stretch: 0,
          depth: 200, // Controls the 3D depth
          modifier: 1,
          slideShadows: true, // Enable shadow effect
        }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 }, // Small screens (mobile)
          640: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Desktop
        }}
        className="w-full max-w-[1200px]"
      >
        {slideshowData.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="w-[90vw] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[250px] md:h-[300px] bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
