import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import "./card.scss";

function Card({
  image,
  baslik,
  aciklama,
  fiyat,
  setBasket,
  basket,
  toplamFiyat,
  setToplamFiyat,
}) {
  const [inBasket, setInBasket] = useState(false);

  function addbasket() {
    if (inBasket === false) {
      setInBasket(true);
      setBasket(basket + 1);
      setToplamFiyat(toplamFiyat + fiyat);
    } else {
      setInBasket(false);
      setBasket(basket - 1);
      setToplamFiyat(toplamFiyat - fiyat);
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={`/img/${image}`} />
        </div>
        <div className="card-content">
          <div className="title">{baslik}</div>
          <div className="desc">{aciklama}</div>
          <div className="price">{fiyat}$</div>
        </div>
        <div className="button-area">
          <Button
            text={inBasket === false ? "Sepete Ekle" : "Sepetten Çıkar"}
            onClick={() => addbasket()}
            inBasket={inBasket}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default Card;
