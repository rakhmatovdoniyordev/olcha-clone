import { FaFacebook, FaInstagram } from "react-icons/fa6"
import { GoLocation, GoMail } from "react-icons/go"
import { LiaTelegramPlane } from "react-icons/lia"

const Footer = () => {
  return (
    <footer className='border-t border-gray-300 bg-[#F2F2F2] mt-10 pt-10'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                <div>
                    <img src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png" alt="Olcha logo" className="h-8 md:h-10 w-auto"/>

                    <div className="mt-6 flex flex-col gap-4">
                        <p className="font-medium">Qo'llab quvvatlash raqami</p>
                        <a href="tel:+998(71) 202 2021" className="text-xl font-bold duration-300 transition-colors hover:text-red-700">+998(71) 202 2021</a>
                        <a href="#" className="flex items-center gap-2"><i><GoLocation className="text-red-500 text-xl"/></i> Qozitarnov, Toshkent</a>
                        <a href="mailto:info@olcha.uz" className="flex items-center gap-2"><i><GoMail className="text-xl" /></i> info@olcha.uz</a>
                    </div>
                </div>
                <div>
                    <p className="text-red-700 text-xl font-bold mb-6">Ma'lumot</p>
                    <ul className="flex flex-col gap-4">
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Biz haqimizda</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Bo'sh ish o'rinlari</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Ommaviy oferta</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">To'lovni qaytarish va tovarlarni almashtirish</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Muddatli to'lov shartlari</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-4 mt-12">
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Eco-friendly</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Shaxsiy ma'lumotlar bilan ishlash bo'yicha Siyosat</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">To'lov va yetkazib berish</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Bonus va aksiyalar</a>
                        </li>
                        <li className="duration-300 transition-colors hover:text-gray-400">
                            <a href="#">Mahsulotlarni Olcha.uz da sotmoqchi bo'lgan sotuvchilar uchun oferta.</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-6">
                        <a href="#" className='p-2 bg-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors duration-300'>
                            <img src="https://olcha.uz/_nuxt/uzumbank.BHyRM-1y.svg" alt="" />
                        </a>
                        <a href="#" className='p-2 bg-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors duration-300'>
                            <img src="https://olcha.uz/_nuxt/click.ByhH4ulA.svg" alt="" />
                        </a>
                        <a href="#" className='p-2 bg-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors duration-300'>
                            <img src="https://olcha.uz/_nuxt/payme.DLp2GdHd.svg" alt="" />
                        </a>
                        <a href="#" className='p-2 bg-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors duration-300'>
                            <img src="https://olcha.uz/_nuxt/humo-bg.B29viszN.svg" alt="" />
                        </a>
                        <a href="#" className='p-2 bg-white rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors duration-300'>
                            <img src="https://olcha.uz/_nuxt/paynet.C8TMfSoa.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-300">
            <div className="container">
             <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
                <p>© 2017-2026. OOO "Olcha store"</p>
                <a href="#" className="duration-500 transition-colors hover:text-red-600">Ommaviy oferta</a>
                <a href="#" className="duration-500 transition-colors hover:text-red-600">Maxfiylik siyosati</a>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-2xl duration-500 transition-colors hover:text-red-600">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-2xl duration-500 transition-colors hover:text-red-600">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-2xl duration-500 transition-colors hover:text-red-600">
                        <LiaTelegramPlane />
                    </a>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer