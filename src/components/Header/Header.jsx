import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import { Link } from "react-router-dom";


function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);


  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);

  return (
    <header className="header">
      <nav className="nav">
        <Link to={"/"} className="logo">
        Grocery Store
        </Link>
        <div className="icon_Sopping_box">
          <Link to={"/basket"} className="shoppe_icon_box">
            <AiOutlineShopping className="shop_icon" />
            {state.basket.length > 0 && (
              <span className="badge_shope">{state.basket.length}</span>
            )}
          </Link> 
        </div>
      </nav>
    </header>
  );
}

export default Header;
