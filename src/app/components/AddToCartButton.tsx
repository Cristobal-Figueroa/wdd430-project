"use client";

import { useState } from "react";
import styles from "../page.module.css";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const existing = localStorage.getItem("cart");
    const cart = existing ? JSON.parse(existing) : [];
    const found = cart.find((item: Product & { quantity: number }) => item.id === product.id);

    if (found) {
      found.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <button onClick={handleAdd} className={styles.primaryButton}>
        {added ? "Added!" : "Add to Cart"}
      </button>
      {added && (
        <p style={{ marginTop: "1rem", color: "var(--success)", fontWeight: 600 }}>
          Product added to cart
        </p>
      )}
    </>
  );
}
