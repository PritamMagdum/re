import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import ProductList from "../features/product/components/ProductList";
function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default Home;
