import React, { useContext } from "react";
import "./Products.css";
import { FilterContext } from "../Context/ContextFilter";
import Card from "./Card/Card";
import Footer from "../Footer/Footer";

export default function Products() {
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });
  return (
    <>
      <div className="product_container">
        {productsList.map((product) => <Card key={product.id} {...product} />)}
      </div>
      <Footer />
    </>
  );
}
