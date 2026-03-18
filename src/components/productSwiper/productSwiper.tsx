import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import "./productSwiper.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Product {
  id: string;
  thumbnail: string;
  alt: string;
}

interface ProductSwiperProps {
  mainImage: string;
  mainImageAlt: string;
  products: Product[];
}

export default function ProductSwiper({
  mainImage,
  mainImageAlt,
  products,
}: ProductSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  const currentProduct = products[currentIndex] || products[0];
  const displayImage = currentProduct?.thumbnail || mainImage;

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      const newIndex = (currentIndex - 1 + products.length) % products.length;
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      const newIndex = (currentIndex + 1) % products.length;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-2 flex items-center justify-center">
        <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-xl">
          <img
            src={displayImage}
            alt={currentProduct?.alt || mainImageAlt}
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>
      <div className="relative">
        <div className='sliderProductWrapper'>
            <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            className="productSwiper"
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
            >
            {products?.map((product, index) => (
                <SwiperSlide key={product.id} className="flex justify-center" style={{
                    marginRight: '0px'
                }}>
                <button
                    onClick={() => handleThumbnailClick(index)}
                    className={`w-14 h-14 overflow-hidden border-2 transition-all rounded-2xl cursor-pointer ${
                    currentIndex === index
                        ? 'border-red-600'
                        : 'border-gray-300'
                    }`}
                >
                    <img
                    src={product.thumbnail}
                    alt={product.alt}
                    className="w-full h-full object-cover p-1"
                    />
                </button>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <button
          onClick={handlePrev}
          className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 p-2 rounded-full bg-white shadow-md"
          aria-label="Previous"
        >
          <IoChevronBack className="w-5 h-5 text-red-600" />
        </button>
        <button
          onClick={handleNext}
          className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 p-2 rounded-full bg-white shadow-md"
          aria-label="Next"
        >
          <IoChevronForward className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
}
