import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProducts } from "../Utils/features.jsx/ProductsSlice";
import {
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "../Utils/features.jsx/ProductsSlice";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Dell Inspiron 3530",
      description: "13th Gen Intel Core i5-1334U",
      price: 713,
      discountPercentage: 13,
      rating: 4.69,
      stock: 94,
      brand: "Dell",
      category: "Laptops",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZorzuakjQ8H52QtGmOSwSrbtHD9gBuWky2vwVmi9Tg&s",
      images: [
        "https://cdn1.smartprix.com/rx-iGhCyAPdl-w420-h420/dell-15-inspiron-353.jpg"
      
      ],
    },
    {
      id: 2,
      title: "HP Victus",
      description:
        "12th Gen Intel Core i5-12450H",
      price: 786,
      discountPercentage: 23,
      rating: 4.44,
      stock: 34,

      brand: "HP",
      category: "Laptops",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4y0mGv7ZopeIMGe1f1Q9AIVibErKloIIGA&s",
      images: [
        "https://cdn1.smartprix.com/rx-i9WJj5n1U-w420-h420/hp-victus-15-fb0121a.jpg"
     
      ],
    },
    {
      id: 3,
      title: "Asus Vivobook S15",
      description:
        "Intel Core EVO i5-13500h ",
      price: 893,
      discountPercentage: 30,
      rating: 4.09,
      stock: 36,

      brand: "Asus",
      category: "Laptops",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxnSuc17Y3rhgRwr5TkFXfVyVNzmh1pImZA&s",
      images: [
        "https://cdn1.smartprix.com/rx-iUVL4a1Ah-w1200-h1200/UVL4a1Ah.jpg"
      ],
    },
    {
      id: 4,
      title: "Lenovo Legion Slim 5",
      description: "AMD Ryzen 7 7840HS 16",
      price: 1191,
      discountPercentage: 35,
      rating: 4.3,
      stock: 123,

      brand: "Lenovo",
      category: "Laptops",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRGt2XE4KUL4FdmhJKcJR58844KwjiJIZcA&s",
      images: [
        "https://cdn1.smartprix.com/rx-irgfVN7iQ-w420-h420/lenovo-legion-slim-5.jpg"
       
      ],
    },
    {
      id: 5,
      title: "Apple MacBook Air ",
      description:
        "M1 Chip",
      price: 858,
      discountPercentage: 23,
      rating: 4.09,
      stock: 32,

      brand: "Apple",
      category: "Laptops",
      thumbnail:
        "https://icon2.cleanpng.com/20190707/ejz/kisspng-huawei-p3-lite-4g-128gb-dual-sim-black-4gb-ram-48-megapiksel-kamerasyla-huawei-p3-lite-yaknd-5d21cbe1dfbb72.2727915715624959699164.jpg",
      images: [
        "https://cdn1.smartprix.com/rx-iXMsgRkkm-w1200-h1200/XMsgRkkm.jpg"

      ],
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const dispatchProducts = useDispatch();
  const productList = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatchProducts(showProducts(products));
  }, [dispatchProducts]);

  const handleInc = (id, quantity) => {
    dispatchProducts(incrementProduct({ id }));
  };
  const handleDec = (id, quantity) => {
    if (quantity > 1) dispatchProducts(decrementProduct({ id }));
  };
  const RemovefromCart = (id, quantity) => {
    dispatchProducts(removeProduct({ id }));
  };

  return (
    <div>
      <section>
        <div className="container products ">
          <div className=" row mt-0">
            {productList.map((element, index) => {
              return (
                <div
                  key={index}
                  className="container d-flex  justify-content-center "
                >
                  <div className=" card mb-4 mt-2 ">
                    <div className="card-header img-fluid mt-1 pb-4 d-flex  justify-content-center ">
                      <img  src={element.images[0]} className="image" />
                    </div>
                    <div className="card-body fs-6">
                      <div className="card-text">
                        Product Name : {element.title}
                      </div>
                      <div className="card-text">
                        Product Descrption : {element.description}
                      </div>
                      <div className="card-text">
                        <strong>Product Price : ${element.price}</strong>
                      </div>
                      <div className="card-text mt-3">
                        <span className="fs-6">Select the quantity : </span>{" "}
                        &nbsp;
                        <span>
                          <button
                            className=" btn-minus btn  btn-danger fs-6"
                            onClick={() =>
                              handleDec(element.id, element.quantity || 1)
                            }
                          >
                            -
                          </button>
                        </span>
                        <span className="fs-6 ms-2 me-2">
                          {element.quantity ? element.quantity : 1}
                        </span>
                        <span>
                          <button
                            className=" btn-minus btn  btn-success fs-6"
                            onClick={() =>
                              handleInc(element.id, element.quantity || 1)
                            }
                          >
                            +
                          </button>
                        </span>
                      </div>
                      <div>
                        <div className="card-footer d-flex justify-content-center mt-4 pb-0 mb-0">
                          <button
                            className="btn btn-dark mt-3 mb-0 pb-2 fs-6"
                            onClick={() => {
                              RemovefromCart(element.id, element.quantity || 1);
                            }}
                          >
                            Remove from Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;