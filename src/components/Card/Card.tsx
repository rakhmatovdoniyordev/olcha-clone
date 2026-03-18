import { FiHeart } from "react-icons/fi"
import { IoCartOutline, IoStatsChart } from "react-icons/io5"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Card = () => {
    const { t } = useTranslation("productCard");

  return (
    <div className="group cursor-pointer">
        <Link to={`/detail/${1}`}>
            <div className="py-4 px-3 bg-gray-100 flex items-center justify-center rounded-2xl relative">
                <img src="https://www.pngall.com/wp-content/uploads/20/iPhone-17-Pro-Max-Concept-Art-PNG.png" alt="Iphone 17 pro max" className="group-hover:scale-103 transition-transform duration-300"/>
                <div className="absolute top-2 right-2 flex flex-col items-center gap-2  text-lg">
                    <button className="p-2 rounded-full bg-white text-gray-500">
                        <FiHeart/>
                    </button>
                    <button className="p-2 rounded-full bg-white text-gray-500">
                        <IoStatsChart/>
                    </button>
                </div>
            </div>
        </Link>
        <div className="flex flex-col gap-3 py-3 px-4">
            <h2>Iphone 17 Pro Max</h2>
            <div className="flex flex-col gap-1 my-3">
                <strong className="text-xl">20 700 000 so'm</strong>
                <div className="">
                    <span className="px-2 py-1 bg-[#FFD740] rounded-md text-sm font-medium">2 425 000 so'm x 12 oy</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="p-2 border-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 cursor-pointer"/*  onClick={() => dispatch(addCart(bu yerga product yoziladi))} */>
                    <IoCartOutline className="text-xl"/>
                </button>
                <button className="flex-1 py-2 rounded-lg transition-all duration-300 border-2 border-red-600 text-red-600 hover:bg-red-50  cursor-pointer">
                    {t("term_payment_product")}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card