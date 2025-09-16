import CategoryTabs from "./Components/CategoryTabs";
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
      <OrderInfo></OrderInfo>
      <SpecialOffers></SpecialOffers>

      <MenuSection></MenuSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
