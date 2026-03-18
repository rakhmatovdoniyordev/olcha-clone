import Layout from "@/Layout/Layout";
import Cart from "@/pages/Cart/Cart";
import Comparison from "@/pages/Comparison/Comparison";
import Detail from "@/pages/Detail/Detail";
import Favourites from "@/pages/Favourites/Favourites";
import Home from "@/pages/Home";
import { useRoutes } from "react-router-dom";
import Login from "@/pages/Admin/Login/Login";
import DashboardLayout from "@/pages/Admin/Dashboard/DashboardLayout";
import DashboardHome from "@/pages/Admin/Dashboard/DashboardHome";
import BannerManagement from "@/pages/Admin/Banners/BannerManagement";
import CategoryManagement from "@/pages/Admin/Categories/CategoryManagement";
import ProductManagement from "@/pages/Admin/Products/ProductManagement";

const Router = () => {
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if (!isLoggedIn) {
      window.location.href = "/admin/login";
      return null;
    }
    return <>{children}</>;
  };

  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "detail/:id",
              element: <Detail />,
            },
            {
              path: "comparison",
              element: <Comparison />,
            },
            {
              path: "favorites",
              element: <Favourites />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
        {
          path: "/admin/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/dashboard",
              element: <DashboardHome />,
            },
            {
              path: "banners",
              element: <BannerManagement />,
            },
            {
              path: "categories",
              element: <CategoryManagement />,
            },
            {
              path: "products",
              element: <ProductManagement />,
            },
          ],
        },
      ])}
    </>
  );
};

export default Router;
