import React from "react";
import { useEffect, useState } from "react";
import Stripe from "stripe";

import ProductCard from "../../components/ProductCard";
import styles from "./component.module.css";

const ProductGalleryBlock = () => {
  const [products, setProducts] = useState<Stripe.Product[]>([]);
  const fetchProducts = async () => {
    const res = await fetch("/api/fetch-products");
    const jsonRes = await res.json();
    setProducts(jsonRes.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.product_gallery}>
      {products &&
        products.map((product: Stripe.Product) => (
          <ProductCard
            product={product}
            key={product.name + Math.round(Math.random() * 100)}
          />
        ))}
    </div>
  );
};

export default ProductGalleryBlock;
