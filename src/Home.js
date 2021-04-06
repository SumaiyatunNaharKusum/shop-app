import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://floranext.com/wp-content/uploads/2016/12/ChristmasBanner2.2016-1-watermark.jpg"
        alt=""
      />
      {/* Product id, title, price, image */}
      <div className="home__row">
        <Product
          id="121"
          title="Rice - 5Kg"
          price={60}
          rating={3}
          image="http://cdn.shopify.com/s/files/1/0866/0514/products/Freeze-dried-rice_1024x1024.jpg?v=1533816855"
        />
      </div>

      <div className="home__row">
        <Product
          id="121"
          title="Mr.twist -150gmMr.twist -150gm"
          price={10}
          rating={3}
          image="https://www.thebasketbd.com/pub/media/catalog/product/cache/08f23f216093c0e51e483fff5c06704d/9/0/909790009685.jpg"
        />
        <Product
          id="202"
          title="Ruchi BBQ -200gm"
          price={15}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzH6ojW8Q4bXjiVKhmb_148f5NbK10AS7RAw&usqp=CAU"
        />
      </div>

      <div className="home__row">
        <Product
          id="121"
          title="Life boy shoop"
          price={9}
          rating={4}
          image=" https://sc02.alicdn.com/kf/U6fe92182c52847a180d311fe8a74c394h.jpg"
        />
        <Product
          id="202"
          title="Parechute coconut oil  -250Ml"
          price={20}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61VxqCyJiNL._SY355_.jpg"
        />
        <Product
          id="373"
          title="Omera LPG refill  -25L"
          price={150}
          rating={3}
          image="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/watermarked/2018-09-13_125154.655006Omera_Lp_Gas_35_Kg.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="202"
          title="Onions -1kg"
          price={12}
          rating={3}
          image="https://www.producemarketguide.com/sites/default/files/Variety.tar/Variety/yellow-onions-bulb_variety-page.png"
        />
        <Product
          id="202"
          title="Marks powder milk -250g"
          price={70}
          rating={3}
          image="https://freshsobji.com.bd/wp-content/uploads/2020/05/Marks-Full-Cream-Powder-Milk-1-kg-625.jpg"
        />
        <Product
          id="373"
          title="Moushum bay leaves  -50gL"
          price={56}
          rating={3}
          image="https://tse1.mm.bing.net/th?id=OIP.vjlLLlqOx6jDRZiPSmGA0gHaHa&pid=Api&P=0&w=300&h=300"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
