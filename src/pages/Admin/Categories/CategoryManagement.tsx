import type { Category } from "@/types";
import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiGrid } from "react-icons/fi";



export default function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name_uz: "Televizor, foto-video va audio",
      name_ru: "Телевизор, фото-видео и аудио",
      name_en: "TV, Photo & Audio",
      image:
        "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",
      slug: "tv-audio",
      active: true,
    },
    {
      id: 2,
      name_uz: "Noutbuk, printer, kompyuterlar",
      name_ru: "Ноутбук, принтер, компьютеры",
      name_en: "Laptops & Computers",
      image:
        "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png",
      slug: "computers",
      active: true,
    },
    {
      id: 3,
      name_uz: "Maishiy texnika",
      name_ru: "Бытовая техника",
      name_en: "Home Appliances",
      image:
        "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png",
      slug: "appliances",
      active: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name_uz: "",
    name_ru: "",
    name_en: "",
    image: "",
    slug: "",
    active: true,
  });

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name_uz: category.name_uz,
        name_ru: category.name_ru,
        name_en: category.name_en,
        image: category.image,
        slug: category.slug,
        active: category.active,
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name_uz: "",
        name_ru: "",
        name_en: "",
        image: "",
        slug: "",
        active: true,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategory(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCategory) {
      setCategories(
        categories?.map((c) =>
          c.id === editingCategory.id ? { ...c, ...formData } : c
        )
      );
    } else {
      const newCategory: Category = {
        id: Date.now(),
        ...formData,
      };
      setCategories([...categories, newCategory]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    if (confirm("Haqiqatan ham bu kategoriyani o'chirmoqchimisiz?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-8 gap-5 flex-wrap">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900 mb-1">
            Kategoriyalar
          </h1>
          <p className="text-gray-500 text-base">
            Barcha kategoriyalarni boshqaring
          </p>
        </div>
        <button
          className="flex items-center gap-2.5 py-2 px-4 bg-linear-to-r from-orange-500 to-red-500 text-white border-none rounded-2.5 text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] rounded-xl"
          onClick={() => handleOpenModal()}
        >
          <FiPlus className="w-5 h-5" />
          Yangi Kategoriya
        </button>
      </div>
      <div className="bg-white rounded-4xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.05)] mb-10">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-orange-500 to-red-500 text-white">
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Rasm
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Nomi (UZ)
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Nomi (RU)
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Nomi (EN)
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Slug
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Holat
                </th>
                <th className="py-4 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Amallar
                </th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category) => (
                <tr
                  key={category.id}
                  className="transition-all duration-300 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <td className="py-4 px-4">
                    <div className="w-15 h-15 rounded-2.5 overflow-hidden flex items-center justify-center bg-gray-50">
                      <img
                        src={category.image}
                        alt={category.name_uz}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900 font-medium block max-w-62.5 truncate">
                      {category.name_uz}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900 font-medium block max-w-62.5 truncate">
                      {category.name_ru}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-900 font-medium block max-w-62.5 truncate">
                      {category.name_en}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <code className="bg-gray-50 py-1.5 px-3 rounded-lg text-xs text-orange-500 font-mono border border-gray-200">
                      {category.slug}
                    </code>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`py-1.5 px-3 rounded-[20px] text-xs font-semibold inline-block ${
                        category.active
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {category.active ? "Faol" : "Nofaol"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button
                        className="w-9 h-9 rounded-2xl border-none bg-orange-500 text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-orange-600 hover:scale-110"
                        onClick={() => handleOpenModal(category)}
                        title="Tahrirlash"
                      >
                        <FiEdit2 className="w-4.5 h-4.5" />
                      </button>
                      <button
                        className="w-9 h-9 rounded-2xl border-none bg-red-500 text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:scale-110"
                        onClick={() => handleDelete(category.id)}
                        title="O'chirish"
                      >
                        <FiTrash2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {categories.length === 0 && (
        <div className="text-center py-20 px-5 bg-white rounded-4xl">
          <FiGrid className="w-20 h-20 text-gray-300 mx-auto mb-5" />
          <h3 className="text-[22px] text-gray-500 mb-2">
            Hech qanday kategoriya yo'q
          </h3>
          <p className="text-gray-400 text-base">
            Birinchi kategoriyani qo'shing
          </p>
        </div>
      )}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-1000 p-5 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-4xl w-full max-w-175 max-h-[90vh] overflow-y-auto overflow-x-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-[22px] font-bold text-gray-900 m-0">
                {editingCategory
                  ? "Kategoriyani tahrirlash"
                  : "Yangi kategoriya qo'shish"}
              </h2>
              <button
                className="bg-gray-100 border-none w-8 h-8 rounded-2xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:rotate-90"
                onClick={handleCloseModal}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    O'zbekcha nomi
                  </label>
                  <input
                    type="text"
                    value={formData.name_uz}
                    onChange={(e) =>
                      setFormData({ ...formData, name_uz: e.target.value })
                    }
                    placeholder="Kategoriya nomi (UZ)"
                    required
                    className="px-4 py-2 border-2 border-gray-200 rounded-2.5 text-sm transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Ruscha nomi
                  </label>
                  <input
                    type="text"
                    value={formData.name_ru}
                    onChange={(e) =>
                      setFormData({ ...formData, name_ru: e.target.value })
                    }
                    placeholder="Название категории (RU)"
                    required
                    className="px-4 py-2 border-2 border-gray-200 rounded-2.5 text-sm transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Inglizcha nomi
                  </label>
                  <input
                    type="text"
                    value={formData.name_en}
                    onChange={(e) =>
                      setFormData({ ...formData, name_en: e.target.value })
                    }
                    placeholder="Category name (EN)"
                    required
                    className="px-4 py-2 border-2 border-gray-200 rounded-2.5 text-sm transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Slug (URL)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  placeholder="category-slug"
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
                <div className="mt-2.5 rounded-2.5 overflow-hidden border-2 border-gray-200 max-w-27.5">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-25 h-25 block"
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
                  {editingCategory ? "Saqlash" : "Qo'shish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
