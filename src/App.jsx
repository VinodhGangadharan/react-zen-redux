import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import { productStore } from "./Utils/features.jsx/ProductsStore";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Provider store={productStore}>
        <Navbar />
        <Home />
      </Provider>

      <Footer />
    </div>
  );
};

export default App;