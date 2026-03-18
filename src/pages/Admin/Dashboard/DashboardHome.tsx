import { FiImage, FiGrid, FiPackage, FiTrendingUp, FiDollarSign, FiUsers, } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DashboardHome() {
  const stats = [
    {
      title: "Jami Bannerlar",
      value: "12",
      icon: FiImage,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      title: "Kategoriyalar",
      value: "48",
      icon: FiGrid,
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "Mahsulotlar",
      value: "256",
      icon: FiPackage,
      gradient: "from-orange-400 to-red-400",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      title: "Foydalanuvchilar",
      value: "1,234",
      icon: FiUsers,
      gradient: "from-red-600 to-orange-600",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "Kunlik ko'rish",
      value: "5,678",
      icon: FiTrendingUp,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      title: "Sotuvlar",
      value: "$12,458",
      icon: FiDollarSign,
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Yangi banner qo'shildi",
      time: "5 daqiqa oldin",
      type: "banner",
    },
    {
      id: 2,
      action: "Kategoriya yangilandi",
      time: "15 daqiqa oldin",
      type: "category",
    },
    {
      id: 3,
      action: "Mahsulot qo'shildi",
      time: "1 soat oldin",
      type: "product",
    },
    {
      id: 4,
      action: "Banner o'chirildi",
      time: "2 soat oldin",
      type: "banner",
    },
    {
      id: 5,
      action: "Yangi foydalanuvchi",
      time: "3 soat oldin",
      type: "user",
    },
  ];

  return (
    <div className="max-w-350">
      <div className="mb-8">
        <h1 className="text-[32px] font-bold text-gray-900 mb-2">
          Bosh sahifa
        </h1>
        <p className="text-gray-500 text-base">
          Xush kelibsiz! Bu admin panel boshqaruv paneli.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-10">
        {stats?.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-4xl p-6 flex items-center gap-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] border-gradient-to-r from-orange-500 to-red-500"
              style={{
                borderLeftColor: `linear-gradient(to right, #ef4444, #f97316)`,
              }}
            >
              <div
                className={`w-15 h-15 rounded-3xl flex items-center justify-center shrink-0 ${stat.bgColor} ${stat.textColor}`}
              >
                <Icon className="w-7 h-7" />
              </div>
              <div className="stat-info">
                <h3 className="text-[28px] font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-white rounded-4xl p-6 mb-10 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-bold text-gray-900">
            Oxirgi amallar
          </h2>
          <span className="text-orange-500 text-sm font-semibold cursor-pointer transition-colors hover:text-red-500">
            Barchasini ko'rish
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {recentActivities?.map((activity) => (
            <div
              key={activity.id}
              className={`flex items-center gap-4 p-4 rounded-3xl transition-all duration-300 hover:translate-x-1.5 border-l-4 ${
                activity.type === "banner"
                  ? "border-orange-500 bg-orange-50"
                  : activity.type === "category"
                  ? "border-red-500 bg-red-50"
                  : activity.type === "product"
                  ? "border-orange-400 bg-orange-50"
                  : "border-red-400 bg-red-50"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-2.5 flex items-center justify-center shrink-0 text-white bg-linear-to-br ${
                  activity.type === "banner"
                    ? "from-orange-500 to-red-500"
                    : activity.type === "category"
                    ? "from-red-500 to-orange-500"
                    : activity.type === "product"
                    ? "from-orange-400 to-red-400"
                    : "from-red-400 to-orange-400"
                }`}
              >
                {activity.type === "banner" && (
                  <FiImage className="w-5.5 h-5.5" />
                )}
                {activity.type === "category" && (
                  <FiGrid className="w-5.5 h-5.5" />
                )}
                {activity.type === "product" && (
                  <FiPackage className="w-5.5 h-5.5" />
                )}
                {activity.type === "user" && (
                  <FiUsers className="w-5.5 h-5.5" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 mb-1">
                  {activity.action}
                </p>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-[22px] font-bold text-gray-900 mb-5">
          Tezkor harakatlar
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          <Link
            to={"/dashboard/banners"}
            className="flex items-center justify-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-3xl cursor-pointer transition-all duration-300 hover:border-orange-500 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(249,115,22,0.2)] text-base font-semibold text-gray-500"
          >
            <FiImage className="w-6 h-6" />
            <span>Yangi Banner</span>
          </Link>
          <Link
            to={"/dashboard/categories"}
            className="flex items-center justify-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-3xl cursor-pointer transition-all duration-300 hover:border-red-500 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(239,68,68,0.2)] text-base font-semibold text-gray-500"
          >
            <FiGrid className="w-6 h-6" />
            <span>Yangi Kategoriya</span>
          </Link>
          <Link
            to={"/dashboard/products"}
            className="flex items-center justify-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-3xl cursor-pointer transition-all duration-300 hover:border-orange-500 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(249,115,22,0.2)] text-base font-semibold text-gray-500"
          >
            <FiPackage className="w-6 h-6" />
            <span>Yangi Mahsulot</span>
          </Link>
          <button className="flex items-center justify-center gap-3 p-5 bg-linear-to-r from-orange-500 to-red-500 text-white border-none rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] text-base font-semibold">
            <FiTrendingUp className="w-6 h-6" />
            <span>Hisobotni yuklash</span>
          </button>
        </div>
      </div>
    </div>
  );
}
