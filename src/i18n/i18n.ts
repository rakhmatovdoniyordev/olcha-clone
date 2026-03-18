import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// header
import uzHeader from "@/locales/uz/header.json";
import ruHeader from "@/locales/ru/header.json";
import enHeader from "@/locales/en/header.json";

// footer
import uzFooter from "@/locales/uz/footer.json";
import ruFooter from "@/locales/ru/footer.json";
import enFooter from "@/locales/en/footer.json";

// cart
import uzProductCard from "@/locales/uz/productCard.json";
import ruProductCard from "@/locales/ru/productCard.json";
import enProductCard from "@/locales/en/productCard.json";

// detail
import uzDetail from "@/locales/uz/detail.json";
import ruDetail from "@/locales/ru/detail.json";
import enDetail from "@/locales/en/detail.json";

// comparison
import uzComparison from "@/locales/uz/comparison.json";
import ruComparison from "@/locales/ru/comparison.json";
import enComparison from "@/locales/en/comparison.json";

// favorites
import uzFavorites from "@/locales/uz/favorites.json";
import ruFavorites from "@/locales/ru/favorites.json";
import enFavorites from "@/locales/en/favorites.json";

// cart
import uzCart from "@/locales/uz/cart.json";
import ruCart from "@/locales/ru/cart.json";
import enCart from "@/locales/en/cart.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        header: uzHeader,
        footer: uzFooter,
        productCard: uzProductCard,
        detail: uzDetail,
        comparison: uzComparison,
        favorites: uzFavorites,
        cart: uzCart,
      },
      ru: {
        header: ruHeader,
        footer: ruFooter,
        productCard: ruProductCard,
        detail: ruDetail,
        comparison: ruComparison,
        favorites: ruFavorites,
        cart: ruCart,
      },
      en: {
        header: enHeader,
        footer: enFooter,
        productCard: enProductCard,
        detail: enDetail,
        comparison: enComparison,
        favorites: enFavorites,
        cart: enCart,
      },
    },

    fallbackLng: "uz",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
