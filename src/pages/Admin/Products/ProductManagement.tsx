import type { Product } from "@/types";
import { useState } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiPackage, FiSearch, } from "react-icons/fi";

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name_uz: "iPhone 15 Pro Max",
      name_ru: "iPhone 15 Pro Max",
      name_en: "iPhone 15 Pro Max",
      price: 12999000,
      oldPrice: 14500000,
      image:
        "https://dms.mydukaan.io/original/jpeg/media/786bbc7c-93ec-4d27-85f8-44b1cecbe3c0.png",
      category_id: 1,
      brand: "Apple",
      rating: 4.8,
      reviews: 156,
      inStock: true,
      active: true,
    },
    {
      id: 2,
      name_uz: "Samsung Galaxy S24 Ultra",
      name_ru: "Samsung Galaxy S24 Ultra",
      name_en: "Samsung Galaxy S24 Ultra",
      price: 11499000,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-online-exclusive-491397-sm-s928blbheub-539464610?$624_624_PNG$",
      category_id: 1,
      brand: "Samsung",
      rating: 4.7,
      reviews: 203,
      inStock: true,
      active: true,
    },
    {
      id: 3,
      name_uz: 'MacBook Pro 16"',
      name_ru: 'MacBook Pro 16"',
      name_en: 'MacBook Pro 16"',
      price: 32999000,
      oldPrice: 35000000,
      image:
        "https://crdms.images.consumerreports.org/prod/products/cr/models/408690-15-to-16-inch-laptops-apple-macbook-pro-16-12-core-m2-pro-512gb-16gb-10033979.png",
      category_id: 2,
      brand: "Apple",
      rating: 4.9,
      reviews: 89,
      inStock: false,
      active: true,
    },
    {
      id: 4,
      name_uz: "iPhone 16 Pro Max",
      name_ru: "iPhone 16 Pro Max",
      name_en: "iPhone 16 Pro Max",
      price: 18999000,
      oldPrice: 20500000,
      image: "https://pngimg.com/d/iphone16_PNG38.png",
      category_id: 1,
      brand: "Apple",
      rating: 4.9,
      reviews: 97,
      inStock: true,
      active: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name_uz: "",
    name_ru: "",
    name_en: "",
    price: 0,
    oldPrice: undefined as number | undefined,
    image: "",
    category_id: 1,
    brand: "",
    rating: 5,
    reviews: 0,
    inStock: true,
    active: true,
  });

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name_uz: product.name_uz,
        name_ru: product.name_ru,
        name_en: product.name_en,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.image,
        category_id: product.category_id,
        brand: product.brand,
        rating: product.rating,
        reviews: product.reviews,
        inStock: product.inStock,
        active: product.active,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name_uz: "",
        name_ru: "",
        name_en: "",
        price: 0,
        oldPrice: undefined,
        image: "",
        category_id: 1,
        brand: "",
        rating: 5,
        reviews: 0,
        inStock: true,
        active: true,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProduct) {
      setProducts(
        products?.map((p) =>
          p.id === editingProduct.id ? { ...p, ...formData } : p
        )
      );
    } else {
      const newProduct: Product = {
        id: Date.now(),
        ...formData,
      };
      setProducts([...products, newProduct]);
    }

    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    if (confirm("Haqiqatan ham bu mahsulotni o'chirmoqchimisiz?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name_uz.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.name_ru.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString("uz-UZ") + " so'm";
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Mahsulotlar
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Barcha mahsulotlarni boshqaring
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-xl shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <FiPlus className="w-4 h-4" />
          Yangi Mahsulot
        </button>
      </div>
      <div className="relative mb-6">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FiSearch className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Mahsulot qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-8">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 ${
              !product.active ? "opacity-60" : ""
            }`}
          >
            <div className="relative aspect-square overflow-hidden w-full max-h-60 bg-gray-50">
              <div className="w-full h-full flex justify-center items-center p-16">
                <img
                  src={product.image}
                  alt={product.name_uz}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {!product.inStock && (
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-red-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-md">
                  Tugagan
                </div>
              )}
              <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => handleOpenModal(product)}
                  className="p-2 bg-white/90 backdrop-blur-sm text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors shadow-sm cursor-pointer"
                  title="Tahrirlash"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="p-2 bg-white/90 backdrop-blur-sm text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors shadow-sm cursor-pointer"
                  title="O'chirish"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                  {product.brand}
                </span>
                <h3 className="text-sm font-medium text-gray-900 mt-1 line-clamp-2 leading-snug">
                  {product.name_uz}
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-500 text-sm">⭐</span>
                <span className="text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
                <span className="text-xs text-gray-400">
                  ({product.reviews} sharh)
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>
              <div className="flex gap-1.5">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-md ${
                    product.inStock
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {product.inStock ? "Omborda" : "Tugagan"}
                </span>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-md ${
                    product.active
                      ? "bg-orange-50 text-orange-600"
                      : "bg-gray-50 text-gray-500"
                  }`}
                >
                  {product.active ? "Faol" : "Nofaol"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
            <FiPackage className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-base font-medium text-gray-700 mb-1">
            {searchTerm ? "Mahsulot topilmadi" : "Hech qanday mahsulot yo'q"}
          </h3>
          <p className="text-sm text-gray-400">
            {searchTerm
              ? "Qidiruvni o'zgartiring"
              : "Birinchi mahsulotni qo'shing"}
          </p>
        </div>
      )}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-1000 p-5 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-175 max-h-[90vh] overflow-y-auto overflow-x-hidden animate-slideUp shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingProduct
                  ? "Mahsulotni tahrirlash"
                  : "Yangi mahsulot qo'shish"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="bg-gray-100 border-none w-8 h-8 rounded-2xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:rotate-90"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Nomi (UZ)
                  </label>
                  <input
                    type="text"
                    value={formData.name_uz}
                    onChange={(e) =>
                      setFormData({ ...formData, name_uz: e.target.value })
                    }
                    placeholder="iPhone 15 Pro"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Nomi (RU)
                  </label>
                  <input
                    type="text"
                    value={formData.name_ru}
                    onChange={(e) =>
                      setFormData({ ...formData, name_ru: e.target.value })
                    }
                    placeholder="iPhone 15 Pro"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Nomi (EN)
                  </label>
                  <input
                    type="text"
                    value={formData.name_en}
                    onChange={(e) =>
                      setFormData({ ...formData, name_en: e.target.value })
                    }
                    placeholder="iPhone 15 Pro"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Brend
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    placeholder="Apple"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Kategoriya ID
                  </label>
                  <input
                    type="number"
                    value={formData.category_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category_id: parseInt(e.target.value),
                      })
                    }
                    placeholder="1"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Narx (so'm)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: parseInt(e.target.value),
                      })
                    }
                    placeholder="12999000"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Eski narx
                  </label>
                  <input
                    type="number"
                    value={formData.oldPrice || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        oldPrice: e.target.value
                          ? parseInt(e.target.value)
                          : undefined,
                      })
                    }
                    placeholder="14500000"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">
                    Reyting
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={formData.rating}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rating: parseFloat(e.target.value),
                      })
                    }
                    placeholder="4.8"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600">
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
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:bg-white focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) =>
                      setFormData({ ...formData, inStock: e.target.checked })
                    }
                    className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Omborda bor
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.active}
                    onChange={(e) =>
                      setFormData({ ...formData, active: e.target.checked })
                    }
                    className="w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Faol
                  </span>
                </label>
              </div>
              {formData.image && (
                <div className="mt-2">
                  <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-linear-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-lg shadow-md shadow-orange-500/20 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  {editingProduct ? "Saqlash" : "Qo'shish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
