import { RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "../static";
import { IoClose, IoSearchOutline, IoSettings } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKatalogOpen, setIsKatalogOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [bottomScroll, setBottomScroll] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("uz");

  const languages = [
    { code: "uz", name: "O'zbek" },
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
  ];

  const handleLanguageSelect = (langCode: string): void => {
    setSelectedLanguage(langCode);
    setIsSettingsOpen(false);
    console.log(`Selected language: ${langCode}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const distanceFromBottom = docHeight - (scrollTop + windowHeight);

      setHeaderScrolled(scrollTop >= 100);
      setBottomScroll(distanceFromBottom > 450);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-white relative transition-all duration-500 z-20 ${
          headerScrolled ? "shadow-md sticky top-0 z-30" : "shadow-none"
        }`}
      >
        <div className="container">
          <nav className="w-full flex items-center justify-between gap-4 py-4 md:py-6 lg:h-24 lg:gap-8">
            <div className="shrink-0">
              <a href="">
                <img
                  src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
                  alt="Olcha logo"
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => setIsKatalogOpen(!isKatalogOpen)}
                className="flex items-center gap-3 border-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-100"
              >
                <div className="relative w-6 h-6 flex flex-col justify-center gap-1">
                  <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                      isKatalogOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>

                  <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                      isKatalogOpen ? "opacity-0" : ""
                    }`}
                  ></span>

                  <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                      isKatalogOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>

                <span>Katalog</span>
              </button>
            </div>

            <div className="flex-1 max-[1024px]:hidden block">
              <form className="w-full bg-gray-100 px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl relative h-13.75 flex items-center">
                <input
                  type="text"
                  placeholder="Qidirish"
                  className="w-full bg-transparent py-1 md:py-2 pr-12 focus:outline-none transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 md:right-1 bg-red-600 hover:bg-red-700 text-white p-2 md:p-3 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <IoSearchOutline className="text-lg md:text-2xl" />
                </button>
              </form>
            </div>

            <ul className="hidden lg:flex items-center gap-4 lg:gap-6">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:text-red-600 hover:bg-red-50 group"
                    href="#"
                  >
                    <item.icon className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs lg:text-sm font-medium">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-gray-700"
              aria-label="Menu"
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a
                      className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-red-600 hover:bg-red-50"
                      href="#"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="text-xl" />
                      <span className="font-medium">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <form className="mt-4 mx-4 w-auto bg-gray-100 px-4 py-3 rounded-lg relative">
                <input
                  type="text"
                  placeholder="Qidirish"
                  className="w-full bg-transparent focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-2 text-red-600 hover:text-red-700 transition-colors duration-300"
                >
                  <IoSearchOutline className="text-xl" />
                </button>
              </form>
            </div>
          )}
        </div>
        {isKatalogOpen && (
          <div className="absolute top-23 left-0 w-full h-full z-10 bg-white border-t border-gray-300 shadow-lg">
            <div className="container">
              <h1>Katalog</h1>
            </div>
          </div>
        )}
      </header>

      {bottomScroll && (
        <div className="fixed bottom-2 right-4 z-40 duration-300">
          <div className="relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="group p-3 rounded-full bg-white shadow-xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer border-gray-400 border"
              aria-label="Settings"
            >
              {isSettingsOpen ? (
                <IoClose className="text-2xl text-gray-700 group-hover:text-red-600" />
              ) : (
                <IoSettings className="text-2xl group-hover:animate-spin text-gray-700 group-hover:text-red-600" />
              )}
            </button>
            {isSettingsOpen && (
              <div className="absolute bottom-16 right-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <p className="px-4 py-2 text-sm font-semibold text-gray-700">
                    Til tanlang
                  </p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-all duration-200 cursor-pointer ${
                        selectedLanguage === lang.code
                          ? "bg-red-100 text-red-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
