import { AiOutlineUser } from "react-icons/ai";
import { FiGrid, FiHeart, FiHome, FiImage, FiPackage } from "react-icons/fi";
import { IoCartOutline, IoStatsChart } from "react-icons/io5";

export const navItems = [
  { icon: IoStatsChart, key: "comparison", link: "/comparison" },
  { icon: FiHeart, key: "favorites", link: "/favorites" },
  { icon: IoCartOutline, key: "cart", link: "/cart" },
  { icon: AiOutlineUser, key: "login", link: "/login" },
];

export const specs = [
  { label: "Vazni", value: "233 g" },
  { label: "Face ID Datchigi", value: "Mavjud" },
  { label: "Rangi", value: "Cosmic Orange" },
  { label: "Operatsion sistema versiyasi", value: "iOS 26" },
  { label: "Rangi", value: "Silver" },
  { label: "Rangi", value: "Deep Blue" },
];


export const menuItems = [
    { path: "/dashboard", icon: FiHome, label: "Bosh sahifa" },
    { path: "/dashboard/banners", icon: FiImage, label: "Bannerlar" },
    { path: "/dashboard/categories", icon: FiGrid, label: "Kategoriyalar" },
    { path: "/dashboard/products", icon: FiPackage, label: "Mahsulotlar" },
  ];