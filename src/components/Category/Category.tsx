import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import "./category.css";

import { FreeMode, Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function App() {
  return (
    <section>
      <div className="container">
        <div className="relative">
          <Swiper
            slidesPerView={10}
            spaceBetween={20}
            freeMode={true}
            navigation={{
              nextEl: ".category-next",
              prevEl: ".category-prev",
            }}
            modules={[FreeMode, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 8,
              },
              1280: {
                slidesPerView: 10,
              },
            }}
          >
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Noutbuk, printer, kompyuterlar
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">
                    Televizor, foto-video va audio
                  </p>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-32.5">
              <a href="#" className="group">
                <div>
                  <img
                    src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
                    className="group-hover:scale-102 transition-all duration-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold">Oxirgi</p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>

          {/* navigation */}
          <div className="category-prev">
            <IoChevronBack />
          </div>

          <div className="category-next">
            <IoChevronForward />
          </div>
        </div>
      </div>
    </section>
  );
}
