import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { certificates } from "../data/certificates";

const Certifications = () => {
  return (
    <section
  id="certifications"
  className="
  min-h-screen
  bg-[#fafafa]
  py-10
  pb-4
  "
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <h2 className=" text-[#7C5CC4] text-3xl md:text-4xl lg:text-5xl mb-4">
            Certifications
          </h2>

          <p className="text-xl text-gray-600">
            Continuous learning through
            certifications and workshops.
          </p>
        </div>

        <div className="relative" mt-24>

          <button className="cert-prev hidden md:flex">
            ←
          </button>
           
          <div
  className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2

  w-[300px]
h-[180px]
md:w-[500px]
md:h-[250px]
lg:w-[700px]
lg:h-[350px]

  rounded-full

  bg-[#E6D9FF]

  blur-3xl
  opacity-70
  "
></div>
        <div className="-mt-0">
          <p
  className="
  text-center
  text-sm
  text-gray-500
  mb-4
  md:hidden
  "
>
  ← Swipe left or right →
</p>
         <Swiper
  modules={[Navigation, EffectCoverflow]}
  effect="coverflow"
  centeredSlides={true}
  centeredSlidesBounds={true}
  loop={true}
  grabCursor={true}
  slidesPerView={"auto"}
   breakpoints={{
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: "auto",
    spaceBetween: 30,
  },
}}
  spaceBetween={30}
  speed={700}
  navigation={{
    prevEl: ".cert-prev",
    nextEl: ".cert-next",
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    scale: 0.9,
    slideShadows: false,
  }}
>
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <img
                  src={cert}
                  alt=""
                  className="certificate-image"
                />
              </SwiperSlide>
            ))}
          



          </Swiper>
          </div>

          <button className="cert-prev hidden md:flex">
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Certifications;