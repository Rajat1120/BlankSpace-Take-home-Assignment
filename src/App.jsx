import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import MenuSection from "./Components/MenuSection";
import OrderInfo from "./Components/OrderInfo";
import SpecialOffers from "./Components/SpecialOffers";

function App() {
  return (
    <div>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <main>
        <OrderInfo></OrderInfo>
        <SpecialOffers></SpecialOffers>

        <MenuSection></MenuSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
