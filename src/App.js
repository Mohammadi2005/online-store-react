import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Nav} from "./components/nav";
import {ShopContextProvider} from "./context/shopContext";


function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Shop/>} />
                        <Route path="/cart" element={<Cart/>} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
