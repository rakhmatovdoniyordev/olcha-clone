import type { Banner } from "@/types";
import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCheck, FiImage, } from "react-icons/fi";

export default function BannerManagement() {
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: 1,
      title: "Yangi yil chegirmalari",
      image:
        "https://olcha.uz/image/1400x460/sliders/oz/cdn_1/2025-12-11/Mo8aflKeapAw638rn1tzQHjYFnH6LChZ0UJBkdPvQjYf9r1J1w7Pu1e3jpyv.jpg",
      link: "/promo",
      active: true,
    },
    {
      id: 2,
      title: "Smartfonlar aksiyasi",
      image:
        "https://olcha.uz/image/1400x460/sliders/oz/cdn_1/2025-12-18/XT1x5knirHsI7cM8TIG1XNLY2DFzSufL4p2CJFyjQuTJP5mwdbs7GvG7nEqG.jpg",
      link: "/smartphones",
      active: true,
    },
    {
      id: 3,
      title: "Kompyuterlar",
      image:
        "https://olcha.uz/image/1400x460/sliders/oz/cdn_1/2026-01-25/oGABDyPQQq67nDTnpbONDBEtUJBzbPYRtjbmwzA9VU2KLvfs83hCgYYvMMj0.jpg",
      link: "/computers",
      active: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    link: "",
    active: true,
  });

  const handleOpenModal = (banner?: Banner) => {
    if (banner) {
      setEditingBanner(banner);
      setFormData({
        title: banner.title,
        image: banner.image,
        link: banner.link,
        active: banner.active,
      });
    } else {
      setEditingBanner(null);
      setFormData({
        title: "",
        image: "",
        link: "",
        active: true,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingBanner(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingBanner) {
      setBanners(
        banners?.map((b) =>
          b.id === editingBanner.id ? { ...b, ...formData } : b
        )
      );
    } else {
      const newBanner: Banner = {
        id: Date.now(),
        ...formData,
      };
      setBanners([...banners, newBanner]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    if (confirm("Haqiqatan ham bu bannerni o'chirmoqchimisiz?")) {
      setBanners(banners.filter((b) => b.id !== id));
    }
  };

  const toggleActive = (id: number) => {
    setBanners(
      banners?.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
  };

  return (
    <div className="max-w-350">
      <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 mb-1">
            Bannerlar
          </h1>
          <p className="text-gray-500 text-base">
            Barcha bannerlarni boshqaring
          </p>
        </div>
        <button
          className="flex items-center gap-2.5 py-2 px-4 bg-linear-to-r from-orange-500 to-red-500 text-white border-none rounded-2.5 text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] rounded-xl"
          onClick={() => handleOpenModal()}
        >
          <FiPlus className="w-5 h-5" />
          Yangi Banner
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mb-10">
        {banners?.map((banner) => (
          <div
            key={banner.id}
            className={`bg-white rounded-4xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] ${
              !banner.active ? "opacity-60" : ""
            }`}
          >
            <div className="relative w-full h-50 overflow-hidden">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`py-1.5 px-3 rounded-[20px] text-xs font-semibold backdrop-blur-xl ${
                    banner.active
                      ? "bg-green-500/90 text-white"
                      : "bg-red-500/90 text-white"
                  }`}
                >
                  {banner.active ? "Faol" : "Nofaol"}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {banner.title}
              </h3>
              <p className="text-sm text-orange-500 mb-4 font-mono bg-gray-50 py-1.5 px-2.5 rounded-lg inline-block border border-gray-200">
                {banner.link}
              </p>

              <div className="flex gap-2">
                <button
                  className={`w-9 h-9 rounded-2xl border-none cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    banner.active
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  onClick={() => toggleActive(banner.id)}
                  title={banner.active ? "Nofaol qilish" : "Faol qilish"}
                >
                  {banner.active ? (
                    <FiCheck className="w-4.5 h-4.5" />
                  ) : (
                    <FiX className="w-4.5 h-4.5" />
                  )}
                </button>
                <button
                  className="w-9 h-9 rounded-2xl border-none bg-orange-500 text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-orange-600 hover:scale-110"
                  onClick={() => handleOpenModal(banner)}
                  title="Tahrirlash"
                >
                  <FiEdit2 className="w-4.5 h-4.5" />
                </button>
                <button
                  className="w-9 h-9 rounded-2xl border-none bg-red-500 text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:scale-110"
                  onClick={() => handleDelete(banner.id)}
                  title="O'chirish"
                >
                  <FiTrash2 className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {banners.length === 0 && (
        <div className="text-center py-20 px-5 bg-white rounded-4xl">
          <FiImage className="w-20 h-20 text-gray-300 mx-auto mb-5" />
          <h3 className="text-[22px] text-gray-500 mb-2">
            Hech qanday banner yo'q
          </h3>
          <p className="text-gray-400 text-base">Birinchi bannerni qo'shing</p>
        </div>
      )}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-1000 p-5 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-4xl w-full max-w-125 max-h-[90vh] overflow-y-auto overflow-x-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-[22px] font-bold text-gray-900 m-0">
                {editingBanner
                  ? "Bannerni tahrirlash"
                  : "Yangi banner qo'shish"}
              </h2>
              <button
                className="bg-gray-100 border-none w-8 h-8 rounded-2xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:rotate-90"
                onClick={handleCloseModal}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Nomi
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Banner nomi"
                  required
                  className="px-4 py-2 border-2 border-gray-200 rounded-2.5 text-sm transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Rasm URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="https://..."
                  required
                  className="px-4 py-2 border-2 border-gray-200 rounded-2.5 text-sm transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Havola
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  placeholder="/promo"
                  required
                  className="px-4 py-2 border-2 border-gray-200 rounded-2.5 text-sm transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2.5 text-sm font-semibold text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) =>
                      setFormData({ ...formData, active: e.target.checked })
                    }
                    className="w-4.5 h-4.5 cursor-pointer"
                  />
                  Faol
                </label>
              </div>
              {formData.image && (
                <div className="mt-2.5 rounded-2.5 overflow-hidden border-2 border-gray-200">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-auto block"
                  />
                </div>
              )}
              <div className="flex gap-3 mt-2.5">
                <button
                  type="button"
                  className="flex-1 py-2 rounded-2.5 text-base font-semibold cursor-pointer transition-all duration-300 border-none bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl"
                  onClick={handleCloseModal}
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-2.5 text-base font-semibold cursor-pointer transition-all duration-300 border-none bg-linear-to-r from-orange-500 to-red-500 text-white hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] rounded-xl"
                >
                  {editingBanner ? "Saqlash" : "Qo'shish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
