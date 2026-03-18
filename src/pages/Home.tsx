import Category from '@/components/Category/Category'
import Card from '@/components/Card/Card'
import Swiper from '@/components/Swiper/Swiper'


const Home = () => {
  return (
    <>
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
    </>
  )
}

export default Home