import React from "react";
import "./Home.css";
// import Card from "./Card";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61KMBMeI9ZL._SX3000_.jpg"
          alt="amazon music banner"
        />
        <div className="home__row">
          <Product
            id="10"
            title="Product 1"
            image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
            price={99.99}
            rating={5}
          />
          <Product
            id="20"
            title="Product 2"
            image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
            price={99.99}
            rating={5}
          />
          <Product
            id="30"
            title="Product 3"
            image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
            price={99.99}
            rating={5}
          />
          <Product
            id="40"
            title="Product 4"
            image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
            price={99.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="10"
            title="Product 1"
            image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
            price={99.99}
            rating={5}
          />
          <Product
            id="20"
            title="Product 2"
            image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/new_dashcard/quadimagecard_tools2_186x116._SY116_CB422516659_.jpg"
            price={99.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
