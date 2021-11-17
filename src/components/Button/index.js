import React, { useState } from "react";
import reactDom from "react-dom";
import "./button.scss";

function Button({ text, onClick, inBasket}) {
  return (
    <>
      <button className={inBasket === false ? "button ekle" : "button sil"} onClick={onClick}>
        {text} 
      </button>
    </>
  );
}

export default Button;
