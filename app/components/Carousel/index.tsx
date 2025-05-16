"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/carousel/1.jpg";
import img2 from "../../../public/carousel/2.jpg";
import img3 from "../../../public/carousel/3.jpg";
import img4 from "../../../public/carousel/4.jpg";

const Carousel = () => {
  const data = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
  ];
  return (
    <div id="libraries" className="px-5 md:px-10 lg:px-20 mb-5 lg:mb-10">
      <ImageCarousel data={data} />
    </div>
  );
};

export default Carousel;

const ImageCarousel = ({
  data,
}: {
  data: {
    id: number;
    url: StaticImageData;
  }[];
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      speed={800}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="w-full custom-swiper"
    >
      {data.map((img) => (
        <SwiperSlide key={img.id} className="flex justify-center items-center pb-10">
          <div className="relative w-full aspect-[1492/1044]">
            <Image
              src={img.url}
              alt={`Slide ${img.id}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
