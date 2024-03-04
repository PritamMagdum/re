import Navbar from "../features/Navbar/Navbar";
import Cart from "../features/cart/Cart";
import Footer from "../features/common/Footer";

function CartPage() {
  return (
    <div>
      <Navbar>
        <Cart></Cart>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default CartPage;
