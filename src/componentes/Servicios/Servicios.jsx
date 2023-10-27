import React from "react";
import "./servicios.css";
import logo from "../../galeria/logo.png";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";

function VerticalDemo() {
  const products = [
    {
      name: "Producto 1",
      price: 10,
      inventoryStatus: "INSTOCK",
      image: "product1.jpg",
    },
    {
      name: "Producto 2",
      price: 20,
      inventoryStatus: "LOWSTOCK",
      image: "product2.jpg",
    },
    {
      name: "Producto 3",
      price: 30,
      inventoryStatus: "OUTOFSTOCK",
      image: "product3.jpg",
    },
    // Agrega más productos simulados aquí
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const productTemplate = (product) => {
    return (
      <div className="product-card">
        <div className="product-image"></div>
        <div className="product-details">
          <h4 className="product-name">{product.name}</h4>
          <h6 className="product-price">${product.price}</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className="product-buttons">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    
    <div className="carousel-container">
      <Carousel
        value={products}
        numVisible={1}
        numScroll={1}
        orientation="vertical"
        verticalViewPortHeight="360px"
        itemTemplate={productTemplate}
      />
      <img
        src={logo}
        alt=""
        style={{ width: "40%", display: "block", marginRight: "" }}
      />
    </div>
  );
}

export default VerticalDemo;
