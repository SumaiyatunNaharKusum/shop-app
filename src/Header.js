import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider"

function Header() {
  const [{basket}] = useStateValue();
 

  console.log(basket);


  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="Header__logo"
          src="https://cdn.pixabay.com/photo/2016/12/20/05/24/store-1919713_640.png"
          alt=""
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* {1st link} */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello </span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* {2st link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* {3st link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo"> prime</span>
          </div>
        </Link>
        {/* {4th link} */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            
            <ShoppingBasketIcon />
           
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* {basket icon wit} */}
    </nav>
  );
}

export default Header;
