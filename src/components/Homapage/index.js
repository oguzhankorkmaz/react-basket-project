import React from "react";
import reactDom from "react-dom";
import { useState } from "react/cjs/react.development";
import Card from "../Card";

function Home() {
  const [basket, setBasket] = useState(0);
  const [toplamFiyat, setToplamFiyat] = useState(0);
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="content">
            <div className="card-area">
              <Card
                baslik="Bilgisayar"
                aciklama="Asus Rog Strix"
                image="asus-rog-strix.jpg"
                fiyat={2000}
                setBasket={setBasket}
                basket={basket}
                setToplamFiyat={setToplamFiyat}
                toplamFiyat={toplamFiyat}
              ></Card>
              <Card
                baslik="Telefon"
                aciklama="Xiomi Redmi Note 10"
                image="xioami-redmi-note-10.jpg"
                fiyat={700}
                setBasket={setBasket}
                basket={basket}
                setToplamFiyat={setToplamFiyat}
                toplamFiyat={toplamFiyat}
              ></Card>
            </div>
            <div className="basket-area">
              Sepetteki Ürün Sayısı: {basket} <br /> Toplam Fiyat: {toplamFiyat} $
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
