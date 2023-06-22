import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

const MySwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      spaceBetween: 10,
      breakpoints: {
        300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
      // These are new...
        injectStyles: [
          `
            .swiper-button-next,
            .swiper-button-prev {
              color: white;
            }
        `,
        ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false" class="h-40 px-5">
      <swiper-slide class="bg-red-400">Slide 1</swiper-slide>
      <swiper-slide class="bg-red-400">Slide 2</swiper-slide>
      <swiper-slide class="bg-red-400">Slide 3</swiper-slide>
      <swiper-slide class="bg-red-400">Slide 4</swiper-slide>
      <swiper-slide class="bg-red-400">Slide 5</swiper-slide>
      <swiper-slide class="bg-red-400">Slide 6</swiper-slide>
    </swiper-container>
  );
};

export default MySwiper;
