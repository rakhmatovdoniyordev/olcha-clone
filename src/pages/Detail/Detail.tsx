import ProductSwiper from "@/components/productSwiper/productSwiper";
import DetailBottom from "@/components/DetailBottom/DetailBottom";
import { specs } from "@/static";
import { CiMedal } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { FiHeart, FiInfo, FiShoppingBag } from "react-icons/fi";
import { IoLogoApple, IoStatsChart } from "react-icons/io5";
import { LiaShareSolid } from "react-icons/lia";
import { TbTruck } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Detail = () => {

  const {t} = useTranslation("detail")
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-2">
          <a href="" className="text-red-600 mr-4">
            Asosiy
          </a>{" "}
          /{" "}
          <a href="" className="text-red-600 mx-4">
            mahsulot katalogi
          </a>{" "}
          /{" "}
          <a href="" className="text-red-600 ml-4">
            mahsulot
          </a>
        </div>
        <div className="mt-8">
          <div>
            <h1 className="text-3xl font-bold">Mahsulotning nomi</h1>
          </div>
          <div className="mt-8 flex items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-red-600 text-xl">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <p>0 {t("comment")}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-red-600 text-bas cursor-pointer">
                <IoStatsChart />
                {t("comparison")}
              </button>
              <button className="flex items-center gap-2 text-red-600 text-base cursor-pointer">
                <FiHeart />
                {t("favorite")}
              </button>
              <button className="flex items-center gap-2 text-red-600 text-base cursor-pointer">
                <LiaShareSolid />
                {t("share")}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-1">
            <ProductSwiper
              mainImage="https://www.pngall.com/wp-content/uploads/20/iPhone-17-Pro-Max-Concept-Art-PNG.png"
              mainImageAlt="iPhone 17 Pro Max Concept Art"
              products={[
                {
                  id: "1",
                  thumbnail:
                    "https://www.pngall.com/wp-content/uploads/20/iPhone-17-Pro-Max-Concept-Art-PNG.png",
                  alt: "iPhone 17 Pro Max Concept Art",
                },
                {
                  id: "2",
                  thumbnail:
                    "https://wirelesszone.com/wp-content/uploads/2025/09/apple-iphone-17-pro-max-cosmic-orange-c-1024x1024.png",
                  alt: "iPhone 17 Pro Max Concept Art",
                },
                {
                  id: "3",
                  thumbnail:
                    "https://ipmobile.am/wp-content/uploads/2025/09/apple_iphone_17_pro_max_orange_1.png",
                  alt: "iPhone 17 Pro Max Concept Art",
                },
                {
                  id: "4",
                  thumbnail:
                    "https://1click.ru/upload/resize_cache/iblock/bb9/600_600_1/x5yb0becdf6f35s3qzn7kx3gd793m9jt1.png.pagespeed.ic.3_syLgpcyC.png",
                  alt: "iPhone 17 Pro Max Concept Art",
                },
                {
                  id: "5",
                  thumbnail:
                    "https://incredideals.co/cdn/shop/files/MGFW4_AV1.png?v=1757756451",
                  alt: "iPhone 17 Pro Max Concept Art",
                },
              ]}
            />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <p className="text-lg">
                  <span className="text-gray-500">Rangi:</span> Cosmic Orange
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://iphone-stores.ru/image/catalog/Promo/iPhone_17_ProMax_iphone_stores.png"
                    alt="Cosmic Orange color"
                    className="max-w-21 h-22 bg-gray-100 rounded-sm py-3 object-contain border-2"
                  />
                  <img
                    src="https://avatars.mds.yandex.net/get-mpic/15429936/2a0000019afe8e74c192f699483148cb4d74/orig"
                    alt="Silver color"
                    className="w-22 h-22 bg-gray-100 rounded-sm py-3  object-contain border-2"
                  />
                  <img
                    src="https://s3.fortifai.uz/shop/moderation/partner-139/1760419221-2.png"
                    alt="Deep Blue color"
                    className="w-22 h-22 bg-gray-100 rounded-sm py-3 object-contain border-2"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <p className="text-lg text-gray-500 mb-3">Xotira:</p>
                <div className="flex items-center gap-3">
                  <button className="py-2 border-2 rounded-md w-22">
                    256 GB
                  </button>
                  <button className="py-2 border-2 rounded-md w-22">
                    512 GB
                  </button>
                  <button className="py-2 border-2 rounded-md w-22">
                    1 TB
                  </button>
                  <button className="py-2 border-2 rounded-md w-22">
                    2 TB
                  </button>
                </div>
              </div>
              <div className="w-full pt-4">
                {specs.map((item, index) => (
                  <div key={index} className="flex items-center text-sm py-1">
                    <span className="text-gray-500 whitespace-nowrap">
                      {item.label}
                    </span>
                    <div className="flex-1 border-b border-dotted mx-2"></div>
                    <span className="text-black font-medium whitespace-nowrap">
                      {item.value}
                    </span>
                  </div>
                ))}
                <a href="#" className="text-blue-500 text-sm mt-3 inline-block">
                  {t("allSpecs")}
                </a>
              </div>
              <div className="mt-2">
                <a
                  href=""
                  className="text-blue-500 text-sm flex items-center gap-3"
                >
                  <IoLogoApple className="text-black text-lg" /> Apple
                  brendining barcha tovarlari
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="p-6 border border-gray-300 rounded-lg">
              <p>20 700 000 so'm</p>
              <div className="flex justify-between items-center gap-2 mt-4 text-gray-500">
                <p>{t("delivery_information")}</p>
                <FiInfo />
              </div>
              <div className="flex gap-2 mt-4 pb-18 border-b border-b-gray-300">
                <TbTruck className="text-3xl" />
                <div className="flex- flex-col">
                  <p className="font-bold">{t("delivery")}</p>
                  <p>
                    {t("location")}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full py-3 bg-[#12BF6C] text-white rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                  <FiShoppingBag /> {t("button_one")}
                </button>
                <button className="w-full py-3 mt-4 border-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                  {t("button_two")}
                </button>
              </div>
              <div className="mt-3">
                <p className="flex items-center gap-2 text-lg font-bold">
                  Market <CiMedal />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <div className="p-4 border border-gray-300 rounded-lg col-span-2">
            <p>{t("price")}</p>
            <div className="flex justify-between items-center gap-4 mt-4">
              <p className="flex items-center gap-2 text-lg font-bold">
                Market <CiMedal />
              </p>
              <p className="text-gray-500 text-sm">
                {t("location")}
              </p>
              <div className="flex flex-col items-end gap-2">
                <p className="font-bold text-xl">23 500 000 so'm</p>
                <p>
                  <span className="font-bold">{t("guarantee")}: </span>1 {t("year")}
                </p>
                <button className="px-4 py-1 bg-[#12BF6C] text-white rounded-lg">
                  {t("button_one")}
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg col-span-1">
            <p className="text-gray-500 text-sm">{t("pay_in_installments")}:</p>
            <p className="text-red-600 font-bold text-lg mt-2">
              2 753 000 so'm / 12 {t("month")}
            </p>
            <div className="pb-8 border-b border-gray-300 mt-4">
              <a href="/">
                <img
                  src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
                  alt=""
                  className="h-10 border border-gray-300 rounded-xl p-2"
                />
              </a>
            </div>
            <button className="w-full py-2 bg-red-700 rounded-xl text-white mt-4">
              {t("pay_in_installments")}
            </button>
          </div>
        </div>
        <div className="mt-10 max-w-[60%]">
          <p className="text-2xl mb-4">{t("description")}</p>
          <p className="text-gray-500">
            Apple iPhone 17 Pro Max kameralarini qisman yangiladi. Korpusning
            orqa tomonidagi asosiy o'zgarish telefoto linzalari edi. Endi bu
            boshqa linzalar kabi 48 MP sensor. U 4x optik zum bilan suratga
            olish imkonini beradi – oldingi flagmanlarda 5x bo‘lgan. 4x
            kattalashtirish bilan fokus uzunligi 100 mm ishlatiladi. Shuningdek,
            siz 200 mm fokus uzunligi bilan 12 MP ruxsatda 8x kattalashtirish
            bilan suratga olishingiz mumkin. 200x raqamli zoom ham mavjud. Yangi
            iPhone ekranlarining diagonallari o‘zgarishsiz qoldi – iPhone 17 Pro
            uchun 6,3 dyuym va iPhone 17 Pro Max uchun 6,9 dyuym. Super Retina
            XDR displeylari 1-120 Gts yangilanish tezligi va Doim yoqilgan
            ProMotion texnologiyasini qo‘llab-quvvatlaydi. iPhone 17 Pro uchun
            2622x1206 piksel va iPhone 17 Pro Max uchun 2868x1320 piksel. Asosiy
            o'zgarish - maksimal yorqinlik. 2000 nitdan 3000 nitgacha
            ko'tarildi. Ceramic Shield 2 ekranni himoya qilish uchun
            ishlatiladi. Apple kompaniyasining so'zlariga ko'ra, u oddiy
            versiyadan uch barobar yaxshiroq tirnalganlardan himoya qiladi.
            Apple ikkala yangi mahsulotga yangi A19 Pro chipini o'rnatdi. Unda 6
            ta CPU yadrosi va 6 GPU yadrosi mavjud. Bundan tashqari,
            protsessorda sun'iy intellekt modellari bilan ishlash uchun
            o'rnatilgan neyron tezlatgichlar mavjud. Kompaniyaning qayd
            etishicha, unumdorlik chipning oldingi avlodiga qaraganda 40
            foizgacha yuqori bo‘lishi mumkin. Smartfonlarning o'ziga xos
            xususiyati bug'lanishning maxsus kamerasi edi. Unda
            deionizatsiyalangan suv muhrlangan bo'lib, bu smartfonni yuklash
            vaqtida issiqlikni samarali tarqatish imkonini beradi. Apple
            ta'kidlashicha, u alyuminiy korpusga o'tkaziladi va qurilma bo'ylab
            bir tekis taqsimlanadi. Buning yordamida protsessor murakkab
            vazifalarda yaxshiroq ishlaydi.
          </p>
        </div>
        <div>
          <DetailBottom/>
        </div>
      </div>
    </section>
  );
};

export default Detail;
