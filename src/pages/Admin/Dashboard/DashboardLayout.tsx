import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiLogOut, } from "react-icons/fi";
import { menuItems } from "@/static";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={`fixed left-0 top-0 h-screen bg-linear-to-b from-red-500 via-red-400 to-orange-300 text-white transition-all duration-300 z-100 overflow-hidden ${
          sidebarOpen ? "w-70" : "w-0"
        }`}
      >
        <div className={`${sidebarOpen ? "block" : "hidden"}`}>
          <div className="py-6 px-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3 text-xl font-bold">
              <img
                src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
                alt="Logo"
                className="w-10 h-10 object-contain bg-white rounded-xl p-1"
              />
              <span>Admin Panel</span>
            </div>
            <button
              className="w-8 h-8 bg-white/20 border-none text-white rounded-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiX size={20} />
            </button>
          </div>
          <nav className="flex-1 py-5 px-3 flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 py-3.5 px-4 text-white/80 no-underline rounded-xl transition-all duration-300 cursor-pointer border-none bg-transparent text-base font-medium hover:bg-white/10 hover:text-white hover:translate-x-1.5 ${
                    isActive
                      ? "bg-white/20 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                      : ""
                  }`}
                >
                  <Icon className="w-5.5 h-5.5 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="py-5 px-3 border-t border-white/10">
            <button
              className="w-full flex items-center justify-center gap-3 py-3.5 bg-white/20 text-white border-none rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 text-base font-semibold"
              onClick={handleLogout}
            >
              <FiLogOut size={20} />
              <span>Chiqish</span>
            </button>
          </div>
        </div>
      </aside>
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          !sidebarOpen ? "ml-20" : "ml-70"
        }`}
      >
        {!sidebarOpen && (
          <button
            className="fixed top-5 left-5 z-99 w-10 h-10 bg-linear-to-r from-red-500 to-orange-500 text-white rounded-xl shadow-lg cursor-pointer flex items-center justify-center hover:scale-110 transition-all duration-300"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu size={22} />
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
}
