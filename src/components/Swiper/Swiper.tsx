import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "./style.css";

export default function App() {
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="sliderWrapper">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="heroSwiper"
          >
            <SwiperSlide>
              <img src="https://olcha.uz/image/1400x460/sliders/oz/cdn_1/2025-12-11/Mo8aflKeapAw638rn1tzQHjYFnH6LChZ0UJBkdPvQjYf9r1J1w7Pu1e3jpyv.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://olcha.uz/image/1400x460/sliders/oz/cdn_1/2025-12-18/XT1x5knirHsI7cM8TIG1XNLY2DFzSufL4p2CJFyjQuTJP5mwdbs7GvG7nEqG.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://olcha.uz/image/1400x460/sliders/oz/cdn_1/2026-01-25/oGABDyPQQq67nDTnpbONDBEtUJBzbPYRtjbmwzA9VU2KLvfs83hCgYYvMMj0.jpg" />
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl">
              <img src="https://olcha.uz/image/1400x460/sliders/oz/mGwEpHtRcBolFgTZPhhHaafAY1zQgEVVUaIF1PYXZNfWoE0CSSgcIrM9Rrf5.png" />
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl">
              <img src="https://olcha.uz/image/1400x460/sliders/oz/wlbm9PFaCBreiwmAIQP21ybTyQrvDvV3rNBW7NORQX8xsAXKlHtp8Tp8SQFp.jpg" />
            </SwiperSlide>
          </Swiper>

          {/* Custom navigation */}
          <div className="custom-prev">
            <IoChevronBack />
          </div>

          <div className="custom-next">
            <IoChevronForward />
          </div>

          {/* Pagination */}
          <div className="custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
