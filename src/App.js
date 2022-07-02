import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarCustom from "./Components/NavbarCustom";
import Home from "./Components/Home";
import List from "./Components/List";
import DetailsArticle from "./Components/DetailsArticle";

function App() {
  const products = [
    {
      id: 1,
      name: "T-shrt",
      price: 55,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg",
    },
    {
      id: 2,
      name: "Shorts",
      price: 96,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg",
    },
    {
      id: 3,
      name: "men-shoes",
      price: 196,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-a-m-infuriate2-m-s91-blackblackwht-trainers.jpg",
    },
  ];
  return (
    <BrowserRouter>
      <NavbarCustom />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<List products={products} />} />
        <Route path="/products/:id" element={<DetailsArticle products={products}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
