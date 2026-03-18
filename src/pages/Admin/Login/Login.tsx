import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const STATIC_CREDENTIALS = {
    username: "admin",
    password: "admin123",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === STATIC_CREDENTIALS.username &&
      password === STATIC_CREDENTIALS.password
    ) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-300 via-orange-400 to-orange-500 p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-105 animate-slideUp">
        <div className="login-header text-center mb-8">
          <div className="logo w-20 h-20 mx-auto mb-5 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 hover:rotate-5">
            <img
              src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
              alt="Logo"
              className="w-15 h-15 object-contain"
            />
          </div>
          <h1 className="text-[28px] font-bold text-gray-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-500 text-sm">Tizimga kirish</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="form-group flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-700"
            >
              Foydalanuvchi nomi
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm transition-all duration-300 outline-none focus:border-red-700 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="px-4 py-3 border-2 border-gray-200 rounded-xl text-sm transition-all duration-300 outline-none focus:border-red-700 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
            />
          </div>
          {error && (
            <div className="error-message bg-red-50 text-red-700 py-3 px-4 rounded-lg text-sm border-l-4 border-red-600 animate-shake">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="login-btn bg-linear-to-r from-orange-300 to-red-500 text-white py-3.5 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(102,126,234,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(102,126,234,0.4)] active:translate-y-0"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
