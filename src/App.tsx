import "@/styles/index.css";
import Header from "@/components/Header";
import Swiper from "@/components/Swiper/Swiper";
import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Swiper />
      <Category />
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
